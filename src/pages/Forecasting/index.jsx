import React, {useEffect} from "react";
// import { connect } from "react-redux";
// import { setBreadCrum } from "../../reducer/bread-crum";
import {fetchBreadCrumbTitle} from "../../actions/breadcrumbAction";
import {useDispatch} from "react-redux";

const Forecasting = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchBreadCrumbTitle({ title: 'Forecasting' })
        );
    }, [])

    return (
        <div className="row">
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12 pl-35">
                <div className="card" id="m-content-area">
                    <div className="card-body">
                        <div className="panel-group1" id="accordion11">
                            <div className="panel panel-default  mb-4">
                                <div className="panel-heading1 bg-primary ">
                                    <h4 className="panel-title1">
                                        <a className="accordion-toggle collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion11" href="#collapseFour1" aria-expanded="false"><i className="fe fe-arrow-right me-2"></i>Add
                                            Forecasting </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecasting