/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName">Category Name</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Category Name"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userEmail">Category code</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Category code"
                value={addNewUserDetails.emailAddress}
                onChange={(e) => onChangeAddNewUserDetails('emailAddress', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userType">Type</Label>
            <Input
                type="text"
                name="userType"
                id="userType"
                placeholder="Enter Type"
                value={addNewUserDetails.type}
                onChange={(e) => onChangeAddNewUserDetails('type', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="accountType">Account Type</Label>
            <Input
                type="text"
                name="accountType"
                id="accountType"
                placeholder="Enter Account Type"
                value={addNewUserDetails.accountType}
                onChange={(e) => onChangeAddNewUserDetails('accountType', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default AddNewUserForm;
