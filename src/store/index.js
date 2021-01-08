import { combineReducers } from 'redux';
import KeyPadReducer from './keypad.reducer';

export default combineReducers({
    KeyPad: KeyPadReducer,
})