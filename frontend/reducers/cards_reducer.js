import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from '../actions/card_actions';

const CardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    console.log("card reducer action", action)
    switch (action.type) {
        case RECEIVE_CARDS:
            return action.cards
        case RECEIVE_CARD:
            nextState[action.card.id] = action.card;
            return nextState;
        case REMOVE_CARD:
            let nextStateArr = Object.keys(nextState).map(key => nextState[key]);
            let nextCard = nextStateArr.filter(card => card.id !== action.cardId);
            nextState = Object.assign({}, nextCard)
            return nextState;
        default:
            return oldState;
    };
};

export default CardsReducer;