import { combineReducers } from 'redux';
import ListsReducer from './lists_reducer';
import UsersReducer from './users_reducer';
import BoardsReducer from './boards_reducer';
import CardsReducer from './cards_reducer'

export default combineReducers({
    users: UsersReducer,
    boards: BoardsReducer,
    lists: ListsReducer,
    cards: CardsReducer
});