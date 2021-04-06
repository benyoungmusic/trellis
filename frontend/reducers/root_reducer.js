import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrors from './session_errors_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    errors: sessionErrors
})

export default RootReducer;