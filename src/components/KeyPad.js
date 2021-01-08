import React, { useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as KeyPadActions from '../store/keypad.actions';

import PadButton from './PadButton';
import PoundPadButton from './PoundPadButton';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        textAlign: 'center',
        flexGrow: 1,
    },
    grid: {
        // textAlign: 'center',
        backgroundColor: "blue",
        flexGrow: 1,
        // alignItems: "center",
        // justifyContent: "center"
    },
    gridContainer: {
        display: "flex",
        backgroundColor: "red",
        flex: 1,
        flexDirection: "column"
    },
    gridRow: {
        display: "flex",
        backgroundColor: "orange",
        flexDirection: "row",
        flex: 1
    },
    gridRowItem: {
        display: "flex",
        flex: 1,
        backgroundColor: "green",
    }
}))

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentAttempt = useSelector((state) => state.KeyPad.currentAttempt)

    const updateAttempt = (value) => {
        console.log(currentAttempt)
        console.log(value)
        dispatch(KeyPadActions.updateCurrentAttempt(currentAttempt + value));
        // if (value != null && value != undefined && currentAttempt != "") {
        //     console.log(currentAttempt);
        //     console.log(value);
        //     console.log(currentAttempt + value);
        //     dispatch(KeyPadActions.updateCurrentAttempt(currentAttempt + value));
        // } 
        // else if (value != null && value != undefined && currentAttempt === "") {
        //     dispatch(KeyPadActions.updateCurrentAttempt(value));
        // }
    }

    const clearAttempt = () => {
        dispatch(KeyPadActions.clearCurrentAttempt());
    }

    
    useEffect(() => {
        document.addEventListener("keyup", (e) => onKeyPress(e));
        return (e) => {
            
            if (e.keyCode >= 96 && e.keyCode <= 105) {
                document.removeEventListener("keyup", (e) => onKeyPress(e));
                // onKeyPress(e)
            }
        };
    }, []);

    const onKeyPress = (e) => {
        if (e.keyCode === 96) {
            updateAttempt("0")
        }
        if (e.keyCode === 97) {
            updateAttempt("1")
        }
        if (e.keyCode === 98) {
            updateAttempt("2")
        }
        if (e.keyCode === 99) {
            updateAttempt("3")
        }
        if (e.keyCode === 100) {
            updateAttempt("4")
        }
        if (e.keyCode === 101) {
            updateAttempt("5")
        }
        if (e.keyCode === 102) {
            updateAttempt("6")
        }
        if (e.keyCode === 103) {
            updateAttempt("7")
        }
        if (e.keyCode === 104) {
            updateAttempt("8")
        }
        if (e.keyCode === 105) {
            updateAttempt("9")
        }
    }

    return (
        <div className={classes.gridContainer}>
            <div className={classes.gridRow}>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"1"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"2"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"3"} />
                </div>
            </div>
            <div className={classes.gridRow}>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"4"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"5"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"6"} />
                </div>
            </div>
            <div className={classes.gridRow}>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"7"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"8"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"9"} />
                </div>
            </div>
            <div className={classes.gridRow}>
                <div className={classes.gridRowItem}>
                    <PoundPadButton clearAttempt={clearAttempt} buttonNum={"*"} />
                </div>
                <div className={classes.gridRowItem}>
                    <PadButton updateAttempt={updateAttempt} buttonNum={"0"} />
                </div>
                <div className={classes.gridRowItem}>
                    {/* <AltPadButton buttonNum={"#"} /> */}
                </div>
            </div>
        </div>
        // <div className={classes.main}>
        //     <Grid className={classes.grid} container spacing={1}>
        //         <Grid container spacing={0}>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={1}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={2}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={3}/>
        //             </Grid>
        //         </Grid>

        //         <Grid container spacing={0}>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={4}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={5}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={6}/>
        //             </Grid>
        //         </Grid>

        //         <Grid container spacing={0}>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={7}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={8}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={9}/>
        //             </Grid>
        //         </Grid>

        //         <Grid container spacing={0}>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={"*"}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={0}/>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <PadButton buttonNum={"#"}/>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </div>
    )
}