import React, { Component, Fragment } from 'react';
class UDMasterList extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <th className="text-center w-10">Actions</th>
                        <th className="">Type</th>
                        <th className="">Code</th>
                        <th className="">Type Desc</th>
                        <th className="">Code Desc</th>
                        <th className="">Index Key</th>
                        <th className="">Active</th>
                    </thead>
                    <tbody>
                        {
                            this.props.UDList.map((data, ind) => (
                                <tr>
                                    <td className="text-center">
                                    
                                        <button onClick = {this.props.EditRow} data-param={data.code} data-param1={data.type} className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Edit">
                                            <span className="MuiIconButton-label" data-param={data.code} data-param1={data.type}>
                                                <i className="zmdi zmdi-edit" data-param={data.code} data-param1={data.type}></i>
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
                                    <td>{data.type}</td>
                                    <td>{data.code}</td>
                                    <td>{data.typeDesc}</td>
                                    <td>{data.codeDesc}</td>
                                    <td>{data.indexkey}</td>
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

export default UDMasterList;