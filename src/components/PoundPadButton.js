import React from 'react';
import { makeStyles, Typography, Paper, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    typography_button: {
        fontSize: 35,
        textAlign: 'center'
    },
    paper: {
        // padding: 7,
        width: 125,
        height: 125,
        justifyContent: 'center',
    },
    button: {
        textAlign: "center",
        justifyContent: "center",
        width: 125,
        height: 125,
    }
}))

export default ({buttonNum, clearAttempt}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} square>
            <Button onClick={() => clearAttempt()} className={classes.button}>
                <Typography className={classes.typography_button}>{buttonNum}</Typography>
            </Button>
        </Paper>
    )
}