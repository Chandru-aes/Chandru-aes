import React, {useState} from 'react';
import {
    Paper,
    makeStyles,
    Grid,
    TextField
} from "@material-ui/core";
import { FormControl } from '@material-ui/core';
import Select1 from "react-dropdown-select";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Formik, Form} from "formik";

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
}));

const HandOver = ({match}) => {
    const [handoverDate, setHandoverDate] = useState()
    const classes = useStyles();
    const [taskMasterInitialVal, setTaskMasterInitialVal] = useState({
        handOverType: [],
        buyerDivision: [],
        task: '',
        taskType: [],
        guideType: [],
        source: [],
        menu: '',
        menuField: [],
        indexNumber: '',
        active: false
    });
    const [error, setError] = useState({});

    const onTaskMasterFormSubmit = (values, reset) => {
        const isValidForm = checkFormRequiredFields(values)
    }

    const checkFormRequiredFields = (values) => {
        console.log(values)
        let isValid = true;
        if (values.handOverType.length === 0 || Object.keys(values).length === 0){
            let newError = Object.assign(error, {handOverType: 'handOverType is required'})
            setError(newError);
            isValid = false
        }
        if (values.buyerDivision.length === 0 || Object.keys(values).length === 0){
            let newError = Object.assign(error, {buyerDivision: 'BuyerDivision is required'})
            setError(newError);
            isValid = false
        }
        if (values.taskType.length === 0 ||  Object.keys(values).length === 0){
            let newError = Object.assign(error, {taskType: 'TaskType is required'})
            setError(newError);
            isValid = false
        }
        if (values.task === '' ||  Object.keys(values).length === 0){
            let newError = Object.assign(error, {task: 'Task is required'})
            setError(newError);
            isValid = false
        }

        return isValid;
    }

    const onSelectOnChange = (e, name='', setFieldValue, secondName = '') => {

    }

    return (
        <div className="user-management" >
            <Paper className={classes.pageContent}>
                <RctCollapsibleCard fullBlock>
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <Accordion className="border mb-15 mt-15">
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                <div className="acc_title_font">
                                    <Typography>HANDOVER TASK MASTERS</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Formik
                                    enableReinitialize
                                    initialValues={taskMasterInitialVal}
                                    // validationSchema={Yup.object().shape(validationShape)}
                                    onSubmit={(values, action) => {
                                        onTaskMasterFormSubmit(values, action.resetForm)
                                    }}
                                >
                                    {(props) => {
                                        const {
                                            values,
                                            touched,
                                            errors,
                                            handleBlur,
                                            handleChange,
                                            isValid,
                                            dirty,
                                            handleSubmit,
                                            setFieldValue
                                        } = props;
                                        console.log(error)
                                        return (
                                            <Form className={classes.root} autoComplete="off" >
                                                <Grid container>
                                                    <Grid item xs={3}>
                                                        <div className="select_label_name">
                                                            <Select1
                                                                dropdownPosition="auto"
                                                                createNewLabel="HandOver Type"
                                                                options={[]}
                                                                placeholder="HandOver Type"
                                                                values={[]}
                                                                onChange={(e) => {
                                                                    setFieldValue('handOverType', e)
                                                                    // onSelectOnChange(e, 'guideType', setFieldValue)
                                                                }}
                                                            />
                                                            <span className="error">{error && error.handOverType && error.handOverType}</span>
                                                        </div>
                                                        <FormControl>
                                                            <div className="select_label_name">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    createNewLabel="Guid Type"
                                                                    options={[]}
                                                                    placeholder="Guid Type"
                                                                    values={[]}
                                                                    onChange={(e) => {
                                                                        setFieldValue('guideType', e)
                                                                        // onSelectOnChange(e, 'guideType', setFieldValue)
                                                                    }}
                                                                />
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
                                                                    createNewLabel="Buyer Division"
                                                                    options={[]}
                                                                    placeholder="Buyer Division"
                                                                    values={[]}
                                                                    onChange={(e) => {
                                                                        setFieldValue('buyerDivision', e)
                                                                        // onSelectOnChange(e, 'buyerDivision', setFieldValue)
                                                                    }}
                                                                />
                                                                <span className="error">{error && error.buyerDivision && error.buyerDivision}</span>
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
                                                                    onChange={(e) => {
                                                                        setFieldValue('source', e)
                                                                        // onSelectOnChange(e, 'source', setFieldValue)
                                                                    }}
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
                                                        <FormControl>
                                                            <TextField
                                                                variant="outlined"
                                                                label={'Task'}
                                                                name={'task'}
                                                                value={''}
                                                            />
                                                            <span className="error">{error && error.task && error.task}</span>
                                                        </FormControl>
                                                        <FormControl>
                                                            <div className="select_label_name">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    createNewLabel="Menu"
                                                                    options={[]}
                                                                    placeholder="Menu"
                                                                    values={[]}
                                                                    onChange={(e) => {
                                                                        setFieldValue('menu', e)
                                                                        // onSelectOnChange(e, 'menu', setFieldValue)
                                                                    }}
                                                                />
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
                                                                    onChange={(e) => {
                                                                        setFieldValue('taskType', e)
                                                                        // onSelectOnChange(e, 'taskType', setFieldValue)
                                                                    }}
                                                                />
                                                                <span className="error">{error && error.taskType && error.taskType}</span>
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
                                                                    onChange={(e) => {
                                                                        setFieldValue('menuField', e)
                                                                        // onSelectOnChange(e, 'menuField', setFieldValue)
                                                                    }}
                                                                />
                                                                {/*<span className="error">&nbsp;</span>*/}
                                                            </div>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                                <div className="w-100">
                                                    <div className="btn-right-align n-bt-top">
                                                        <button
                                                            className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm"
                                                            tabIndex="0" type="submit">
                                                            <span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o" /></span>
                                                            <span className="MuiTouchRipple-root" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>
                                        );
                                    }}
                                        </Formik>
                                        <Grid container>
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
                                        </AccordionDetails>
                                        </Accordion>
                                        </div>


                                        </RctCollapsibleCard>
                                        <RctCollapsibleCard fullBlock>
                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                        <Accordion className="border mb-15 mt-15">
                                        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down" />}>
                                        <div className="acc_title_font">
                                        <Typography>HANDOVER TRANSACTIONS</Typography>
                                        </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
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
                                        <div className="rct-picker">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        disablePast={true}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        KeyboardButtonProps={{
                                        'aria-label': 'Handover Date',
                                    }}
                                        label="Handover Date"
                                        value={handoverDate}
                                        onChange={(e) => console.log(e)}
                                        animateYearScrolling={false}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        fullWidth
                                        />
                                        </MuiPickersUtilsProvider>
                                        </div>
                                        <TextField
                                        variant="outlined"
                                        label={'Acknowledgment'}
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
                                        createNewLabel="Task"
                                        options={[]}
                                        placeholder="Task"
                                        values={[]}
                                        />
                                    {/*<span className="error">&nbsp;</span>*/}
                                        </div>
                                        </FormControl>
                                        <TextField
                                        variant="outlined"
                                        label={'Share / e-Mail'}
                                        name={'shareEmail'}
                                        value={''}
                                        size="small"
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
                                        <div className="rct-picker">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        disablePast={true}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        KeyboardButtonProps={{
                                        'aria-label': 'Expected Date',
                                    }}
                                        label="Expected Date"
                                        value={handoverDate}
                                        onChange={(e) => console.log(e)}
                                        animateYearScrolling={false}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        fullWidth
                                        />
                                        </MuiPickersUtilsProvider>
                                        <TextField
                                        name="upload-photo"
                                        type="file"
                                        />
                                        </div>
                                        </Grid>
                                        <Grid item xs={3}>
                                        <div className="rct-picker">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        disablePast={true}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        KeyboardButtonProps={{
                                        'aria-label': 'Handover Date',
                                    }}
                                        label="Handover Date"
                                        value={handoverDate}
                                        onChange={(e) => console.log(e)}
                                        animateYearScrolling={false}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        fullWidth
                                        />
                                        </MuiPickersUtilsProvider>
                                        </div>
                                        <TextField
                                        variant="outlined"
                                        label={'Remarks'}
                                        name={'version'}
                                        value={''}
                                        size="small"
                                        />
                                        </Grid>
                                        </Grid>
                                        <Grid>
                                        <table className="table mt-10 data w-100 float-left">
                                        <thead>
                                        <tr>
                                        <th className="w-25 text-center">Actions</th>
                                        <th className="w-25">Task</th>
                                        <th className="w-25">File Name</th>
                                        <th className="w-25">Menu Version</th>
                                        <th className="w-25">Remarks</th>
                                        <th className="w-25">Expected Date</th>
                                        <th className="w-25">Revisions</th>
                                        <th className="w-25">Modified By / Date</th>

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
                                        </tr>
                                        </tbody>
                                        </table>
                                        </Grid>
                                        </form>
                                        </AccordionDetails>
                                        </Accordion>
                                        </div>
                                        </RctCollapsibleCard>
                                        </Paper>
                                        </div>
                                        );
                                    }
export default HandOver;