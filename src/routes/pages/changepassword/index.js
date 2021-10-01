import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
// intl messages
import IntlMessages from 'Util/IntlMessages';
 
export default class NewList extends Component {
   render() {
      return (
         <div className="blank-wrapper">
           <Helmet>
              <title>name page</title>
              <meta name="description" content="Reactify Blank Page" />
           </Helmet>
          <PageTitleBar title={<IntlMessages id="sidebar.changePassword" />} match={this.props.match} />
          <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-6">
                <RctCollapsibleCard >
                        <Form>
                            <FormGroup row>
                                <Label for="Email-1" sm={4}>Old Password</Label>
                                <Col sm={8}>
                                    <Input type="password" name="email" id="Email-1" placeholder="Old Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Email-1" sm={4}>New Password</Label>
                                <Col sm={8}>
                                    <Input type="password" name="email" id="Email-1" placeholder="New Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Email-1" sm={4}>Confirm Password</Label>
                                <Col sm={8}>
                                    <Input type="password" name="email" id="Email-1" placeholder="Confirm Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="text-right">
                            <Button className="btn button-base btn-primary-bg">Update Password</Button>
                            </FormGroup>
                           
                        </Form>
                    </RctCollapsibleCard>
                </div>
            </div>
        </div>
      );
   }
}