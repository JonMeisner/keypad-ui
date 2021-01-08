import React, { useEffect } from 'react';
import { makeStyles, Fade } from '@material-ui/core';
// import { useSelector } from 'react-redux';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import KeyPadContainer from './containers/KeyPadContainer';
import { useDispatch, useSelector } from 'react-redux';
import * as KeyPadActions from './store/keypad.actions';
import * as apis from './apis/apis';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "auto",
        overflow: "hidden",
        width: 375,
        height: 610,
        top: 65,
        left: 400,
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "grey",
        backgroundColor: "grey",
        // margin: "auto",
        position: "relative",
    }
}))

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const showKeyPad = useSelector((state) => state.KeyPad.showKeyPad);

    const closeApplication = () => {

    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => onKeyPress(e));
        return (e) => {
            
            if (e.keyCode === 27) {
                document.removeEventListener("keydown", (e) => onKeyPress(e));
            }
        };
    }, []);

    const onKeyPress = (e) => {
        if (e.keyCode === 27) {
            closeApplication()
        }
    }

    useEffect(() => {
        window.addEventListener("message", (e) => onMessage(e));
        return () => {
            window.removeEventListener("message", (e) => onMessage(e));
        };
    }, []);

    const onMessage = (event) => {
        if (event.data.openKeyPad) {
            dispatch(KeyPadActions.showKeyPad());
            // Get the actual passcode
        }
        if (event.data.openKeyPad === false) {
            dispatch(KeyPadActions.hideKeyPad());
            disaptch(KeyPadActions.clearAllData());
        }
    } 


    return (
        <Fade in={showKeyPad} timout={1000,1000}>
            <div className={classes.main}>
                <KeyPadContainer />
            </div>
        </Fade>
    )
}

export default App;