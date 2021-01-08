export const SHOW_KEYPAD                = "SHOW_KEYPAD";
export const HIDE_KEYPAD                = "HIDE_KEYPAD";

export const UPDATE_PASSCODE            = "UPDATE_PASSCODE";

export const UPDATE_CURRENT_ATTEMPT     = "UPDATE_CURRENT_ATTEMPT";
export const CLEAR_CURRENT_ATTEMPT      = "CLEAR_CURRENT_ATTEMPT";

export const CLEAR_ALL_DATA             = "CLEAR_ALL_DATA";

export const showKeyPad = () => ({
    type: SHOW_KEYPAD,
})

export const hideKeyPad = () => ({
    type: HIDE_KEYPAD,
})

export const updatePassCode = (code) => ({
    type: UPDATE_PASSCODE,
    payload: code,
})

export const updateCurrentAttempt = (code) => ({
    type: UPDATE_CURRENT_ATTEMPT,
    payload: code,
})

export const clearCurrentAttempt = () => ({
    type: CLEAR_CURRENT_ATTEMPT,
})

export const clearAllData = () => ({
    type: CLEAR_ALL_DATA,
})