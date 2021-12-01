import React from 'react';
import {
    Paper,
    makeStyles,
    Grid,
    TextField
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
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
                <form className={classes.root} autoComplete="off" >
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                label={'HandOver Type'}
                                name={'handoverType'}
                                value={''}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
export default HandOver;