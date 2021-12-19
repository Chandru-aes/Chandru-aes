import { Button, FormGroup, Input, Label } from "reactstrap";
import React from "react";

export default function({label, ...props}){
    return (
        <Button {...props}>{props.children}</Button>
    )
}