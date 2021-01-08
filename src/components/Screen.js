import React from 'react';
import { makeStyles, createMuiTheme, Card, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "black",
        minHeight: 110,
    },
    typography_pass: {
        color: "#34B714",
        fontSize: 60,
        textAlign: 'center',
        letterSpacing: 25,
        maxHeight: 120,
    }
}))

const theme = createMuiTheme({
    text: {
        primary: {
            main: "#34B714",
        },
        secondary: {
            main: "#EA0A0A",
        }
    }
})

export default () => {
    const classes = useStyles();
    const currentAttempt = useSelector((state) => state.KeyPad.currentAttempt);
    const attemptLength = currentAttempt.length;
    return (
        <Paper className={classes.paper} square>
            <Typography className={classes.typography_pass}>{"*".repeat(attemptLength)}</Typography>
        </Paper>
    )
}