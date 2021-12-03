/**
 * Basic Table
 */
import React, {useEffect, useRef, useState} from 'react';
// import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Helmet} from "react-helmet";
import {Form, Formik} from 'formik'
import * as Yup from 'yup'

import Checkbox from '@material-ui/core/Checkbox';
// api
import FormControl from '@material-ui/core/FormControl';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
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
import {makeStyles, Paper} from '@material-ui/core';
import {
    AccordionInput,
    AccordionMain,
    constructEditData,
    constructFormValues,
    GetAccordionSummary
} from "../../../helpers/helpers";
import {API_URLS} from "../../../constants/api_url_constants";
import {getApiCall, postApiCall} from "../../../services/commonApi";
import PurchaseInfo from "./Forms/purchaseInfo";
import {NotificationManager} from "react-notifications";
import Select1 from "react-dropdown-select";
import DeleteConfirmationDialog from "../../../components/DeleteConfirmationDialog/DeleteConfirmationDialog";

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

const $ = require('jquery');

const ItemMasterCreation = ({ match }) => {
    const popupRef = useRef(null);
    const [initialValues, setInitialValues] = useState({
        parentGroup: [],
        materialType: [],
        materialGroupSub: [],
        materialCode: '',
        materialDescription: '',
        buyerDivision: [],
        active: '',
        fiber: [],
        content: [],
        fabricContent: '',
        fabricType: [],
        fabricWave: [],
        dyeProcess: [],
        yarnWrap: '',
        wrapYarnBlend: '',
        yarnWeft: '',
        weftYarnBlend: '',
        endsInches: '',
        picksInches: '',
        shrinkWrap: '',
        shrinkWeft: '',
        washMethod: [],
        FabWt_BW: '',
        FabWt_AW: '',
        weightUOM: [],
        actualWidth: '',
        cuttableWidth: '',
        widthUOM: [],
        physicalFinish: [],
        chemicalFinish: [],
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
    const [parentGroupOption, setParentGroupOption] = useState([])
    const [buyerDivisionOption, setBuyerDivisionOptions] = useState([])
    const [materialTypeOption, setMaterialTypeOption] = useState([])
    const [materialGrpTypeOption, setMaterialGrpTypeOption] = useState([])
    const [fabricOption, setFabricOption] = useState([])
    const [fabricTypeOption, setFabricTypeOption] = useState([])
    const [fabricWaveOption, setFabricWaveOption] = useState([])
    const [dyeProcessOption, SetDyeProcessOption] = useState([])
    const [washMethodOption, setWashMethodOption] = useState([])
    const [weightUOMOption, setWeightUOMOption] = useState([])
    const [physicalFinishOption, setPhysicalFinishOption] = useState([])
    const [chemicalFinishOption, setChemicalFinishOption] = useState([])
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
    const [editData, setEditData] = useState({});
    const [deleteId, setDeleteId] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [error, setError] = useState({});


    const validationShape = {
        // parentGroup: Yup.string().required("Please choose parentGroup"),
        // materialType: Yup.string().required('Please choose the MaterialType'),
        // materialGroupSub: Yup.string().required('Please choose Material GroupSub'),
        // materialCode: Yup.string().required('Please enter the materialCode'),
    };

    const deleteItemList = async () => {
        await getCurrentData(deleteId, true);
        await onFormSubmit(editData, {})
        popupRef.current.close();
    }

    const getDeleteData = (id) => {
        popupRef.current.open();
        setDeleteId(id)
    }
    const constructLocalEditData = (values) => {
        const parentData = parentGroupOption.find((r) => r.value === values.parentGroup)
        const matTypeData = materialTypeOption.find((r) => r.value === values.materialType)
        const matGroupData = materialGrpTypeOption.find((r) => r.value === values.materialGroupSub)
        const buyerDivData = buyerDivisionOption.find((r) => r.value === values.buyerDivision)
        //fabric
        const fabricContentData = fabricOption.find((r) => r.value === values.fabricContent)
        const fabricTypeData = fabricTypeOption.find((r) => r.value === values.fabricType)
        const fabricWaveData = fabricWaveOption.find((r) => r.value === values.fabricWave)
        const dyeProcessData = dyeProcessOption.find((r) => r.value === values.dyeProcess)
        const washMethodData = washMethodOption.find((r) => r.value === values.washMethod)
        const wightData = weightUOMOption.find((r) => r.value === values.weightUOM)
        const widthData = weightUOMOption.find((r) => r.value === values.widthUOM)
        const physicalData = physicalFinishOption.find((r) => r.value === values.physicalFinish)
        const chemicalData = chemicalFinishOption.find((r) => r.value === values.chemicalFinish)

        return {
            parentGroup: parentData ? [parentData] : [],
            materialType: matTypeData ? [matTypeData] : '',
            materialGroupSub: matGroupData ? [matGroupData] : '',
            materialCode: values.materialCode,
            materialDescription: values.materialDescription,
            buyerDivision: buyerDivData ? [buyerDivData] : [],
            active: values.active,
            id: values.id,
            quality: values.quality,
            tkt: values.tkt,
            tex: values.tex,
            noOfMeter: values.noOfMtr,
            threadId: values.threadId,
            grpArticleNo: values.grpArticleNo,
            product: values.product,
            Finish: values.Finish,
            detailsId: values.detailsId,
            fabricId: values.fabricId,
            fabricContent: fabricContentData ? [fabricContentData] : [],
            fabricType: fabricTypeData ? [fabricTypeData] : [],
            fabricWave: fabricWaveData ? [fabricWaveData] : [],
            dyeProcess: dyeProcessData ? [dyeProcessData] : [],
            yarnWrap: values.yarnWrap,
            yarnWeft: values.yarnWeft,
            wrapYarnBlend: values.wrapYarnBlend,
            weftYarnBlend: values.weftYarnBlend,
            endsInches: values.endsInches,
            picksInches: values.picksInches,
            shrinkWrap: values.shrinkWrap ? values.shrinkWrap : 0,
            shrinkWeft: values.shrinkWeft ? values.shrinkWeft : 0,
            washMethod: washMethodData ? [washMethodData] : [],
            FabWt_BW: values.FabWt_BW ? values.FabWt_BW : 0,
            FabWt_AW: values.FabWt_AW ? values.FabWt_AW : 0,
            weightUOM: wightData ? [wightData] : [],
            actualWidth: values.actualWidth,
            cuttableWidth: values.cuttableWidth,
            widthUOM: widthData ? [widthData] : [],
            physicalFinish: physicalData ? [physicalData] : [],
            chemicalFinish: chemicalData ? [chemicalData] : [],
            purchaseData: values.purchaseData
        }
    }

    const getCurrentData = (tableId, isDelete = false) => {
        getApiCall(
            API_URLS.GET_MATERIAL_MASTER_ITEMS+ `?MatID=${tableId}`
        ).then((r) => {
            if (r) {
                const values = constructEditData(...r.data.data, isDelete)
                const data = constructLocalEditData(values)
                setEditData(data)
                if (!isDelete){
                    setInitialValues(data)
                    setIsUpdate(true)
                } else
                    setIsDelete(true)

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
                // this.changePage(tableState.page);
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

    const checkFormRequiredFields = (values) => {
        let isValid = true;
        if (values.parentGroup.length === 0 || Object.keys(values).length === 0){
            let newError = Object.assign(error, {parentGroup: 'ParentGroup is required'})
            setError(newError);
            isValid = false
        }
        if (values.materialGroupSub.length === 0 || Object.keys(values).length === 0){
            let newError = Object.assign(error, {materialGroupSub: 'Material Group & Sub is required'})
            setError(newError);
            isValid = false
        }
        if (values.materialType.length === 0 ||  Object.keys(values).length === 0){
            let newError = Object.assign(error, {materialType: 'MaterialType is required'})
            setError(newError);
            isValid = false
        }
        if (values.materialCode === '' ||  Object.keys(values).length === 0){
            let newError = Object.assign(error, {materialCode: 'MaterialCode is required'})
            setError(newError);
            isValid = false
        }
        return isValid;
    }

    const onFormSubmit = (values, resetForm) => {
        const isFormCheck = checkFormRequiredFields(values)
        if (isFormCheck) {
            const payload = constructFormValues(values, purchaseRecord, isDelete);
            postApiCall(
                API_URLS.ITEM_CREATION,
                payload
            ).then((r) => {
                if (r){
                    if(r.data.messageCode === '200'){
                        NotificationManager.success(`${isDelete ? 'Deleted' : 'Saved'} Successfully`);
                        if(!isDelete)
                            resetForm();
                        GetItemList();
                        setIsUpdate(false)
                        setIsDelete(false)
                        setDeleteId(0)
                    }
                    else {
                        // NotificationManager.error(r.data.messageCode);
                    }
                }
            }).catch(e => console.log('buyer error ' + e))
        }

    }
    const onSavePurchaseData = (values) => {
        const purchaseData = [...purchaseRecord, values]
        setPurchaseRecord(purchaseData)
    }

    const onSelectOnChange = (e, name='', setFieldValue, secondName = '') => {
        const val = e;
        const values = (e && e.length > 0) ? e[0].value : []
        const randomTxt = (+new Date).toString(36).slice(-5)
        if (name === 'materialGroupSub') {
            setFieldValue('materialCode', randomTxt)
        }
        if(name === 'materialType') {
            const checkMaterialType = ['LBL', 'TMS', 'TPM', 'ILN', 'FTD', 'FBR', 'FLN', 'PKT'];
            if (values === 'FBR' || values === 'FLN' || values === 'PKT') {
                setFabricTab(true)
                setFieldValue('materialType', e)
            } else if (values === 'FTD') {
                setThreadTab(true)
                setFieldValue('materialType', e)
            } else if (values === 'LBL' || values === 'TMS' || values === 'TPM' || values === 'ILN') {
                setDetailsTab(true)
                setFieldValue('materialType', e)
            } else if (!checkMaterialType.includes(values)) {
                NotificationManager.error('Please choose other material Type');
                setFieldValue('materialType', [])
                error['materialType'] = 'MaterialType is required';
                setError(error);
            }
        }
        if (name === 'parentGroup' && val.length === 0){
            setFieldValue('parentGroup', [])
            error['parentGroup'] = 'ParentGroup is required';
            setError(error);
        }

        if (name === 'materialGroupSub' && val.length === 0){
            setFieldValue('materialGroupSub', [])
            error['materialGroupSub'] = 'Material Group & Sub is required';
            setError(error);
        }
    }

    useEffect(() => {
        if (buyerDivision && buyerDivision.length > 0){
            const buyerDivisionOption = buyerDivision.map((v) => ({ value: v.divisionCode, label: v.divisionName}))
            setBuyerDivisionOptions(buyerDivisionOption)
        }
        if (parentGroup && parentGroup.length > 0) {
            const parentOptions = parentGroup.map((v) => ({ value: v.code, label: v.codeDesc}))
            setParentGroupOption(parentOptions)
        }
        if (materialType && materialType.length > 0) {
            const materialTypeOption = materialType.map((v) => ({ value: v.mattype, label: v.matDesc}))
            setMaterialTypeOption(materialTypeOption)
        }
        if (materialGroupType && materialGroupType.length > 0) {
            const mgtoptions = materialGroupType.map((v) => ({ value: v.mattype, label: v.matDesc}))
            setMaterialGrpTypeOption(mgtoptions)
        }
        if (fiber && fiber.length > 0) {
            const mgtoptions = fiber.map((v) => ({ value: v.code, label: v.codeDesc}))
            setFabricOption(mgtoptions)
        }
        if (fabricType && fabricType.length > 0) {
            const mgtoptions = fabricType.map((v) => ({ value: v.code, label: v.codeDesc}))
            setFabricTypeOption(mgtoptions)
        }
        if (fabricWave && fabricWave.length > 0) {
            const mgtoptions = fabricWave.map((v) => ({ value: v.code, label: v.codeDesc}))
            setFabricWaveOption(mgtoptions)
        }
        if (dyeProcess && dyeProcess.length > 0) {
            const mgtoptions = dyeProcess.map((v) => ({ value: v.code, label: v.codeDesc}))
            SetDyeProcessOption(mgtoptions)
        }
        if (washMethod && washMethod.length > 0) {
            const mgtoptions = washMethod.map((v) => ({ value: v.code, label: v.codeDesc}))
            setWashMethodOption(mgtoptions)
        }
        if (weightUOM && weightUOM.length > 0) {
            const mgtoptions = weightUOM.map((v) => ({ value: v.code, label: v.codeDesc}))
            setWeightUOMOption(mgtoptions)
        }
        if (physicalFinish && physicalFinish.length > 0) {
            const mgtoptions = physicalFinish.map((v) => ({ value: v.code, label: v.codeDesc}))
            setPhysicalFinishOption(mgtoptions)
        }
        if (chemicalFinish && chemicalFinish.length > 0) {
            const mgtoptions = chemicalFinish.map((v) => ({ value: v.code, label: v.codeDesc}))
            setChemicalFinishOption(mgtoptions)
        }
    }, [buyerDivision, parentGroup, materialType, materialGroupType, fiber, fabricType, fabricWave, dyeProcess, washMethod, weightUOM, physicalFinish, chemicalFinish])


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
                    // validationSchema={Yup.object().shape(validationShape)}
                    onSubmit={(values, action) => {
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
                        console.log(error)
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
                                                    <div className="select_label_name mt-15">
                                                        <Select1
                                                            dropdownPosition="auto"
                                                            createNewLabel="Parent Group"
                                                            options={parentGroupOption}
                                                            onChange={(e) => {
                                                                setFieldValue('parentGroup', e)
                                                                // onSelectOnChange(e, 'parentGroup', setFieldValue, 'parentGroupOpt')
                                                            }}
                                                            placeholder="Parent Group"
                                                            values={values.parentGroupOpt}
                                                        />
                                                        <span className="error">{error && error.parentGroup}</span>
                                                    </div>
                                                </AccordionInput>
                                                <AccordionInput>
                                                    <div className="select_label_name mt-15">
                                                        <Select1
                                                            dropdownPosition="auto"
                                                            createNewLabel="Material Type"
                                                            options={materialTypeOption}
                                                            onChange={(e) => {
                                                                onSelectOnChange(e, 'materialType', setFieldValue)
                                                            }}
                                                            placeholder="Material Type"
                                                            values={values.materialType}
                                                        />
                                                        <span className="error">{error && error.materialType}</span>
                                                    </div>
                                                </AccordionInput>
                                                <AccordionInput>
                                                    <div className="select_label_name mt-15">
                                                        <Select1
                                                            dropdownPosition="auto"
                                                            createNewLabel="Material Group & Sub"
                                                            options={materialGrpTypeOption}
                                                            onChange={(e) => {
                                                                setFieldValue('materialGroupSub', e)
                                                                onSelectOnChange(e, 'materialGroupSub', setFieldValue)
                                                            }}
                                                            placeholder="Material Group & Sub"
                                                            values={values.materialGroupSub}
                                                        />
                                                        <span className="error">{error && error.materialGroupSub}</span>
                                                    </div>
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
                                                        inputProps={
                                                            { readOnly: true, }
                                                        }
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
                                                            <div className="select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    multi
                                                                    createNewLabel="Buyer Division"
                                                                    options={buyerDivisionOption}
                                                                    onChange={(e) => {
                                                                        setFieldValue('buyerDivision', e)
                                                                        onSelectOnChange(e, 'buyerDivision', setFieldValue)
                                                                    }}
                                                                    placeholder="Buyer Division"
                                                                    values={values.buyerDivision}
                                                                />
                                                            </div>
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
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Fiber"
                                                                            options={fabricOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('fiber', e)
                                                                                onSelectOnChange(e, 'fiber', setFieldValue)
                                                                            }}
                                                                            placeholder="Fiber"
                                                                            values={values.fiber}
                                                                        />
                                                                    </div>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Content"
                                                                            options={fabricOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('content', e)
                                                                                onSelectOnChange(e, 'content', setFieldValue)
                                                                            }}
                                                                            placeholder="Content"
                                                                            values={values.content}
                                                                        />
                                                                    </div>
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
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Fabric Type"
                                                                            options={fabricTypeOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('fabricType', e)
                                                                                onSelectOnChange(e, 'fabricType', setFieldValue)
                                                                            }}
                                                                            placeholder="Fabric Type"
                                                                            values={values.fabricType}
                                                                        />
                                                                    </div>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Fabric Weave"
                                                                            options={fabricWaveOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('fabricWave', e)
                                                                                onSelectOnChange(e, 'fabricWave', setFieldValue)
                                                                            }}
                                                                            placeholder="Fabric Weave"
                                                                            values={values.fabricWave}
                                                                        />
                                                                    </div>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Dye Process"
                                                                            options={dyeProcessOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('dyeProcess', e)
                                                                                onSelectOnChange(e, 'dyeProcess', setFieldValue)
                                                                            }}
                                                                            placeholder="Dye Process"
                                                                            values={values.dyeProcess}
                                                                        />
                                                                    </div>
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
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Wash Method"
                                                                            options={washMethodOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('washMethod', e)
                                                                                onSelectOnChange(e, 'washMethod', setFieldValue)
                                                                            }}
                                                                            placeholder="Wash Method"
                                                                            values={values.washMethod}
                                                                        />
                                                                    </div>
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
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Weight UOM"
                                                                            options={weightUOMOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('weightUOM', e)
                                                                                onSelectOnChange(e, 'weightUOM', setFieldValue)
                                                                            }}
                                                                            placeholder="Weight UOM"
                                                                            values={values.weightUOM}
                                                                        />
                                                                    </div>
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
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Width UOM"
                                                                            options={weightUOMOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('widthUOM', e)
                                                                                onSelectOnChange(e, 'widthUOM', setFieldValue)
                                                                            }}
                                                                            placeholder="Width UOM"
                                                                            values={values.widthUOM}
                                                                        />
                                                                    </div>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Physical Finish"
                                                                            options={physicalFinishOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('physicalFinish', e)
                                                                                onSelectOnChange(e, 'physicalFinish', setFieldValue)
                                                                            }}
                                                                            placeholder="Physical Finish"
                                                                            values={values.physicalFinish}
                                                                        />
                                                                    </div>
                                                                </FormControl>
                                                            </AccordionInput>
                                                            <AccordionInput>
                                                                <FormControl fullWidth>
                                                                    <div className="select_label_name mt-15">
                                                                        <Select1
                                                                            dropdownPosition="auto"
                                                                            createNewLabel="Chemical Finish"
                                                                            options={chemicalFinishOption}
                                                                            onChange={(e) => {
                                                                                setFieldValue('chemicalFinish', e)
                                                                                onSelectOnChange(e, 'chemicalFinish', setFieldValue)
                                                                            }}
                                                                            placeholder="Chemical Finish"
                                                                            values={values.chemicalFinish}
                                                                        />
                                                                    </div>
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
                                                    <table className="table mt-10 data w-100 float-left">
                                                        <thead>
                                                        <tr>
                                                            <th className="w-25 text-center">Actions</th>
                                                            <th className="w-25">System generated material code</th>
                                                            <th className="w-25">Type</th>
                                                            <th className="w-25">Group</th>
                                                            <th className="w-25">Sub Group</th>
                                                            <th className="w-25">Supplier Name</th>
                                                            <th className="w-25">Supplier Reference</th>
                                                            <th className="w-25">CreatedBy</th>
                                                            <th className="w-25">Approved</th>
                                                            <th className="w-25">Approved Date</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {approvalData.length> 0 && approvalData.map((n, index) => {

                                                            return (

                                                                <tr key={`list${index}`}>
                                                                    <td className="">
                                                                        <button
                                                                            className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary"
                                                                            tabIndex="0" type="button"
                                                                            aria-label="Delete"
                                                                            onClick={(e) => getCurrentData(n.hid)}>
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-edit"/></span>
                                                                            <span className="MuiTouchRipple-root"/>
                                                                        </button>
                                                                        <button
                                                                            className="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary"
                                                                            tabIndex="0" type="button"
                                                                            aria-label="Delete"
                                                                            onClick={(e) => getDeleteData(n.hid)}>
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-delete"/>
                                                                                </span>
                                                                            <span className="MuiTouchRipple-root"/>
                                                                        </button>

                                                                    </td>
                                                                    <td className="data">{n.materialCode}</td>
                                                                    <td className="data">{n.materialType}</td>
                                                                    <td className="data">{n.group}</td>
                                                                    <td className="data">{n.subGroup}</td>
                                                                    <td className="data">{n.materialCode}</td>
                                                                    <td className="data">{n.description}</td>
                                                                    <td className="data">{n.commonArticleNumber}</td>
                                                                    <td className="data">{n.approved}</td>
                                                                    <td className="data">{n.active}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                        {
                                                            approvalData.length === 0 && <tr>No records found</tr>
                                                        }
                                                        </tbody>

                                                    </table>
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
                                                    {/*<div className="table-responsive mt-0">*/}
                                                    <table className="table mt-10 data w-100 float-left">
                                                        <thead>
                                                        <tr>
                                                            <th className="w-25 text-center">Actions</th>
                                                            <th className="w-25">Material</th>
                                                            <th className="w-25">Type</th>
                                                            <th className="w-25">Group</th>
                                                            <th className="w-25">Sub Group</th>
                                                            <th className="w-25">Material Code</th>
                                                            <th className="w-25">Description</th>
                                                            <th className="w-25">Common Article Number</th>
                                                            <th className="w-25">Approved</th>
                                                            <th className="w-25">Active</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {itemData.length> 0 && itemData.map((n, index) => {

                                                            return (

                                                                <tr key={`list${index}`}>
                                                                    <td className="">
                                                                        <button
                                                                            className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary"
                                                                            tabIndex="0" type="button"
                                                                            aria-label="Delete"
                                                                            onClick={(e) => getCurrentData(n.hid)}>
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-edit"/></span>
                                                                            <span className="MuiTouchRipple-root"/>
                                                                        </button>
                                                                        <button
                                                                            className="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary"
                                                                            tabIndex="0" type="button"
                                                                            aria-label="Delete"
                                                                            onClick={(e) => getDeleteData(n.hid)}>
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-delete"/>
                                                                                </span>
                                                                            <span className="MuiTouchRipple-root"/>
                                                                        </button>

                                                                    </td>
                                                                    <td className="data">{n.materialCode}</td>
                                                                    <td className="data">{n.materialType}</td>
                                                                    <td className="data">{n.group}</td>
                                                                    <td className="data">{n.subGroup}</td>
                                                                    <td className="data">{n.materialCode}</td>
                                                                    <td className="data">{n.description}</td>
                                                                    <td className="data">{n.commonArticleNumber}</td>
                                                                    <td className="data">{n.approved}</td>
                                                                    <td className="data">{n.active}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                        </tbody>

                                                    </table>
                                                    {/*</div>*/}

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
            <DeleteConfirmationDialog
                ref={popupRef}
                title="Are You Sure Want To Delete?"
                message="Are You Sure Want To Delete Permanently."
                onConfirm={deleteItemList }
            />
        </div>
    );
}

export default ItemMasterCreation;
