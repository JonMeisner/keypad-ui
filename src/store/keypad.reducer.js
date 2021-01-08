import * as types from './keypad.actions';

const initialState = {
    showKeyPad: false,
    passCode: "",
    currentAttempt: ""
}

const KeyPadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_KEYPAD:
            return {
                ...state,
                showKeyPad: true,
            }
        case types.HIDE_KEYPAD:
            return {
                ...state,
                showKeyPad: false,
            }
        case types.UPDATE_PASSCODE:
            return {
                ...state,
                passCode: action.payload,
            }
        case types.UPDATE_CURRENT_ATTEMPT:
            return {
                ...state,
                currentAttempt: action.payload,
            }
        case types.CLEAR_CURRENT_ATTEMPT:
            return {
                ...state,
                currentAttempt: "",
            }
        case types.CLEAR_ALL_DATA:
            return {
                ...state,
                currentAttempt: "",
                passCode: "",
            }
        default:
            return state;
    }
}

export default KeyPadReducer;