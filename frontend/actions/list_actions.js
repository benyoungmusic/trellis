import * as ListAPIUtil from '../utils/list_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';


const receiveLists = lists => {
    return {
        type: RECEIVE_LISTS,
        lists: lists
    }
};

const receiveList = list => {
    return {
        type: RECEIVE_LIST,
        list: list
    }
};

const removeList = listId => {
    return {
        type: REMOVE_LIST,
        listId: listId
    }
};

export const requestLists = boardId => dispatch => {
    return ListAPIUtil.fetchLists(boardId)
        .then(lists => dispatch(receiveLists(lists)))
}

export const requestList = listId => dispatch => {
    return ListAPIUtil.fetchList(listId)
        .then(list => dispatch(receiveList(list)))
}

export const createList = list => dispatch => {
    return ListAPIUtil.createList(list)
        .then(lists => dispatch(receiveLists(lists)))
}

export const updateList = list => dispatch => {
    return ListAPIUtil.updateList(list)
        .then(list => dispatch(receiveList(list)))
}

export const deleteList = listId => dispatch => {
    return ListAPIUtil.deleteList(listId)
        .then(() => dispatch(removeList(listId)))
}