import React, {useState} from 'react';
import Select from 'react-select';

const ReactSelect = ({options, name, onChange, multiple, label}) => {
    const [optionsSelected, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        const values = [];
        selected.length > 0 && selected.map((v) => values.push(v.value))
        onChange({name, id: values});
        setSelectedOptions(selected)
    }

    return(
        <Select
            options={options}
            isLoading={!options}
            closeMenuOnSelect={true}
            onChange={handleChange}
            value={optionsSelected}
            name={name}
            isMulti={multiple}
            placeholder={label}
        />
    )
}

export default ReactSelect;