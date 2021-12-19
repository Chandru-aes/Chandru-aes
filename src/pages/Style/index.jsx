import React, {useEffect} from "react";
// import { connect } from "react-redux";
// import { setBreadCrum } from "../../reducer/bread-crum";
import {fetchBreadCrumbTitle} from "../../actions/breadcrumbAction";
import {useDispatch} from "react-redux";

const StyleList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchBreadCrumbTitle({ title: 'StyleList' })
        );
    }, [])

    return (
        <div className="row">
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12 pl-35">
                <div className="card" id="m-content-area">
                    <div className="card-body">

                        <div className="w-100 float-end">
                            <div className="row row-sm">
                                <div className="col-lg bbrd ml-10">
                                    <label className="m-lbl float-start">
                                        <span>Style List</span>
                                    </label>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default StyleList;