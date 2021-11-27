/**
 * Basic Table
 */
import React, {Fragment, useEffect, useState} from 'react';
// import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Helmet } from "react-helmet";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Badge } from 'reactstrap';

import Checkbox from '@material-ui/core/Checkbox';
// api
import api from 'Api';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import DropzoneComponent from 'react-dropzone-component';
// intl messages
import IntlMessages from 'Util/IntlMessages';
//import AddNewUserForm from './AddNewUserForm';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Paper, makeStyles } from '@material-ui/core';

// import Controls from "../../controls/Controls"

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    // root: {
    //     '& .MuiFormControl-root': {
    //         width: '80%',
    //         margin: theme.spacing(1)
    //     }
    // }
    error: {
        color: '#ff0000'
    }
}));

import {
    AccordionInput,
    AccordionMain, constructEditData, constructFormValues,
    GetAccordionSummary
} from "../../../helpers/helpers";
import { API_URLS } from "../../../constants/api_url_constants";
import {API_SERVICE, getApiCall, postApiCall} from "../../../services/commonApi";
const $ = require('jquery');
import MUIDataTable from "mui-datatables";
import ReactSelect from "../../controls/ReactSelect";
import moment from "moment";
import PurchaseInfo from "./Forms/purchaseInfo";
import {NotificationManager} from "react-notifications";

const ItemMasterCreation = ({ match }) => {
    const classes = useStyles();
    const [initialValues, setInitialValues] = useState({
        parentGroup: '',
        materialType: '',
        materialGroupSub: '',
        materialCode: '',
        materialDescription: '',
        buyerDivision: '',
        active: '',
        fiber: '',
        content: '',
        fabricContent: '',
        fabricType: '',
        fabricWave: '',
        dyeProcess: '',
        yarnWrap: '',
        wrapYarnBlend: '',
        yarnWeft: '',
        weftYarnBlend: '',
        endsInches: '',
        picksInches: '',
        shrinkWrap: '',
        shrinkWeft: '',
        washMethod: 's',
        FabWt_BW: '',
        FabWt_AW: '',
        weightUOM: '',
        actualWidth: '',
        cuttableWidth: '',
        widthUOM: '',
        physicalFinish: '',
        chemicalFinish: '',
        quality: '',
        tkt: '',
        tex: '',
        noOfMeter: '',
        grpArticleNo: '',
        product: '',
        Finish: '',
    });
    const [parentGroup, setParentGroup] = useState([])
    const [materialType, setMaterialType] = useState([])
    const [materialGroupType, setMaterialGroupType] = useState([])
    const [buyerDivision, setBuyerDivision] = useState([])
    const [fiber, setFiber] = useState([])
    const [fabricType, setFabricType] = useState([])
    const [fabricWave, setFabricWave] = useState([])
    const [dyeProcess, setDyeProcess] = useState([])
    const [washMethod, setWashMethod] = useState([])
    const [weightUOM, setWeightUom] = useState([])
    const [supplierData, setSupplier] = useState([])
    const [itemData, setItemData] = useState([])
    const [purchaseRecord, setPurchaseRecord] = useState([])
    const [approvalData, setApprovalData] = useState([])
    const [physicalFinish, setPhysicalFinish] = useState([])
    const [chemicalFinish, setChemicalFinish] = useState([])
    const [currency, setCurrency] = useState([])
    const [fabricTab, setFabricTab] = useState(false);
    const [detailsTab, setDetailsTab] = useState(false);
    const [threadTab, setThreadTab] = useState(false);
    const [checked, setChecked] = useState(true);
    const [page, setPage] = useState(1);
    const [fromDate, setFromDate] = useState(moment());
    const [toDate, setToDate] = useState(moment());
    const [editData, setEditData] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    const handleDateChange = (dateValue, setFieldValue, dateType) => {
        if(dateType === 'start') {
            setFromDate(dateValue);
            setFieldValue('fromDate', dateValue)
        }
        else if(dateType === 'end') {
            setToDate(dateValue);
            setFieldValue('toDate', dateValue)
        }
    }


    const validationShape = {
        parentGroup: Yup.string().required("Please choose parentGroup"),
        materialType: Yup.string().required('Please choose the MaterialType'),
        materialGroupSub: Yup.string().required('Please choose Material GroupSub'),
        materialCode: Yup.string().required('Please enter the materialCode'),
    };
    const options = [
        { id: 10, title: 'Autumn' },
        { id: 20, title: 'Summer' },
        { id: 30, title: 'Winter' }
    ]

    const columns = [
        {
            name: "materialCode",
            label: "Material",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "materialType",
            label: "Type",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "group",
            label: "Group",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "subGroup",
            label: "Sub Group",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "materialCode",
            label: "Material Code",
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
        },
        {
            name: "commonArticleNumber",
            label: "Common Article Number",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "approved",
            label: "Approved",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "active",
            label: "Active",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "hid",
            label: "Action",
            options: {
                filter: true,
                sort: false,
                print: false,
                customBodyRender: (value => {
                    return(
                        <div>
                            <button className="MuiButtonBase-root  mr-10 text-danger btn-icon b-ic delete"
                                    onClick={() => getCurrentData(value)}
                                    tabIndex="0"
                                    type="button"
                            >
                                <i className="zmdi zmdi-edit"/><span className="MuiTouchRipple-root"/>
                            </button>
                            <button className="MuiButtonBase-root  mr-10 text-danger btn-icon b-ic delete"
                                    onClick={() => getCurrentData(value)}
                                    tabIndex="0"
                                    type="button"
                            >
                                <i className="zmdi zmdi-delete"/><span className="MuiTouchRipple-root"/>
                            </button>
                        </div>
                    )
                })
            }
        }
    ];

    const getCurrentData = (tableId) => {
        let editData = [];
        getApiCall(
            API_URLS.GET_MATERIAL_MASTER_ITEMS+ `?MatID=${tableId}`
        ).then((r) => {
            if (r) {
                const values = constructEditData(...r.data.data)
                setEditData(values)
                setInitialValues(values)
                setIsUpdate(true)
                checkMaterialTypeOnEdit(values.materialType)
                if(values.purchaseData && values.purchaseData.length > 0)
                    setPurchaseRecord(values.purchaseData)
            }
        }).catch(e => console.log('get table  data error ' + e))
    }

    const checkMaterialTypeOnEdit = (values) => {
        if (values === 'FBR' || values === 'FLN' || values === 'PKT') {
            setFabricTab(true)
        } else if (values === 'FTD') {
            setThreadTab(true)
        } else if (values === 'LBL' || values === 'TMS' || values === 'TPM' || values === 'ILN') {
            setDetailsTab(true)
        }
    }

    const tableOptions = {
        selectableRows: false,
        responsive: "scrollFullHeight",
        filters: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5],
        serverSide: true,
        count: -1, // Unknown number of items
        page,
        onTableChange: (action, tableState) => {
            // console.log(action, tableState);
            if (action === "changePage") {
                console.log("Go to page", tableState.page);
                this.changePage(tableState.page);
            }
        }
    };

    useEffect(() => {
        GetMiscellaneousList('PARENTGRP');
        getMaterialType();
        getMaterialType('group');
        getBuyerDivision();
        GetMiscellaneousList('FBRCONTENT');
        GetMiscellaneousList('FABTYPE');
        GetMiscellaneousList('FBRWEAVE');
        GetMiscellaneousList('FBRDYED');
        GetMiscellaneousList('WashType');
        GetMiscellaneousList('UOM');
        GetMiscellaneousList('FBRPhyFin');
        GetMiscellaneousList('FBRCheFin');
        GetMiscellaneousList('CUR');
        GetSupplier();
        GetItemList();
        getApprovalList();
        getTableData()
    }, []);

    const getTableData = () => {
        setPage(2)
    }

    const getApprovalList = () => {
        getApiCall(
            API_URLS.GET_ITEM_MASTER_APPROVAL
        ).then((r) => {
            if (r)
                setApprovalData(r.data.data)
        }).catch(e => console.log('supplier error ' + e))
    }
    const GetItemList = () => {
        getApiCall(
            API_URLS.GET_MATERIAL_MASTER_ITEMS
        ).then((r) => {
            if (r)
                setItemData(r.data.data)
        }).catch(e => console.log('supplier error ' + e))
    }

    const GetSupplier = () => {
        getApiCall(
            API_URLS.GET_SUPPLIER
        ).then((r) => {
            if (r)
                setSupplier(r.data.result.data)
        }).catch(e => console.log('supplier error ' + e))
    }
    const getBuyerDivision= () => {
        getApiCall(
            API_URLS.GET_BUYER_DIVISION
        ).then((r) => {
            if (r)
                setBuyerDivision(r.data.result.data)
        }).catch(e => console.log('buyer error ' + e))
    }
    const GetMiscellaneousList = (type = '') => {
        let url = API_URLS.GET_MISCELLANEOUS + `?MType=${type}`;
        getApiCall(
            url
        ).then((r) => {
            if (r) {
                const result = r.data.result.data
                if (type === 'PARENTGRP')
                    setParentGroup(result)
                else if (type === 'FBRCONTENT')
                    setFiber(result)
                else if (type === 'FABTYPE')
                    setFabricType(result)
                else if (type === 'FBRWEAVE')
                    setFabricWave(result)
                else if (type === 'FBRDYED')
                    setDyeProcess(result)
                else if (type === 'WashType')
                    setWashMethod(result)
                else if (type === 'UOM')
                    setWeightUom(result)
                else if (type === 'FBRPhyFin')
                    setPhysicalFinish(result)
                else if (type === 'FBRCheFin')
                    setChemicalFinish(result)
                else if (type === 'CUR')
                    setCurrency(result)
            }
        }).catch(e => console.log('parentGroup error ' + e))
    }
    const getMaterialType = (type = '') => {
        const url = type === 'group' ? API_URLS.GET_MATERIAL_TYPE + `?Itemtype=ELE` : API_URLS.GET_MATERIAL_TYPE
        getApiCall(
            url
        ).then((r) => {
            if (r)
                type === 'group' ? setMaterialGroupType(r.data.result.data) : setMaterialType(r.data.result.data)
        }).catch(e => console.log('material error ' + e))
    }
    const onMaterialTypeChange = (values, setFieldValue) => {
        const checkMaterialType = ['LBL', 'TMS', 'TPM', 'ILN', 'FTD', 'FBR', 'FLN', 'PKT'];
        if (values === 'FBR' || values === 'FLN' || values === 'PKT') {
            setFabricTab(true)
            setFieldValue('materialType', values)
        } else if (values === 'FTD') {
            setThreadTab(true)
            setFieldValue('materialType', values)
        } else if (values === 'LBL' || values === 'TMS' || values === 'TPM' || values === 'ILN') {
            setDetailsTab(true)
            setFieldValue('materialType', values)
        } else if (!checkMaterialType.includes(values)) {
            alert('Please choose other material Type')
            setFieldValue('materialType', '')
        }
    }

    const onFormSubmit = (values, resetForm) => {
        const payload = constructFormValues(values, purchaseRecord, isUpdate);
        postApiCall(
            API_URLS.ITEM_CREATION,
            payload
        ).then((r) => {
            if (r){
                if(r.data.messageCode === '200'){
                    NotificationManager.success('Saved Successfully');
                    resetForm();
                    GetItemList();
                    setIsUpdate(false)
                }
                else {
                    NotificationManager.error(r.data.messageCode);
                }
            }
        }).catch(e => console.log('buyer error ' + e))
    }
    const onSavePurchaseData = (values) => {
        const purchaseData = [...purchaseRecord, values]
        setPurchaseRecord(purchaseData)
    }

    const buyerDivisionOption = buyerDivision && buyerDivision.length > 0 && buyerDivision.map((v) => ({ value: v.divisionCode, label: v.divisionName}))
    return (
        <div className="user-management">
            <Helmet>
                <title>Ambattur Fashion India Private Limited ( AFIPL)</title>
                <meta name="description" content="Reactify Widgets" />
            </Helmet>
            <PageTitleBar
                title={<IntlMessages id="sidebar.userManagement" />}
                match={match}
            />
            <Paper>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape(validationShape)}
                    onSubmit={(values, action) => {
                        console.log("Onsubmit ==== "+values)
                        onFormSubmit(values, action.resetForm)
                    }}
                >
                    {(props) => {
                        const {
                            values,
                            touched,
                            errors,
                            handleBlur,
                            handleChange,
                            isValid,
                            dirty,
                            handleSubmit,
                            setFieldValue
                        } = props;
                        console.log(values, errors, touched)
                        return (
                            <Form autoComplete="off">
                                <RctCollapsibleCard fullBlock heading="Item Creation">
                                    <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                                        <div className="w-100">
                                            <div className="btn-right-align n-bt-top">
                                                <button
                                                    className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm"
                                                    tabIndex="0" type="button"><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o" /></span><span className="MuiTouchRipple-root" /></button>
                                                <button
                                                    className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm"
                                                    tabIndex="0"
                                                    type="submit"
                                                    // disabled={!(dirty && isValid)}
                                                >
                                                    <span className="MuiButton-label">Save <i className="zmdi zmdi-save" /></span><span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <div className="row">
                                                <AccordionInput>
                                                    <TextField
                                                        id="parentGroup"
                                                        varient={'outlined'}
                                                        fullWidth
                                                        select={true}
                                                        label="Parent Group"
                                                        placeholder="Parent Group"
                                                        name={'parentGroup'}
                                                        // type={'text'}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.parentGroup}
                                                        error={touched.parentGroup && Boolean(errors.parentGroup)}
                                                        helperText={touched.parentGroup && errors.parentGroup}
                                                    >
                                                        <MenuItem value="">None</MenuItem>
                                                        {
                                                            parentGroup && parentGroup.length > 0 && parentGroup.map(
                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                            )
                                                        }
                                                    </TextField>
                                                </AccordionInput>
                                                <AccordionInput>
                                                    <TextField
                                                        id="materialType"
                                                        varient={'outlined'}
                                                        fullWidth
                                                        select={true}
                                                        label="Material Type"
                                                        placeholder="Material Type"
                                                        name={'materialType'}
                                                        // type={'text'}
                                                        onChange={(e) => {onMaterialTypeChange(e.target.value, setFieldValue)}}
                                                        onBlur={handleBlur}
                                                        value={values.materialType}
                                                        error={touched.materialType && Boolean(errors.materialType)}
                                                        helperText={touched.materialType && errors.materialType}
                                                    >
                                                        <MenuItem value="">None</MenuItem>
                                                        {
                                                            materialType && materialType.length > 0 && materialType.map(
                                                                item => (<MenuItem key={item.mattype} value={item.mattype}>{item.matDesc}</MenuItem>)
                                                            )
                                                        }
                                                    </TextField>
                                                </AccordionInput>
                                                <AccordionInput>
                                                    <TextField
                                                        id="materialGroupSub"
                                                        varient={'outlined'}
                                                        fullWidth
                                                        select={true}
                                                        label="Material Group & Material Sub"
                                                        placeholder="Material Group & Material Sub"
                                                        name={'materialGroupSub'}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.materialGroupSub}
                                                        error={touched.materialGroupSub && Boolean(errors.materialGroupSub)}
                                                        helperText={touched.materialGroupSub && errors.materialGroupSub}
                                                    >
                                                        <MenuItem value="">None</MenuItem>
                                                        {
                                                            materialGroupType && materialGroupType.length > 0 && materialGroupType.map(
                                                                item => (<MenuItem key={item.mattype} value={item.mattype}>{item.matDesc}</MenuItem>)
                                                            )
                                                        }
                                                    </TextField>
                                                </AccordionInput>
                                                <AccordionInput>
                                                    <TextField
                                                        id="materialCode"
                                                        varient={'outlined'}
                                                        fullWidth
                                                        label="Material Code"
                                                        placeholder="Material Code"
                                                        name={'materialCode'}
                                                        type={'text'}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.materialCode}
                                                        error={touched.materialCode && Boolean(errors.materialCode)}
                                                        helperText={touched.materialCode && errors.materialCode}
                                                    />
                                                </AccordionInput>
                                                <AccordionInput>
                                                    <TextField
                                                        id="materialDescription"
                                                        fullWidth
                                                        label="Material Description"
                                                        placeholder="Material Description"
                                                        name={'materialDescription'}
                                                        type={'text'}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.materialDescription}
                                                        error={touched.materialDescription && Boolean(errors.materialDescription)}
                                                        helperText={touched.materialDescription && errors.materialDescription}
                                                    />
                                                </AccordionInput>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <FormControl fullWidth>
                                                            <ReactSelect
                                                                options={buyerDivisionOption}
                                                                name={'buyerDivision'}
                                                                onChange={(e) => {
                                                                    setFieldValue('buyerDivision', e.id)
                                                                }}
                                                                multiple={true}
                                                                label={'Buyer Division'}
                                                                // defaultValue={isUpdate ? defaultValues : ''}
                                                                // value={values.buyerDivision}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                </div>
                                                <AccordionInput>
                                                    <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                                        <div className="w-33">
                                                            <FormControlLabel color="primary" value="sample"
                                                                              control={
                                                                                  <Checkbox checked={checked} onChange={handleChange} />
                                                                              }
                                                                              label="Activate" />
                                                        </div>
                                                    </RadioGroup>
                                                </AccordionInput>
                                            </div>
                                        </div>

                                        {
                                            fabricTab && <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                <Accordion className="border mb-15 mt-15">
                                                    <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                                        <div className="acc_title_font">
                                                            <Typography>Fabric</Typography>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div className="row">
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple">Fiber</InputLabel>
                                                                    <Select
                                                                        name={'fiber'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.fiber}
                                                                        error={touched.fiber && Boolean(errors.fiber)}
                                                                        helperText={touched.fiber && errors.fiber}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            fiber && fiber.length > 0 && fiber.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple"> Content</InputLabel>
                                                                    <Select
                                                                        name={'content'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.content}
                                                                        error={touched.content && Boolean(errors.content)}
                                                                        helperText={touched.content && errors.content}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            options.map(
                                                                                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="fabricContent"
                                                                    fullWidth
                                                                    label="Fabric Content"
                                                                    placeholder="Fabric Content"
                                                                    name={'fabricContent'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.fabricContent}
                                                                    error={touched.fabricContent && Boolean(errors.fabricContent)}
                                                                    helperText={touched.fabricContent && errors.fabricContent}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple"> Fabric Type </InputLabel>
                                                                    <Select
                                                                        name={'fabricType'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.fabricType}
                                                                        error={touched.fabricType && Boolean(errors.fabricType)}
                                                                        helperText={touched.fabricType && errors.fabricType}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            fabricType && fabricType.length > 0 && fabricType.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple"> Fabric Weave </InputLabel>
                                                                    <Select
                                                                        name={'fabricWave'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.fabricWave}
                                                                        error={touched.fabricWave && Boolean(errors.fabricWave)}
                                                                        helperText={touched.fabricWave && errors.fabricWave}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            fabricWave && fabricWave.length > 0 && fabricWave.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="dyeProcess">Dye Process </InputLabel>
                                                                    <Select
                                                                        name={'dyeProcess'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.dyeProcess}
                                                                        error={touched.dyeProcess && Boolean(errors.dyeProcess)}
                                                                        helperText={touched.dyeProcess && errors.dyeProcess}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            dyeProcess && dyeProcess.length > 0 && dyeProcess.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                                <div className="w-100 float-left">
                                                                    <div className="w-80 float-left">
                                                                        <div className="form-group">
                                                                            <TextField
                                                                                id="yarnWrap"
                                                                                fullWidth
                                                                                label="Yarn Wrap"
                                                                                placeholder="Yarn Wrap"
                                                                                name={'yarnWrap'}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.yarnWrap}
                                                                                error={touched.yarnWrap && Boolean(errors.yarnWrap)}
                                                                                helperText={touched.yarnWrap && errors.yarnWrap}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="w-20 float-left text-center pt-15">
                                                                        <button
                                                                            className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary text-white btn-icon b-ic add"
                                                                            tabIndex="0" type="button"><i
                                                                            className="zmdi zmdi-plus-circle" /><span
                                                                            className="MuiTouchRipple-root" /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="wrapYarnBlend"
                                                                    fullWidth
                                                                    label="Wrap Yarn Blend"
                                                                    placeholder="Wrap Yarn Blend"
                                                                    name={'wrapYarnBlend'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.wrapYarnBlend}
                                                                    error={touched.wrapYarnBlend && Boolean(errors.wrapYarnBlend)}
                                                                    helperText={touched.wrapYarnBlend && errors.wrapYarnBlend}
                                                                />
                                                            </AccordionInput>
                                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                                <div className="w-100 float-left">
                                                                    <div className="w-80 float-left">
                                                                        <div className="form-group">
                                                                            <TextField
                                                                                id="yarnWeft"
                                                                                fullWidth
                                                                                label="Yarn Weft"
                                                                                placeholder="Yarn Weft"
                                                                                name={'yarnWeft'}
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.yarnWeft}
                                                                                error={touched.yarnWeft && Boolean(errors.yarnWeft)}
                                                                                helperText={touched.yarnWeft && errors.yarnWeft}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="w-20 float-left text-center pt-15">
                                                                        <button
                                                                            className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary text-white btn-icon b-ic add"
                                                                            tabIndex="0" type="button"><i
                                                                            className="zmdi zmdi-plus-circle" /><span
                                                                            className="MuiTouchRipple-root" /></button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="weftYarnBlend"
                                                                    fullWidth
                                                                    label="Weft Yarn Blend"
                                                                    placeholder="Weft Yarn Blend"
                                                                    name={'weftYarnBlend'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.weftYarnBlend}
                                                                    error={touched.weftYarnBlend && Boolean(errors.weftYarnBlend)}
                                                                    helperText={touched.weftYarnBlend && errors.weftYarnBlend}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="endsInches"
                                                                    fullWidth
                                                                    label="Ends / Inches"
                                                                    placeholder="Ends / Inches"
                                                                    name={'endsInches'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.endsInches}
                                                                    error={touched.endsInches && Boolean(errors.endsInches)}
                                                                    helperText={touched.endsInches && errors.endsInches}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="picksInches"
                                                                    fullWidth
                                                                    label="Picks/Inches"
                                                                    placeholder="Picks/Inches"
                                                                    name={'picksInches'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.picksInches}
                                                                    error={touched.picksInches && Boolean(errors.picksInches)}
                                                                    helperText={touched.picksInches && errors.picksInches}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="shirnkWrap"
                                                                    fullWidth
                                                                    label="Shrink Wrap"
                                                                    placeholder="Shrink Wrap"
                                                                    name={'shrinkWrap'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.shrinkWrap}
                                                                    error={touched.shrinkWrap && Boolean(errors.shrinkWrap)}
                                                                    helperText={touched.shrinkWrap && errors.shrinkWrap}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="shrinkWeft"
                                                                    fullWidth
                                                                    label="Shrink Weft"
                                                                    placeholder="Shrink Weft"
                                                                    name={'shrinkWeft'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.shrinkWeft}
                                                                    error={touched.shrinkWeft && Boolean(errors.shrinkWeft)}
                                                                    helperText={touched.shrinkWeft && errors.shrinkWeft}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple">Wash Method</InputLabel>
                                                                    <Select
                                                                        name={'washMethod'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.washMethod}
                                                                        error={touched.washMethod && Boolean(errors.washMethod)}
                                                                        helperText={touched.washMethod && errors.washMethod}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            washMethod && washMethod.length > 0 && washMethod.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="FabWt_BW"
                                                                    fullWidth
                                                                    label="FabWt_BW"
                                                                    placeholder="FabWt_BW"
                                                                    name={'FabWt_BW'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.FabWt_BW}
                                                                    error={touched.FabWt_BW && Boolean(errors.FabWt_BW)}
                                                                    helperText={touched.FabWt_BW && errors.FabWt_BW}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="Buyer"
                                                                    fullWidth
                                                                    label="FabWt_AW"
                                                                    placeholder="FabWt_AW"
                                                                    name={'FabWt_AW'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.FabWt_AW}
                                                                    error={touched.FabWt_AW && Boolean(errors.FabWt_AW)}
                                                                    helperText={touched.FabWt_AW && errors.FabWt_AW}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple"> Weight UOM </InputLabel>
                                                                    <Select
                                                                        name={'weightUOM'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.weightUOM}
                                                                        error={touched.weightUOM && Boolean(errors.weightUOM)}
                                                                        helperText={touched.weightUOM && errors.weightUOM}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            weightUOM && weightUOM.length > 0 && weightUOM.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="actualWidth"
                                                                    fullWidth
                                                                    label="Actual Width"
                                                                    placeholder="Actual Width"
                                                                    name={'actualWidth'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.actualWidth}
                                                                    error={touched.actualWidth && Boolean(errors.actualWidth)}
                                                                    helperText={touched.actualWidth && errors.actualWidth}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <TextField
                                                                    id="cuttableWidth"
                                                                    fullWidth
                                                                    label="Cuttable Width"
                                                                    placeholder="Cuttable Width"
                                                                    name={'cuttableWidth'}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.cuttableWidth}
                                                                    error={touched.cuttableWidth && Boolean(errors.cuttableWidth)}
                                                                    helperText={touched.cuttableWidth && errors.cuttableWidth}
                                                                />
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple">Width UOM </InputLabel>
                                                                    <Select
                                                                        name={'widthUOM'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.widthUOM}
                                                                        error={touched.widthUOM && Boolean(errors.widthUOM)}
                                                                        helperText={touched.widthUOM && errors.widthUOM}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            weightUOM && weightUOM.length > 0 && weightUOM.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple"> Physical Finish </InputLabel>
                                                                    <Select
                                                                        name={'physicalFinish'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.physicalFinish}
                                                                        error={touched.physicalFinish && Boolean(errors.physicalFinish)}
                                                                        helperText={touched.physicalFinish && errors.physicalFinish}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            physicalFinish && physicalFinish.length > 0 && physicalFinish.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="age-simple"> Chemical Finish</InputLabel>
                                                                    <Select
                                                                        name={'chemicalFinish'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.chemicalFinish}
                                                                        error={touched.chemicalFinish && Boolean(errors.chemicalFinish)}
                                                                        helperText={touched.chemicalFinish && errors.chemicalFinish}
                                                                    >
                                                                        <MenuItem value="">None</MenuItem>
                                                                        {
                                                                            chemicalFinish && chemicalFinish.length > 0 && chemicalFinish.map(
                                                                                item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)
                                                                            )
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </AccordionInput>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        }
                                        {
                                            threadTab && <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                <Accordion className="border mb-15">
                                                    <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                                        <div className="acc_title_font">
                                                            <Typography>Thread </Typography>
                                                        </div>
                                                    </AccordionSummary>

                                                    <AccordionDetails>
                                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                            <div className="row">
                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="quality"
                                                                        fullWidth
                                                                        label="Quality"
                                                                        placeholder="Quality"
                                                                        name={'quality'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.quality}
                                                                        error={touched.quality && Boolean(errors.quality)}
                                                                        helperText={touched.quality && errors.quality}
                                                                    />
                                                                </AccordionInput>
                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="tex"
                                                                        fullWidth
                                                                        label="Tex"
                                                                        placeholder="Tex"
                                                                        name={'tex'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.tex}
                                                                        error={touched.tex && Boolean(errors.tex)}
                                                                        helperText={touched.tex && errors.tex}
                                                                    />
                                                                </AccordionInput>
                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="tkt"
                                                                        fullWidth
                                                                        label="Tkt"
                                                                        placeholder="Tkt"
                                                                        name={'tkt'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.tkt}
                                                                        error={touched.tkt && Boolean(errors.tkt)}
                                                                        helpertext={touched.tkt && errors.tkt}
                                                                    />
                                                                </AccordionInput>
                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="noOfMeter"
                                                                        fullWidth
                                                                        label="No of Meter"
                                                                        placeholder="No of Meter"
                                                                        name={'noOfMeter'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.noOfMeter}
                                                                        error={touched.noOfMeter && Boolean(errors.noOfMeter)}
                                                                        helpertext={touched.noOfMeter && errors.noOfMeter}
                                                                    />
                                                                </AccordionInput>
                                                            </div>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        }
                                        {
                                            detailsTab && <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                <Accordion className="border mb-15">
                                                    <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                                        <div className="acc_title_font">
                                                            <Typography>Details </Typography>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div className="float-right pr-0 but-tp">
                                                            <button
                                                                className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-0 text-white btn-icon b-sm"
                                                                tabIndex="0" type="button"><span className="MuiButton-label">Add <i
                                                                className="zmdi zmdi-plus-circle" /></span><span
                                                                className="MuiTouchRipple-root" /></button>
                                                        </div>

                                                        <div className="clearfix" />
                                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                            <div className="row">

                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="grpArticleNo"
                                                                        fullWidth
                                                                        label="Group Article Number"
                                                                        placeholder="Group Article Number"
                                                                        name={'grpArticleNo'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.grpArticleNo}
                                                                        error={touched.grpArticleNo && Boolean(errors.grpArticleNo)}
                                                                        helpertext={touched.grpArticleNo && errors.grpArticleNo}
                                                                    />
                                                                </AccordionInput>

                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="Product"
                                                                        fullWidth
                                                                        label="Product"
                                                                        placeholder="Product"
                                                                        name={'product'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.product}
                                                                        error={touched.product && Boolean(errors.product)}
                                                                        helpertext={touched.product && errors.product}
                                                                    />
                                                                </AccordionInput>

                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="Finish"
                                                                        fullWidth
                                                                        label="Finish"
                                                                        placeholder="Finish"
                                                                        name={'Finish'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.finish}
                                                                        error={touched.finish && Boolean(errors.finish)}
                                                                        helpertext={touched.finish && errors.finish}
                                                                    />
                                                                </AccordionInput>

                                                                <AccordionInput>
                                                                    <TextField
                                                                        id="Remarks"
                                                                        fullWidth
                                                                        label="Remarks"
                                                                        placeholder="Remarks"
                                                                        name={'remarks'}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.remarks}
                                                                        error={touched.remarks && Boolean(errors.remarks)}
                                                                        helpertext={touched.remarks && errors.remarks}
                                                                    />
                                                                </AccordionInput>

                                                            </div>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        }

                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                            <Accordion className="border mb-15">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                                    <div className="acc_title_font">
                                                        <Typography>Purchase </Typography>
                                                    </div>
                                                </AccordionSummary>

                                                <AccordionDetails>

                                                </AccordionDetails>
                                            </Accordion>
                                        </div>

                                        <PurchaseInfo
                                            supplierData={supplierData}
                                            weightUOM={weightUOM}
                                            currency={currency}
                                            onSavePurchaseData={onSavePurchaseData}
                                            purchaseRecord={purchaseRecord}
                                            tableOptions={tableOptions}
                                        />

                                        {/*<div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">*/}
                                        {/*    <Accordion className="border mb-15">*/}
                                        {/*        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>*/}
                                        {/*            <div className="acc_title_font">*/}
                                        {/*                <Typography>Purchase Info Record</Typography>*/}
                                        {/*            </div>*/}
                                        {/*        </AccordionSummary>*/}

                                        {/*        <AccordionDetails>*/}

                                        {/*            <div className="float-right pr-0 but-tp">*/}
                                        {/*                <button*/}
                                        {/*                    className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-0 text-white btn-icon b-sm"*/}
                                        {/*                    tabIndex="0" type="button"><span className="MuiButton-label">Add <i*/}
                                        {/*                    className="zmdi zmdi-plus-circle" /></span><span*/}
                                        {/*                    className="MuiTouchRipple-root" /></button>*/}
                                        {/*            </div>*/}

                                        {/*            <div className="clearfix" />*/}
                                        {/*            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">*/}
                                        {/*                <div className="row">*/}
                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Material Code"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Material Code"*/}
                                        {/*                            placeholder="Material Code"*/}
                                        {/*                            name={'materialCode1'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.materialCode}*/}
                                        {/*                            error={touched.materialCode1 && Boolean(errors.materialCode1)}*/}
                                        {/*                            helpertext={touched.materialCode1 && errors.materialCode1}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <FormControl fullWidth>*/}
                                        {/*                            <InputLabel htmlFor="age-simple">Supplier</InputLabel>*/}
                                        {/*                            <Select*/}
                                        {/*                                name={'supplier'}*/}
                                        {/*                                onChange={handleChange}*/}
                                        {/*                                onBlur={handleBlur}*/}
                                        {/*                                value={values.supplier}*/}
                                        {/*                                error={touched.supplier && Boolean(errors.supplier)}*/}
                                        {/*                                helpertext={touched.supplier && errors.supplier}*/}
                                        {/*                            >*/}
                                        {/*                                <MenuItem value="">None</MenuItem>*/}
                                        {/*                                {*/}
                                        {/*                                    supplierData && supplierData.length > 0 && supplierData.map(*/}
                                        {/*                                        item => (<MenuItem key={item.supCode} value={item.supCode}>{item.supName}</MenuItem>)*/}
                                        {/*                                    )*/}
                                        {/*                                }*/}
                                        {/*                            </Select>*/}
                                        {/*                        </FormControl>*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Brand"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Brand"*/}
                                        {/*                            placeholder="Brand"*/}
                                        {/*                            name={'brand'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.brand}*/}
                                        {/*                            error={touched.brand && Boolean(errors.brand)}*/}
                                        {/*                            helpertext={touched.brand && errors.brand}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="SupplierReference"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Supplier Reference"*/}
                                        {/*                            placeholder="Supplier Reference"*/}
                                        {/*                            name={'supplierRef'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.supplierRef}*/}
                                        {/*                            error={touched.supplierRef && Boolean(errors.supplierRef)}*/}
                                        {/*                            helpertext={touched.supplierRef && errors.supplierRef}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Multiples"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Multiples"*/}
                                        {/*                            placeholder="Multiples"*/}
                                        {/*                            name={'mutiples'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.mutiples}*/}
                                        {/*                            error={touched.mutiples && Boolean(errors.mutiples)}*/}
                                        {/*                            helpertext={touched.mutiples && errors.mutiples}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="MOQ"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="MOQ"*/}
                                        {/*                            placeholder="MOQ"*/}
                                        {/*                            name={'moq'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.moq}*/}
                                        {/*                            error={touched.moq && Boolean(errors.moq)}*/}
                                        {/*                            helpertext={touched.moq && errors.moq}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <FormControl fullWidth>*/}
                                        {/*                            <InputLabel htmlFor="age-simple"> MOQUOM </InputLabel>*/}
                                        {/*                            <Select*/}
                                        {/*                                name={'moquom'}*/}
                                        {/*                                onChange={handleChange}*/}
                                        {/*                                onBlur={handleBlur}*/}
                                        {/*                                value={values.moquom}*/}
                                        {/*                                error={touched.moquom && Boolean(errors.moquom)}*/}
                                        {/*                                helpertext={touched.moquom && errors.moquom}*/}
                                        {/*                            >*/}
                                        {/*                                <MenuItem value="">None</MenuItem>*/}
                                        {/*                                {*/}
                                        {/*                                    weightUOM && weightUOM.length > 0 && weightUOM.map(*/}
                                        {/*                                        item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)*/}
                                        {/*                                    )*/}
                                        {/*                                }*/}
                                        {/*                            </Select>*/}
                                        {/*                        </FormControl>*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Lead Time"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Lead Time"*/}
                                        {/*                            placeholder="Lead Time"*/}
                                        {/*                            name={'leadTime'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.leadTime}*/}
                                        {/*                            error={touched.leadTime && Boolean(errors.leadTime)}*/}
                                        {/*                            helpertext={touched.leadTime && errors.leadTime}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Color"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Color"*/}
                                        {/*                            placeholder="Color"*/}
                                        {/*                            name={'color'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.color}*/}
                                        {/*                            error={touched.color && Boolean(errors.color)}*/}
                                        {/*                            helpertext={touched.color && errors.color}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Size"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Size"*/}
                                        {/*                            placeholder="Size"*/}
                                        {/*                            name={'size'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.size}*/}
                                        {/*                            error={touched.size && Boolean(errors.size)}*/}
                                        {/*                            helpertext={touched.size && errors.size}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <Fragment>*/}
                                        {/*                            <div className="rct-picker">*/}
                                        {/*                                <MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                                        {/*                                    <KeyboardDatePicker*/}
                                        {/*                                        disableToolbar*/}
                                        {/*                                        variant="inline"*/}
                                        {/*                                        format="MM/dd/yyyy"*/}
                                        {/*                                        margin="normal"*/}
                                        {/*                                        id="date-picker-inline"*/}
                                        {/*                                        KeyboardButtonProps={{*/}
                                        {/*                                            'aria-label': 'From date',*/}
                                        {/*                                        }}*/}
                                        {/*                                        label="From Date"*/}
                                        {/*                                        value={fromDate}*/}
                                        {/*                                        onChange={(e) => handleDateChange(e, setFieldValue, 'start')}*/}
                                        {/*                                        animateYearScrolling={false}*/}
                                        {/*                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}*/}
                                        {/*                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}*/}
                                        {/*                                        fullWidth*/}
                                        {/*                                    />*/}
                                        {/*                                </MuiPickersUtilsProvider>*/}
                                        {/*                            </div>*/}
                                        {/*                        </Fragment>*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <Fragment>*/}
                                        {/*                            <div className="rct-picker">*/}
                                        {/*                                <MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                                        {/*                                    <KeyboardDatePicker*/}
                                        {/*                                        disableToolbar*/}
                                        {/*                                        variant="inline"*/}
                                        {/*                                        format="MM/dd/yyyy"*/}
                                        {/*                                        margin="normal"*/}
                                        {/*                                        id="date-picker-inline"*/}
                                        {/*                                        KeyboardButtonProps={{*/}
                                        {/*                                            'aria-label': 'To date',*/}
                                        {/*                                        }}*/}
                                        {/*                                        label="To Date"*/}
                                        {/*                                        value={toDate}*/}
                                        {/*                                        onChange={(e) => handleDateChange(e, setFieldValue, 'end')}*/}
                                        {/*                                        animateYearScrolling={false}*/}
                                        {/*                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}*/}
                                        {/*                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}*/}
                                        {/*                                        fullWidth*/}
                                        {/*                                    />*/}
                                        {/*                                </MuiPickersUtilsProvider>*/}
                                        {/*                            </div>*/}
                                        {/*                        </Fragment>*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Price"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Price"*/}
                                        {/*                            placeholder="Price"*/}
                                        {/*                            name={'price'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.price}*/}
                                        {/*                            error={touched.price && Boolean(errors.price)}*/}
                                        {/*                            helpertext={touched.price && errors.price}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <FormControl fullWidth>*/}
                                        {/*                            <InputLabel htmlFor="age-simple"> Currency </InputLabel>*/}
                                        {/*                            <Select*/}
                                        {/*                                name={'currency'}*/}
                                        {/*                                onChange={handleChange}*/}
                                        {/*                                onBlur={handleBlur}*/}
                                        {/*                                value={values.currency}*/}
                                        {/*                                error={touched.currency && Boolean(errors.currency)}*/}
                                        {/*                                helpertext={touched.currency && errors.currency}*/}
                                        {/*                            >*/}
                                        {/*                                <MenuItem value="">None</MenuItem>*/}
                                        {/*                                {*/}
                                        {/*                                    currency && currency.length > 0 && currency.map(*/}
                                        {/*                                        item => (<MenuItem key={item.code} value={item.code}>{item.codeDesc}</MenuItem>)*/}
                                        {/*                                    )*/}
                                        {/*                                }*/}
                                        {/*                            </Select>*/}
                                        {/*                        </FormControl>*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="BinCode"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Bin Code"*/}
                                        {/*                            placeholder="Bin Code"*/}
                                        {/*                            name={'binCode'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.binCode}*/}
                                        {/*                            error={touched.binCode && Boolean(errors.binCode)}*/}
                                        {/*                            helpertext={touched.binCode && errors.binCode}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Descriptions"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Descriptions"*/}
                                        {/*                            placeholder="Descriptions"*/}
                                        {/*                            name={'description'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.description}*/}
                                        {/*                            error={touched.description && Boolean(errors.description)}*/}
                                        {/*                            helpertext={touched.description && errors.description}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}

                                        {/*                    <AccordionInput>*/}
                                        {/*                        <TextField*/}
                                        {/*                            id="Remarks"*/}
                                        {/*                            fullWidth*/}
                                        {/*                            label="Remarks"*/}
                                        {/*                            placeholder="Remarks"*/}
                                        {/*                            name={'remarks'}*/}
                                        {/*                            onChange={handleChange}*/}
                                        {/*                            onBlur={handleBlur}*/}
                                        {/*                            value={values.remarks}*/}
                                        {/*                            error={touched.remarks && Boolean(errors.remarks)}*/}
                                        {/*                            helpertext={touched.remarks && errors.remarks}*/}
                                        {/*                        />*/}
                                        {/*                    </AccordionInput>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </AccordionDetails>*/}
                                        {/*    </Accordion>*/}
                                        {/*</div>*/}

                                        <AccordionMain>
                                            <GetAccordionSummary
                                                title={'Sales'}
                                            />
                                            <AccordionDetails>

                                            </AccordionDetails>
                                        </AccordionMain>

                                        <AccordionMain>
                                            <GetAccordionSummary
                                                title={'Plant'}
                                            />
                                            <AccordionDetails>
                                            </AccordionDetails>
                                        </AccordionMain>

                                        <AccordionMain>
                                            <GetAccordionSummary
                                                title={'Accounts'}
                                            />
                                            <AccordionDetails>
                                            </AccordionDetails>
                                        </AccordionMain>

                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                            <Accordion className="border mb-15">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                                    <div className="acc_title_font">
                                                        <Typography>Approval </Typography>
                                                    </div>
                                                </AccordionSummary>

                                                <AccordionDetails>
                                                    <MUIDataTable
                                                        data={approvalData}
                                                        columns={columns}
                                                        options={tableOptions}
                                                    />
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                            <Accordion className="border mb-15">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                                    <div className="acc_title_font">
                                                        <Typography>Item list </Typography>
                                                    </div>
                                                </AccordionSummary>

                                                <AccordionDetails>
                                                    {
                                                        itemData.length > 0 &&
                                                        <MUIDataTable
                                                            data={itemData}
                                                            columns={columns}
                                                            options={tableOptions}
                                                        />
                                                    }

                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>


                                </RctCollapsibleCard>
                            </Form>
                        );
                    }}
                </Formik>
            </Paper>
        </div>
    );
}

export default ItemMasterCreation;
