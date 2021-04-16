import { combineReducers } from 'redux';
import ListsReducer from './lists_reducer';
import UsersReducer from './users_reducer';
import BoardsReducer from './boards_reducer';

export default combineReducers({
    users: UsersReducer,
    boards: BoardsReducer,
    lists: ListsReducer
});