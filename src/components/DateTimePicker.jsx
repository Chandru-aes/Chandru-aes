import React from "react";
import ReactDatePicker from "react-datepicker";

export default function(){
    const [startDate, setStartDate] = React.useState(new Date());
    return (
        <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
        />
    );
}