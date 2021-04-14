import React from 'react';
import BoardIndex from './board_index';
import { requestBoards } from '../../actions/board_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    boards: Object.keys(state.entities.boards).map(key => state.entities.boards[key]),
    currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
    requestBoards: userId => dispatch(requestBoards(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
