import React from 'react';
import {
    Paper,
    makeStyles,
    Grid,
    TextField
} from "@material-ui/core";
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import Select1 from "react-dropdown-select";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

const HandOver = ({match}) => {
    const classes = useStyles();
    return (
        <div className="user-management" >
            <Paper className={classes.pageContent}>
                <RctCollapsibleCard fullBlock heading="HANDOVER TASK MASTERS">
                    <form className={classes.root} autoComplete="off" >
                        <Grid container>
                            <Grid item xs={3}>
                                <TextField
                                    variant="outlined"
                                    label={'HandOver Type'}
                                    name={'handoverType'}
                                    value={''}
                                    size="small"
                                />
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Guid Type"
                                            options={[]}
                                            placeholder="Guid Type"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <TextField
                                    variant="outlined"
                                    label={'Indexing Number'}
                                    name={'handoverType'}
                                    value={''}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Parent Group"
                                            options={[]}
                                            placeholder="Parent Group"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Source"
                                            options={[]}
                                            placeholder="Source"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <FormControlLabel
                                    value="sample"
                                    control={
                                        <Checkbox
                                            checked={true}
                                            // onChange={handleChange}
                                        />
                                    }
                                    label="Activate"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    variant="outlined"
                                    label={'Task'}
                                    name={'task'}
                                    value={''}
                                    size="small"
                                />
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Menu"
                                            options={[]}
                                            placeholder="Menu"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Task Type"
                                            options={[]}
                                            placeholder="Task Type"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Menu Field"
                                            options={[]}
                                            placeholder="Menu Field"
                                            values={[]}
                                        />
                                        <span className="error">&nbsp;</span>
                                    </div>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <table className="table mt-10 data w-100 float-left">
                                    <thead>
                                    <tr>
                                        <th className="w-25 text-center">Actions</th>
                                        <th className="w-25">Handover Type</th>
                                        <th className="w-25">Buyer Division</th>
                                        <th className="w-25">Task Type</th>
                                        <th className="w-25">Task</th>
                                        <th className="w-25">Guide Type</th>
                                        <th className="w-25">Source</th>
                                        <th className="w-25">Menu</th>
                                        <th className="w-25">Index</th>
                                        <th className="w-25">Active</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr key={1}>
                                        <td className="">
                                            <button
                                                className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary"
                                                tabIndex="0" type="button"
                                                aria-label="Delete"
                                                // onClick={(e) => getCurrentData(n.hid)}
                                            >
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-edit"/></span>
                                                <span className="MuiTouchRipple-root"/>
                                            </button>
                                            <button
                                                className="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary"
                                                tabIndex="0" type="button"
                                                aria-label="Delete"
                                                // onClick={(e) => getDeleteData(n.hid)}
                                            >
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-delete"/>
                                                                                </span>
                                                <span className="MuiTouchRipple-root"/>
                                            </button>

                                        </td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Grid>
                        </Grid>
                    </form>

                </RctCollapsibleCard>
                <RctCollapsibleCard fullBlock heading="HANDOVER TRANSACTIONS">
                    <form className={classes.root} autoComplete="off" >
                        <Grid container>
                            <Grid item xs={3}>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Style Number"
                                            options={[]}
                                            placeholder="Style Number"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Handover Type"
                                            options={[]}
                                            placeholder="Handover Type"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <TextField
                                    variant="outlined"
                                    label={'Indexing Number'}
                                    name={'handoverType'}
                                    value={''}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Handover Type"
                                            options={[]}
                                            placeholder="Handover Type"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>

                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Source"
                                            options={[]}
                                            placeholder="Source"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <FormControlLabel
                                    value="sample"
                                    control={
                                        <Checkbox
                                            checked={true}
                                            // onChange={handleChange}
                                        />
                                    }
                                    label="Activate"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    variant="outlined"
                                    label={'Version'}
                                    name={'version'}
                                    value={''}
                                    size="small"
                                />
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Menu"
                                            options={[]}
                                            placeholder="Menu"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Task Type"
                                            options={[]}
                                            placeholder="Task Type"
                                            values={[]}
                                        />
                                        {/*<span className="error">&nbsp;</span>*/}
                                    </div>
                                </FormControl>
                                <FormControl>
                                    <div className="select_label_name">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Menu Field"
                                            options={[]}
                                            placeholder="Menu Field"
                                            values={[]}
                                        />
                                        <span className="error">&nbsp;</span>
                                    </div>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid>
                            <table className="table mt-10 data w-100 float-left">
                                <thead>
                                <tr>
                                    <th className="w-25 text-center">Actions</th>
                                    <th className="w-25">Handover Type</th>
                                    <th className="w-25">Buyer Division</th>
                                    <th className="w-25">Task Type</th>
                                    <th className="w-25">Task</th>
                                    <th className="w-25">Guide Type</th>
                                    <th className="w-25">Source</th>
                                    <th className="w-25">Menu</th>
                                    <th className="w-25">Index</th>
                                    <th className="w-25">Active</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr key={1}>
                                    <td className="">
                                        <button
                                            className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary"
                                            tabIndex="0" type="button"
                                            aria-label="Delete"
                                            // onClick={(e) => getCurrentData(n.hid)}
                                        >
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-edit"/></span>
                                            <span className="MuiTouchRipple-root"/>
                                        </button>
                                        <button
                                            className="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary"
                                            tabIndex="0" type="button"
                                            aria-label="Delete"
                                            // onClick={(e) => getDeleteData(n.hid)}
                                        >
                                                                                <span className="MuiIconButton-label">
                                                                                    <i className="zmdi zmdi-delete"/>
                                                                                </span>
                                            <span className="MuiTouchRipple-root"/>
                                        </button>

                                    </td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                    <td>Test</td>
                                </tr>
                                </tbody>
                            </table>
                        </Grid>
                    </form>
                </RctCollapsibleCard>
            </Paper>
        </div>
    );
}
export default HandOver;