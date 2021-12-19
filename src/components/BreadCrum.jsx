import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {getBreadCrumbDetails} from "../reducer/bread-crum";

function Breadcrumb(){
    const [title, setTitle] = useState('');
    const breadCrumbTitle = useSelector(getBreadCrumbDetails)


    useEffect(() => {
        if (breadCrumbTitle.title !== '') {
            setTitle(breadCrumbTitle.title)
        }
    }, [breadCrumbTitle])



    return (
        <div className="sticky br-ss">
            <div className="breadcrumb-header justify-content-between pr-15 pl-15">
                <div className="my-auto">
                    <div className="d-flex">
                        <div className="app-sidebar__toggle ml-15">
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                            </svg>
                        </div>
                        <h4 className="content-title mb-0 my-auto ml-15">{title ? title : 'App'}</h4>
                    </div>
                </div>
                <div className="float-end  ml-50 w-75">
                    <ul className="bred-crem float-end pt-10">
                        <li><a href="#">App</a></li>
                        <li>Forecasting</li>
                    </ul>
                </div>
                <div className="d-flex my-xl-auto right-content">
                    <div className="col-sm-6 col-md-6 mg-t-10 mg-md-t-0 p-0 mr-10">
                        <button className="btn btn-danger btn-with-icon btn-block"><i className="fas fa-times"></i>Clear</button>
                    </div>
                    <div className="col-sm-6 col-md-6 mg-t-10 mg-md-t-0 p-0">
                        <button className="btn btn-success btn-with-icon btn-block"><i className="fa fa-save"></i> Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb