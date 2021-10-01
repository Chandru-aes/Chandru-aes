/**
 * Form Elemets
 */
import React, { Component } from 'react';
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

import TextField from '@material-ui/core/TextField';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

import FormattedInputs from '../../forms/material-text-field/components/formated-input';

// rct card box

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class FormElements extends Component {
	state = {
		dataSource: [],
	};

	handleUpdateInput = (value) => {
		this.setState({
			dataSource: [
				value,
				value + value,
				value + value + value,
			],
		});
	};

	render() {
		return (
			<div className="formelements-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.formElements" />} match={this.props.match} />
				<div className="row">
					
					<div className="col-sm-12 col-md-12 col-xl-12">
						<RctCollapsibleCard heading="Input Types">
							<Form>
								<FormGroup>
									<Label for="Email-3">Email</Label>
									<Input type="email" name="email" id="Email-3" placeholder="with a placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="Password-3">Password</Label>
									<Input type="password" name="password" id="Password-3" placeholder="password placeholder" />
								</FormGroup>
								{/* <FormGroup>
									<Label for="exampleUrl">Url</Label>
									<Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleNumber">Number</Label>
									<Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleDatetime">Datetime</Label>
									<Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleDate">Date</Label>
									<Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleTime">Time</Label>
									<Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleColor">Color</Label>
									<Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleSearch">Search</Label>
									<Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="Select-2">Select</Label>
									<Input type="select" name="select" id="Select-2">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="exampleSelectMulti">Select Multiple</Label>
									<Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="Text-2">Text Area</Label>
									<Input type="textarea" name="text" id="Text-2" />
								</FormGroup>
								<FormGroup>
									<Label for="File-2">File</Label>
									<Input type="file" name="file" id="File-2" />
									<FormText color="muted">
										This is some placeholder block-level help text for the above input.
                        Its a bit lighter and easily wraps to a new line.
                      </FormText>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" />{' '}
										Option one is this and that—be sure to include why its great
                      </Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" />{' '}
										Check me out
                      </Label>
								</FormGroup> */}
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Different Widths">
						<div className="row">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-3" placeholder="col-sm-3"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-3" placeholder="col-sm-3"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-3" placeholder="col-sm-3"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-3" placeholder="col-sm-3"/>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6 col-md-6 col-xl-4">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-4" placeholder="col-sm-4"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-4">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-4" placeholder="col-sm-4"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-4">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-4" placeholder="col-sm-4"/>
								</div>
							</div>						
						</div>

						<div className="row">
							<div className="col-sm-6 col-md-6 col-xl-6">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-6" placeholder="col-sm-6"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-6">
								<div className="form-group">
								<TextField id="name" fullWidth label="col-sm-6" placeholder="col-sm-6"/>
								</div>
							</div>												
						</div>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Different Sizes">
							<Form>
								<FormGroup row>
									<Label for="Email-5" sm={2} size="lg">Email</Label>
									<Col sm={10}>
										<Input type="email" name="email" id="Email-5" placeholder="lg" bsSize="lg" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="Email-6" sm={2}>Email</Label>
									<Col sm={10}>
										<Input type="email" name="email" id="Email-6" placeholder="default" />
									</Col>
								</FormGroup>
							</Form>
						</RctCollapsibleCard>	
						<RctCollapsibleCard heading="Formatted inputs">
         					 <FormattedInputs />
        				</RctCollapsibleCard>		
						<RctCollapsibleCard heading="Text Area">
							<Form>
								<FormGroup row>
									<Label for="Email-5" sm={2}>Comments</Label>
									<Col sm={10}>
									   <textarea className="form-control" bsSize="lg"/>										
									</Col>
								</FormGroup>
								
							</Form>
						</RctCollapsibleCard>			
					</div>
				</div>
			</div>
		);
	}
}
