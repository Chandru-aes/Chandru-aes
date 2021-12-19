import React, {useEffect} from "react";
// import { connect } from "react-redux";
import {fetchBreadCrumbTitle} from "../../actions/breadcrumbAction";
import {useDispatch} from "react-redux";
// import { setBreadCrum } from "../../reducer/bread-crum";

const StyleCreate = () => {
    const dispatch = useDispatch();
    //Preproduction

    useEffect(() => {
        dispatch(
            fetchBreadCrumbTitle({ title: 'Preproduction' })
        );

        $('.dropify').dropify({
            messages: {
                'default': 'Drag and drop a file here or click',
                'replace': 'Drag and drop or click to replace',
                'remove': 'Remove',
                'error': 'Ooops, something wrong appended.'
            },
            error: {
                'fileSize': 'The file size is too big (2M max).'
            }
        });
    }, [])

    return (
        <div className="row">
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12 pl-35">
                <div className="card" id="m-content-area">
                    <div className="card-body">

                        <div className="w-25 float-start pr-15">
                            <div className="bg-grey float-start col-lg">
                                <input type="file" className="dropify" data-height="200" />
                                <div className="row row-sm">
                                    <div className="col-lg">
                                        <p className="mg-b-10 mt-10">Stage Details</p>
                                        <select name="somename" className="form-control SlectBox" >
                                            <option title="Volvo is a car" value="volvo"> Stage</option>
                                            <option value="saab">option</option>
                                            <option value="mercedes">option</option>
                                            <option value="audi">option</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-sm mt-10 no-brd">
                                    <div className="col-lg">
                                        <div className="w-15 float-start text-center">
                                            <div className="s-ic"> <img src="assets/img/i4.png" /></div>
                                        </div>
                                        <div className="w-85 float-start">
                                            <select name="somename" className="form-control SlectBox">
                                                <option title="Volvo is a car" value="volvo">Location</option>
                                                <option value="saab">option</option>
                                                <option value="mercedes">option</option>
                                                <option value="audi">option</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-sm mt-10 no-brd">
                                    <div className="col-lg">
                                        <div className="w-15 float-start text-center">
                                            <div className="s-ic"> <img src="assets/img/i5.png" /></div>
                                        </div>
                                        <div className="w-85 float-start">
                                            <select name="somename" className="form-control SlectBox">
                                                <option title="Volvo is a car" value="volvo">Unit</option>
                                                <option value="saab">option</option>
                                                <option value="mercedes">option</option>
                                                <option value="audi">option</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-sm mt-10">
                                    <div className="col-sm-7 col-md-6 col-lg-12">
                                        <div className="input-group file-browser">
                                            <input type="text" className="form-control border-right-0 browse-file" placeholder="Tech Pack" readOnly />
                                            <label className="input-group-btn">
                                                    <span className="btn btn-default">
                                                        Browse <input type="file" className="d-none" multiple />
                                                    </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-sm">
                                    <div className="col-sm-7 col-md-6 col-lg-12">
                                        <div className="input-group file-browser">
                                            <input type="text" className="form-control border-right-0 browse-file" placeholder="Buyer Block" readOnly />
                                            <label className="input-group-btn">
                                                    <span className="btn btn-default">
                                                        Browse <input type="file" className="d-none" multiple />
                                                    </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-sm">
                                    <div className="col-sm-7 col-md-6 col-lg-12">
                                        <div className="input-group file-browser">
                                            <input type="text" className="form-control border-right-0 browse-file" placeholder="FIS" readOnly />
                                            <label className="input-group-btn">
                                                    <span className="btn btn-default">
                                                        Browse <input type="file" className="d-none" multiple />
                                                    </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-75 float-end">
                            <div className="row row-sm">
                                <div className="col-lg bbrd ml-10">
                                    <label className="m-lbl float-start">
                                        IT#2136005 <span>Style Create</span>
                                    </label>
                                    <div className="dropdown cust-rgt float-end">
                                        <button aria-expanded="false" aria-haspopup="true" className="btn ripple btn-secondary" data-bs-toggle="dropdown" type="button">
                                            <img src="assets/img/i6.png"/>
                                        </button>
                                        <div className="dropdown-menu tx-13 show">
                                            <a className="dropdown-item" href="#"><span><img src="assets/img/i8.png"/></span> Single Window</a>
                                            <a className="dropdown-item" href="#"><span><img src="assets/img/i9.png"/></span> Costing</a>
                                            <a className="dropdown-item" href="#"><span><img src="assets/img/i10.png"/></span> RM Order</a>
                                            <a className="dropdown-item" href="#"><span><img src="assets/img/i11.png"/></span> Delivery SM</a>
                                            <a className="dropdown-item" href="#"><span><img src="assets/img/i12.png"/></span> History</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleCreate