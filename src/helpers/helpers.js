/**
 * Helpers Functions
 */
import moment from 'moment';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import React from "react";
import TextField from "@material-ui/core/TextField";

/**
 * Function to convert hex to rgba
 */
export function hexToRgbA(hex, alpha) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
}

/**
 * Text Truncate
 */
export function textTruncate(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

/**
 * Get Date
 */
export function getTheDate(timestamp, format) {
    let time = timestamp * 1000;
    let formatDate = format ? format : 'MM-DD-YYYY';
    return moment(time).format(formatDate);
}

/**
 * Convert Date To Timestamp
 */
export function convertDateToTimeStamp(date, format) {
    let formatDate = format ? format : 'YYYY-MM-DD';
    return moment(date, formatDate).unix();
}

/**
 * Function to return current app layout
 */
export function getAppLayout(url) {
    let location = url.pathname;
    let path = location.split('/');
    return path[1];
}

/**
 * returns the accordion layout
 */
export const getAccordionLayout = ({}) => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <Accordion className="border mb-15">
                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                    <div className="acc_title_font">
                        <Typography>Accounts</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export const GetAccordionSummary = ({title}) => {
    return (
        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"/>}>
            <div className="acc_title_font">
                <Typography>{title}</Typography>
            </div>
        </AccordionSummary>
    )
}

export const AccordionMain = ({children}) => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <Accordion className="border mb-15">
                {children}
            </Accordion>
        </div>
    )
}

export const AccordionInput = ({children}) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="form-group">
                {children}
            </div>
        </div>
    )
}
export const GridInputs = ({children}) => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <div className="form-group">
                {children}
            </div>
        </div>
    )
}

export const getPurchaseAllData = (purchaseData, id) => {
    const allPurchaseData = []
    purchaseData && purchaseData.length > 0 && purchaseData.map((data) => {
        const values = {
            "id": data.purchaseId ? data.purchaseId : 0,
            "matMast_ID": id ? id : 0 ,
            "matCode": data.materialCode1,
            "supcode": '',
            "supplierId": data.supplier ? parseInt(data.supplier) : 0,
            "supRefNo": data.supplierRef,
            "brand": data.brand,
            "moq": data.moq ? parseInt(data.moq) : 0,
            "moqUom": data.moquom,
            "multiples": data.multiples ? parseInt(data.multiples) : 0,
            "leadtime": data.loadTime ? data.loadTime : 0,
            "color": data.color,
            "size": data.size,
            "fromDt": data.fromDate ? formatDate(data.fromDate) : formatDate(new Date()),
            "toDt": data.toDate ? formatDate(data.toDate) : formatDate(new Date()),
            "price": data.price ? parseInt(data.price) : 0,
            "curCode": data.currency,
            "binCode": data.binCode,
            "purdesc": data.description,
            "remarks": data.remarks,
            "active": 'N',
            "createdBy": '',
            "modifyBy": '',
            "hostName": ''
        }
        allPurchaseData.push(values)
    })
    return allPurchaseData;
}

export const constructFormValues = (values, purchaseRecord, isDelete= false) => {
    console.log("helpers ", values, purchaseRecord)
    const purchaseData = getPurchaseAllData(purchaseRecord, values.id)
    return {
        "id": values.id ? values.id : 0,
        "parentGroup": values.parentGroup[0] ? values.parentGroup[0].value : '',
        "matType": values.materialType[0] ? values.materialType[0].value : '',
        "matGroup": values.materialGroupSub[0] ? values.materialGroupSub[0].value : '',
        "matSubGroup": values.materialGroupSub[0] ? values.materialGroupSub[0].value : '',
        "matCode": values.materialCode,
        "matDesc": values.materialDescription,
        "buyDivcode": 'ALL', // values.buyerDivision   --- it should be in array format, needs to be done by antonyPrabhu
        "active": isDelete ? 'N' : 'Y',
        "approved": 's',
        "approvedBy": '',
        "approvedDt": formatDate(new Date()),
        "createdBy": '',
        "modifyBy": '',
        "hostName": '',
        "purchase": '',
        "materialFBRMasterEntityModel": [
            {
                "id": values.fabricId ?  values.fabricId : 0,
                "matMast_ID": values.fabricId ? values.id ?  values.id : 0 : 0,
                "fibreContent": values.fabricContent[0] ? values.fabricContent[0] : '',
                "fabricType": values.fabricType[0] ? values.fabricType[0].value : '',
                "fabWeave": values.fabricWave[0] ? values.fabricWave[0].value : '',
                "dyeProcess": values.dyeProcess[0] ? values.dyeProcess[0].value : '',
                "yarnWarp": values.yarnWrap,
                "yarnWeft": values.yarnWeft,
                "warpYarnBlend": values.wrapYarnBlend,
                "weftYarnBlend": values.weftYarnBlend,
                "endsPerInch": values.endsInches,
                "pickPerInch": values.picksInches,
                "shrinkWarp": values.shrinkWrap ? values.shrinkWrap : 0,
                "shrinkWeft": values.shrinkWeft ? values.shrinkWeft : 0 ,
                "washMethod": values.washMethod[0] ? values.washMethod[0].value : '',
                "fabWt_BW": values.FabWt_BW ? values.FabWt_BW : 0,
                "fabWt_AW": values.FabWt_AW ? values.FabWt_AW : 0,
                "weightUom": values.weightUOM[0] ? values.weightUOM[0].value : '',
                "actualWidth": values.actualWidth,
                "cutWidth": values.cuttableWidth,
                "widthUom": values.widthUOM[0] ? values.widthUOM[0].value : '',
                "physicalFinish": values.physicalFinish[0] ? values.physicalFinish[0].value : '',
                "chemicalFinish": values.chemicalFinish[0] ? values.chemicalFinish[0].value : '',
                "createdBy": '',
                "modifyBy": '',
                "hostName": ''
            }
        ],
        "materialThreadMasterEntityModel": [
            {
                "id": values.threadId ? values.threadId : 0,
                "matMast_ID": values.threadId ? values.id ?  values.id : 0 : 0,
                "quality": values.quality,
                "tex": values.tex,
                "tkt": values.tkt,
                "noOfMtr": values.noOfMeter ? parseInt(values.noOfMeter) : 0,
                "createdBy": '',
                "modifyBy": '',
                "hostName": ''
            }
        ],
        "materialTrimsMasterEntityModel": [
            {
                "id": values.detailsId ? values.detailsId : 0,
                "matMast_ID": values.detailsId ? values.id ?  values.id : 0 : 0,
                "articleNo": values.grpArticleNo,
                "product": values.product,
                "finish": values.Finish,
                "createdBy": '',
                "modifyBy": '',
                "hostName": ''
            }
        ],
        "materialPurchaseMasterEntityModel": purchaseData
    }
}

function formatDate(date) {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON()
}

export const constructEditData = (values) => {
    let fabricObject = {};
    let threadObject = {};
    let detailsObject = {};
    const fiberMaster = values.materialFBRMasterEntityModel.length > 0 ? values.materialFBRMasterEntityModel[0] : [];
    const threadMaster = values.materialThreadMasterEntityModel.length > 0 ? values.materialThreadMasterEntityModel[0] : [];
    const detailsMaster = values.materialTrimsMasterEntityModel.length > 0 ? values.materialTrimsMasterEntityModel[0] : [];
    const purchaseMaster = values.materialPurchaseMasterEntityModel.length > 0 ? values.materialPurchaseMasterEntityModel[0] : [];
    const purchaseTempData = []
    purchaseMaster.length > 0 && purchaseMaster.map((value) => {
        const val = {
            materialCode1: value.matCode,
            supplier: value.supplierId,
            supplierRef: value.supRefNo,
            brand: value.brand,
            moq: value.moq,
            moquom: value.moqUom,
            multiples: value.multiples,
            leadTime: value.leadtime,
            color: value.color,
            size: value.size,
            fromDate: value.fromDt,
            toDate: value.toDt,
            price: value.price,
            currency: value.curCode,
            binCode: value.binCode,
            description: value.purdesc,
            remarks: value.remarks,
            purchaseId: value.id,
        };
        purchaseTempData.push(val)
    })
    if (Object.keys(threadMaster).length > 0) {
        threadObject = {
            quality: threadMaster.quality,
            tkt: threadMaster.tkt,
            tex: threadMaster.tex,
            noOfMeter: threadMaster.noOfMtr,
            threadId: threadMaster.id,
        }
    }

    if (Object.keys(detailsMaster).length > 0) {
        detailsObject = {
            grpArticleNo: detailsMaster.articleNo,
            product: detailsMaster.product,
            Finish: detailsMaster.finish,
            detailsId: detailsMaster.id,
        }
    }

    if (Object.keys(fiberMaster).length > 0) {
        fabricObject = {
            fabricId: fiberMaster.id,
            fabricContent: fiberMaster.fabricContent,
            fabricType: fiberMaster.fabricType,
            fabricWave: fiberMaster.fabricWave,
            dyeProcess: fiberMaster.dyeProcess,
            yarnWrap: fiberMaster.yarnWrap,
            yarnWeft: fiberMaster.yarnWeft,
            wrapYarnBlend: fiberMaster.wrapYarnBlend,
            weftYarnBlend: fiberMaster.weftYarnBlend,
            endsInches: fiberMaster.endsInches,
            picksInches: fiberMaster.picksInches,
            shrinkWrap: fiberMaster.shrinkWrap ? fiberMaster.shrinkWrap : 0,
            shrinkWeft: fiberMaster.shrinkWeft ? fiberMaster.shrinkWeft : 0 ,
            washMethod: fiberMaster.washMethod,
            FabWt_BW: fiberMaster.FabWt_BW ? fiberMaster.FabWt_BW : 0,
            FabWt_AW: fiberMaster.FabWt_AW ? fiberMaster.FabWt_AW : 0,
            weightUOM: fiberMaster.weightUOM,
            actualWidth: fiberMaster.actualWidth,
            cuttableWidth: fiberMaster.cuttableWidth,
            widthUOM: fiberMaster.widthUOM,
            physicalFinish: fiberMaster.physicalFinish,
            chemicalFinish: fiberMaster.chemicalFinish,
        }
    }
    const editFormData =  {
        parentGroup: values.parentGroup,
        materialType: values.matType,
        materialGroupSub: values.matGroup,
        materialCode: values.matCode,
        materialDescription: values.matDesc,
        buyerDivision: values.buyDivcode,
        active: values.active,
        id: values.id
    }
    Object.assign(editFormData, fabricObject)
    Object.assign(editFormData, detailsObject)
    Object.assign(editFormData, threadObject)
    Object.assign(editFormData, {purchaseData: purchaseTempData})
    return editFormData
}