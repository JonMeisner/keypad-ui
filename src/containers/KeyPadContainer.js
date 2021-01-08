import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import KeyPad from '../components/KeyPad';
import Screen from '../components/Screen';

const useStyles = makeStyles((theme) => ({
}))

function KeyPadContainer() {
    const classes = useStyles();
    return (
        <div>
            <Screen />
            <KeyPad />
        </div>
    )
}

export default KeyPadContainer;