import React, { Component, Fragment } from 'react';
class UDMasterTypeList extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <th className="text-center w-10">Actions</th>
                        <th className="">Misc Type</th>
                        <th className="">Description</th>
                        <th className="">Active</th>
                    </thead>
                    <tbody>
                        {
                            this.props.TypeList.map((data, ind) => (
                                <tr>
                                    <td className="text-center">
                                    
                                        <button onClick = {this.props.EditRow} data-param={data.miscType} className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Edit">
                                            <span className="MuiIconButton-label" data-param={data.miscType} >
                                                <i className="zmdi zmdi-edit" data-param={data.miscType}></i>
                                            </span>
                                            <span className="MuiTouchRipple-root"></span>
                                        </button>
                                        <button className="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete" >
                                            <span className="MuiIconButton-label">
                                                <i className="zmdi zmdi-delete"></i>
                                            </span>
                                            <span className="MuiTouchRipple-root"></span>
                                        </button>
                                    </td>
                                    <td>{data.miscType}</td>
                                    <td>{data.description}</td>
                                    <td>{data.active}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UDMasterTypeList;