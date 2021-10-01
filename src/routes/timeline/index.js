/**
 * Simple Line Icons
 */
 import React, { Component } from 'react';

 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 import 'font-awesome/css/font-awesome.min.css';
 
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import { Carousel } from 'react-responsive-carousel';
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'font-awesome/css/font-awesome.min.css';
 
 class TimelineElement extends Component {
    render() {
        return (
            <div className="formelements-wrapper">
                <PageTitleBar title='Timeline' match={this.props.match} />
                 <div className="row">                
                    <div className="col-sm-12 col-md-12 col-xl-8">
                    <RctCollapsibleCard heading="TimeLine">
                    <div class="container">
                        <div class="page-header">
                            <h1 id="timeline">Timeline</h1>
                        </div>
                        <ul class="timeline">
                            <li>
                            <div class="timeline-badge">1</div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                <p><small class="text-muted"><i class="fas fa-clock"></i> 11 hours ago via Twitter</small></p>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                </div>
                            </div>
                            </li>
                            <li class="timeline-inverted">
                            <div class="timeline-badge warning">2</div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere
                                    pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div class="timeline-badge danger">3</div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                </div>
                            </div>
                            </li>
                            <li class="timeline-inverted">
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div class="timeline-badge info">4</div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                               
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                                    <i class="fas fa-caret-circle-right"></i> <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                </div>
                            </div>
                            </li>
                            <li class="timeline-inverted">
                            <div class="timeline-badge success">5</div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div class="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                    </RctCollapsibleCard>
                    </div>
                </div>
            </div>
   );
 };
}
 export default TimelineElement;
 
 