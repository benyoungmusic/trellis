import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrors from './session_errors_reducer';
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: sessionErrors
})

export default RootReducer;