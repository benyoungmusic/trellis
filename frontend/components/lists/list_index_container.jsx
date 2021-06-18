import React from 'react';
import ListIndex from './list_index';
import { requestLists, deleteList } from '../../actions/list_actions';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    lists: Object.keys(state.entities.lists).map(key => state.entities.lists[key]),
    currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
    requestLists: board_id => dispatch(requestLists(board_id)),
    deleteList: list_id => dispatch(deleteList(list_id)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
