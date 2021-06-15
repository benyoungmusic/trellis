import React from 'react';
import ListIndex from './list_index';
import { requestLists } from '../../actions/list_actions';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    lists: Object.keys(state.entities.lists).map(key => state.entities.lists[key]),
    currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = (dispatch) => ({
    requestLists: board_id => dispatch(requestLists(board_id)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
