import React from 'react';
import CardIndex from './card_index';
import { requestCardsByBoard, deleteCard, updateCard } from '../../actions/card_actions';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentUserId: state.session.currentUserId,
    // cards: Object.keys(state.entities.cards).map(key => state.entities.cards[key])
    cards: Object.values(state.entities.cards)
});

const mapDispatchToProps = (dispatch) => ({
    requestCardsByBoard: board_id => dispatch(requestCardsByBoard(board_id)),
    deleteCard: card_id => dispatch(deleteCard(card_id)),
    updateCard: card => dispatch(updateCard(card)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
