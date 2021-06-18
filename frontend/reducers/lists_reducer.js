import {
    RECEIVE_LISTS,
    RECEIVE_LIST,
    REMOVE_LIST,
} from '../actions/list_actions';

const ListsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    console.log("list reducer action", action)
    switch (action.type) {
        case RECEIVE_LISTS:
            return action.lists
        case RECEIVE_LIST:
            console.log("event", action.event)
            nextState[action.list.id] = action.event;
            return nextState;
        case REMOVE_LIST:
            let nextStateArr = Object.keys(nextState).map(key => nextState[key]);
            let nextList = nextStateArr.filter(list => list.id !== action.listId);
            nextState = Object.assign({}, nextList)
            return nextState;
        default:
            return oldState;
    };
};

export default ListsReducer;