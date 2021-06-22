import * as CardAPIUtil from '../utils/card_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

const receiveCards = cards => {
    return {
        type: RECEIVE_CARDS,
        cards: cards
    }
};

const receiveCard = card => {
    return {
        type: RECEIVE_CARD,
        card: card
    }
};

const removeCard = cardId => {
    return {
        type: REMOVE_CARD,
        cardId: cardId
    }
};

export const requestCardsByList = list_id => dispatch => {
    return CardAPIUtil.fetchCardsByList(list_id)
        .then(cards => dispatch(receiveCards(cards)))
}

export const requestCardsByBoard = board_id => dispatch => {
    return CardAPIUtil.fetchCardsByBoard(board_id)
        .then(cards => dispatch(receiveCards(cards)))
}

export const requestCard = card_id => dispatch => {
    return CardAPIUtil.fetchCard(card_id)
        .then(card => dispatch(receiveCard(card)))
}

export const createCard = card => dispatch => {
  return CardAPIUtil.createCard(card)
    .then(card => dispatch(receiveCard(card)))
}

export const updateCard = card => dispatch => {
  return CardAPIUtil.updateCard(card)
    .then(card => dispatch(receiveCard(card)))
}

export const deleteCard = card_id => dispatch => {
    return CardAPIUtil.deleteCard(card_id)
        .then(() => dispatch(removeCard(card_id)))
}