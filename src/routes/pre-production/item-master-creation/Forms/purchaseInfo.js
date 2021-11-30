import React, {Fragment, useEffect, useState} from 'react';
import { Form } from 'formik';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {AccordionInput} from "../../../../helpers/helpers";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {makeStyles} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Select1 from "react-dropdown-select";
const useStyles = makeStyles(theme => ({
    error: {
        color: '#ff0000',
        fontSize: '12px'
    }
}));

const columns = [
    {
        name: "materialCode1",
        label: "MaterialCode",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "supplier",
        label: "Supplier",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "brand",
        label: "Brand",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "supplierRef",
        label: "SupplierReference",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "description",
        label: "Description",
        options: {
            filter: true,
            sort: false,
        }
    }
];

const PurchaseInfo = ({supplierData, weightUOM, currency, onSavePurchaseData, purchaseRecord, tableOptions}) => {
    const classes = useStyles();
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [supplierOption, setSupplierDataOption] = useState([]);
    const [currencyOption, setCurrencyOption] = useState([]);
    const [weightUomOption, setWeightUomOption] = useState([]);
    const [values, setValues] = useState({
        fromDate: new Date(),
        toDate: new Date(),
        supplier: '',
        supplierOpt: [],
        currency: '',
        currencyOpt: [],
        moquom: '',
        moquomOpt: [],
        supplierRef: undefined,
        multiples: undefined,
        leadTime: undefined

    })
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSelectChange = (e, name='') => {
        if (name === 'supplier' && (e && e.length > 0 && e[0].value === '')) {
            setError('please choose the supplier')
        } else setError('')
        if (e && e.length > 0 && e[0].value !== '') {
            if (name === 'supplier') {
                setValues({...values,
                    supplier: e[0].value,
                    supplierOpt: e
                })
            }
            if (name === 'moquom') {
                setValues({...values,
                    moquom: e[0].value,
                    moquomOpt: e
                })
            }
            if (name === 'currency') {
                setValues({...values,
                    currency: e[0].value,
                    currencyOpt: e
                })
            }
        }
    }

    useEffect(() => {
        if (purchaseRecord.length > 0)
            setValues({})
    }, [purchaseRecord])

    const handleDateChange = (dateValue,  dateType) => {
        if(dateType === 'start') {
            setFromDate(dateValue);
            Object.assign(values, {fromDate: dateValue})
        }
        else if(dateType === 'end') {
            setToDate(dateValue);
            Object.assign(values, {toDate: dateValue})
        }
    }

    const onPurchaseDataSubmit = () => {
        console.log(values , "===================")
        if (Object.keys(values).length > 0 && values.supplier !== '') {
            onSavePurchaseData(values);
            setValues({
                fromDate: new Date(),
                toDate: new Date(),
                supplier: '',
                supplierOpt: [],
                currency: '',
                currencyOpt: [],
                moquom: '',
                moquomOpt: [],
                supplierRef: undefined,
                multiples: undefined,
                leadTime: undefined
            })
            setError('')
            document.getElementById('purchaseInfoForm').reset();
        } else {
            setError('please choose the supplier')
        }
    }

    useEffect(() => {
        if (supplierData && supplierData.length > 0) {
            const supData = supplierData.map((v) => ({ value: v.supCode, label: v.supName}))
            setSupplierDataOption(supData)
        }
        if (currency && currency.length > 0) {
            const supData = currency.map((v) => ({ value: v.code, label: v.codeDesc}))
            setCurrencyOption(supData)
        }
        if (weightUOM && weightUOM.length > 0) {
            const supData = weightUOM.map((v) => ({ value: v.code, label: v.codeDesc}))
            setWeightUomOption(supData)
        }
    }, [supplierData, currency, weightUOM])

    return (
        <Form autoComplete="off" id={'purchaseInfoForm'}>
            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                <Accordion className="border mb-15">
                    <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                        <div className="acc_title_font">
                            <Typography>Purchase Info Record</Typography>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>

                        <div className="float-right pr-0 but-tp">
                            <button
                                type={'button'}
                                onClick={onPurchaseDataSubmit}
                                className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-0 text-white btn-icon b-sm"
                                tabIndex="0"><span className="MuiButton-label">Add <i
                                className="zmdi zmdi-plus-circle" /></span><span
                                className="MuiTouchRipple-root" /></button>
                        </div>

                        <div className="clearfix" />
                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                            <div className="row">
                                <AccordionInput>
                                    <TextField
                                        id="Material Code"
                                        fullWidth
                                        label="Material Code"
                                        placeholder="Material Code"
                                        name={'materialCode1'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.materialCode}
                                        // error={touched.materialCode1 && Boolean(errors.materialCode1)}
                                        // helpertext={touched.materialCode1 && errors.materialCode1}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <FormControl fullWidth>
                                        <div className="select_label_name mt-15">
                                            <Select1
                                                dropdownPosition="auto"
                                                createNewLabel="Supplier"
                                                options={supplierOption}
                                                onChange={(e) => handleSelectChange(e, 'supplier')}
                                                placeholder="Supplier"
                                                values={values.supplierOpt}
                                            />
                                        </div>
                                        {
                                            error && <span className={classes.error}>{error}</span>
                                        }
                                    </FormControl>
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Brand"
                                        fullWidth
                                        label="Brand"
                                        placeholder="Brand"
                                        name={'brand'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.brand}
                                        // error={touched.brand && Boolean(errors.brand)}
                                        // helpertext={touched.brand && errors.brand}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="SupplierReference"
                                        fullWidth
                                        label="Supplier Reference"
                                        placeholder="Supplier Reference"
                                        name={'supplierRef'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.supplierRef ? values.supplierRef : ''}
                                        // error={touched.supplierRef && Boolean(errors.supplierRef)}
                                        // helpertext={touched.supplierRef && errors.supplierRef}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Multiples"
                                        fullWidth
                                        label="Multiples"
                                        placeholder="Multiples"
                                        name={'multiples'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.multiples ? values.multiples : ''}
                                        // error={touched.multiples && Boolean(errors.multiples)}
                                        // helpertext={touched.multiples && errors.multiples}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="MOQ"
                                        fullWidth
                                        label="MOQ"
                                        placeholder="MOQ"
                                        name={'moq'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.moq}
                                        // error={touched.moq && Boolean(errors.moq)}
                                        // helpertext={touched.moq && errors.moq}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <FormControl fullWidth>
                                        <div className="select_label_name mt-15">
                                            <Select1
                                                dropdownPosition="auto"
                                                createNewLabel="MOQUOM"
                                                options={weightUomOption}
                                                onChange={(e) => handleSelectChange(e, 'moquom')}
                                                placeholder="MOQUOM"
                                                values={values.moquomOpt}
                                            />
                                        </div>
                                    </FormControl>
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Lead Time"
                                        fullWidth
                                        label="Lead Time"
                                        placeholder="Lead Time"
                                        name={'leadTime'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.leadTime ? values.leadTime : ''}
                                        // error={touched.leadTime && Boolean(errors.leadTime)}
                                        // helpertext={touched.leadTime && errors.leadTime}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Color"
                                        fullWidth
                                        label="Color"
                                        placeholder="Color"
                                        name={'color'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.color}
                                        // error={touched.color && Boolean(errors.color)}
                                        // helpertext={touched.color && errors.color}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Size"
                                        fullWidth
                                        label="Size"
                                        placeholder="Size"
                                        name={'size'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.size}
                                        // error={touched.size && Boolean(errors.size)}
                                        // helpertext={touched.size && errors.size}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <Fragment>
                                        <div className="rct-picker">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'From date',
                                                    }}
                                                    label="From Date"
                                                    value={fromDate}
                                                    onChange={(e) => handleDateChange(e,  'start')}
                                                    animateYearScrolling={false}
                                                    leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                                    rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                                    fullWidth
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                    </Fragment>
                                </AccordionInput>

                                <AccordionInput>
                                    <Fragment>
                                        <div className="rct-picker">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'To date',
                                                    }}
                                                    label="To Date"
                                                    value={toDate}
                                                    onChange={(e) => handleDateChange(e,  'end')}
                                                    animateYearScrolling={false}
                                                    leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                                    rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                                    fullWidth
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                    </Fragment>
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Price"
                                        fullWidth
                                        label="Price"
                                        placeholder="Price"
                                        name={'price'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.price}
                                        // error={touched.price && Boolean(errors.price)}
                                        // helpertext={touched.price && errors.price}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <FormControl fullWidth>
                                        <div className="select_label_name mt-15">
                                            <Select1
                                                dropdownPosition="auto"
                                                createNewLabel="Currency"
                                                options={currencyOption}
                                                onChange={(e) => handleSelectChange(e, 'currency')}
                                                placeholder="Currency"
                                                values={values.currencyOpt}
                                            />
                                        </div>
                                    </FormControl>
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="BinCode"
                                        fullWidth
                                        label="Bin Code"
                                        placeholder="Bin Code"
                                        name={'binCode'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.binCode ? values.binCode : ''}
                                        // error={touched.binCode && Boolean(errors.binCode)}
                                        // helpertext={touched.binCode && errors.binCode}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Descriptions"
                                        fullWidth
                                        label="Descriptions"
                                        placeholder="Descriptions"
                                        name={'description'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.description}
                                        // error={touched.description && Boolean(errors.description)}
                                        // helpertext={touched.description && errors.description}
                                    />
                                </AccordionInput>

                                <AccordionInput>
                                    <TextField
                                        id="Remarks"
                                        fullWidth
                                        label="Remarks"
                                        placeholder="Remarks"
                                        name={'remarks'}
                                        onChange={(e) => handleInputChange(e)}
                                        // onBlur={handleBlur}
                                        value={values.remarks}
                                        // error={touched.remarks && Boolean(errors.remarks)}
                                        // helpertext={touched.remarks && errors.remarks}
                                    />
                                </AccordionInput>
                            </div>
                        </div>
                        {
                            purchaseRecord.length > 0 &&
                            <MUIDataTable
                                data={purchaseRecord}
                                columns={columns}
                                options={tableOptions}
                            />
                        }
                    </AccordionDetails>
                </Accordion>
            </div>
        </Form>
    )
}

export default PurchaseInfo;