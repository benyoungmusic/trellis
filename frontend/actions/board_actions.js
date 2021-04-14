import * as BoardAPIUtil from '../utils/board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receiveBoards = boards => {
    return {
        type: RECEIVE_BOARDS,
        boards: boards
    }
};

const receiveBoard = board => {
    return {
        type: RECEIVE_BOARD,
        board: board
    }
};

const removeBoard = boardId => {
    return {
        type: REMOVE_BOARD,
        boardId: boardId
    }
};

export const requestBoards = userId => dispatch => {
    return BoardAPIUtil.fetchBoards(userId)
        .then(boards => dispatch(receiveBoards(boards)))
}

export const requestBoard = boardId => dispatch => {
    return BoardAPIUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)))
}

export const createBoard = board => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(boards => dispatch(receiveBoards(boards)))
}

export const updateBoard = board => dispatch => {
    return BoardAPIUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)))
}

export const deleteBoard = boardId => dispatch => {
    return BoardAPIUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
}