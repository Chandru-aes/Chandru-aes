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
 
 
 class CarouselElement extends Component {
    render() {
        return (
            <div className="formelements-wrapper">
                <PageTitleBar title='Slider' match={this.props.match} />
                 <div className="row">                
                    <div className="col-sm-12 col-md-12 col-xl-8">
                    <RctCollapsibleCard heading="Carousel">
                        <Carousel autoPlay>
                            <div>
                                <img src={require('Assets/img/bg-2.jpg')} />
                            </div>
                            <div>
                            <img src={require('Assets/img/bg-3.jpg')} />
                            </div>
                            <div>
                            <img src={require('Assets/img/bg-4.jpg')} />
                            </div>
                        </Carousel>
                    </RctCollapsibleCard>
                    </div>
                </div>
            </div>
   );
 };
}
 export default CarouselElement;
 
 