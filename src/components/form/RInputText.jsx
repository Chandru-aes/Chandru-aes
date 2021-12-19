import { FormGroup, Input, Label } from "reactstrap";
import React from "react";

export default function({label, labelProps, ...props}){
    if(props.type && !["text", "number", "email", "url"].includes(props.type)){
        return <span></span>
    }
    return (
        <FormGroup>
            {label && <Label {...(props.id ? {for: props.id} : {})} {...labelProps || {}}>{label}: </Label>}
            <Input {...props} />
        </FormGroup>
    )
}