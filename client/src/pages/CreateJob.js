import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Paper,
    Typography,
    Button
} from '@material-ui/core';

import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import JobsForm from '../components/JobsForm';

import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        margin: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        width: '7rem'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

export default function CreateJob() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Create New Job</Typography>
                        {/* pass createJob API to JobsForm via props */}
                        {/* Other pages using JobsForm component will pass different API functions */}
                        {/* pass a blank defaultvalue to JobsForm (default value will be used in view/edit job) */}
                        <JobsForm APIFunction={API.createJob} setDisable={false} setDefaultValue={""} route={"/admin"} />
                    
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div >
    )
};

