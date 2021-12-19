import React from "react";

export default function(){
    return (
        <div>
            {/*  Message Modal */}
            <div className="modal fade" id="chatmodel" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-right chatbox" role="document">
                    <div className="modal-content chat border-0">
                        <div className="card overflow-hidden mb-0 border-0">
                            {/*  action-header */}
                            <div className="action-header clearfix">
                                <div className="float-start hidden-xs d-flex ms-2">
                                    <div className="img_cont me-3">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img" alt="img" />
                                    </div>
                                    <div className="align-items-center mt-2">
                                        <h4 className="text-white mb-0 fw-semibold">Daneil Scott</h4>
                                        <span className="dot-label bg-success"></span><span className="me-3 text-white">online</span>
                                    </div>
                                </div>
                                <ul className="ah-actions actions align-items-center">
                                    <li className="call-icon">
                                        <a href="" className="d-done d-md-block phone-button" data-bs-toggle="modal" data-bs-target="#audiomodal">
                                            <i className="si si-phone"></i>
                                        </a>
                                    </li>
                                    <li className="video-icon">
                                        <a href="" className="d-done d-md-block phone-button" data-bs-toggle="modal" data-bs-target="#videomodal">
                                            <i className="si si-camrecorder"></i>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="si si-options-vertical"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><i className="fa fa-user-circle"></i> View profile</li>
                                            <li><i className="fa fa-users"></i>Add friends</li>
                                            <li><i className="fa fa-plus"></i> Add to group</li>
                                            <li><i className="fa fa-ban"></i> Block</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="" className="" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="si si-close text-white"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*  action-header end */}
                            {/*  msg_card_body */}
                            <div className="card-body msg_card_body">
                                <div className="chat-box-single-line">
                                    <abbr className="timestamp">February 1st, 2019</abbr>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Hi, how are you Jenna Side?
                                        <span className="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <div className="msg_cotainer_send">
                                        Hi Connor Paige i am good tnx how about you?
                                        <span className="msg_time_send">8:55 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        I am good too, thank you for your chat template
                                        <span className="msg_time">9:00 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <div className="msg_cotainer_send">
                                        You welcome Connor Paige
                                        <span className="msg_time_send">9:05 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Yo, Can you update Views?
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        But I must explain to you how all this mistaken born and I will give
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Yo, Can you update Views?
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        But I must explain to you how all this mistaken born and I will give
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Yo, Can you update Views?
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        But I must explain to you how all this mistaken born and I will give
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/9.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <div className="img_cont_msg">
                                        <img src="assets/img/faces/6.jpg" className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Okay Bye, text you later..
                                        <span className="msg_time">9:12 AM, Today</span>
                                    </div>
                                </div>
                            </div>
                            {/*  msg_card_body end */}
                            {/*  card-footer */}
                            <div className="card-footer">
                                <div className="msb-reply d-flex">
                                    <div className="input-group">
                                        <input type="text" className="form-control " placeholder="Typing...." />
                                        <div className="input-group-text ">
                                            <button type="button" className="btn btn-primary ">
                                                <i className="far fa-paper-plane" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*  card-footer end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal */}
            <div id="videomodal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark border-0 text-white">
                        <div className="modal-body mx-auto text-center p-7">
                            <h5>Valex Video call</h5>
                            <img src="assets/img/faces/6.jpg" className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3" alt="img" />
                            <h4 className="mb-1 fw-semibold">Daneil Scott</h4>
                            <h6>Calling...</h6>
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-4">
                                        <a className="icon icon-shape rounded-circle mb-0 me-3" href="#">
                                            <i className="fas fa-video-slash"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="icon icon-shape rounded-circle text-white mb-0 me-3" href="#" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="fas fa-phone bg-danger text-white"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="icon icon-shape rounded-circle mb-0 me-3" href="#">
                                            <i className="fas fa-microphone-slash"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>{/*  modal-body */}
                    </div>
                </div>{/*  modal-dialog */}
            </div>{/*  modal */}
            {/*  Audio Modal */}
            <div id="audiomodal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content border-0">
                        <div className="modal-body mx-auto text-center p-7">
                            <h5>Valex Voice call</h5>
                            <img src="assets/img/faces/6.jpg" className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3" alt="img" />
                            <h4 className="mb-1  fw-semibold">Daneil Scott</h4>
                            <h6>Calling...</h6>
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-4">
                                        <a className="icon icon-shape rounded-circle mb-0 me-3" href="#">
                                            <i className="fas fa-volume-up bg-light text-dark"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="icon icon-shape rounded-circle text-white mb-0 me-3" href="#" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="fas fa-phone text-white bg-success"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="icon icon-shape  rounded-circle mb-0 me-3" href="#">
                                            <i className="fas fa-microphone-slash bg-light text-dark"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>{/*  modal-body */}
                    </div>
                </div>{/*  modal-dialog */}
            </div>{/* modal */}
        </div>
    )
}