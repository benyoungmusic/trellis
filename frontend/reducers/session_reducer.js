import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullSession = Object.freeze({
    currentUserId: null
});

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUserId = action.currentUser.id
            return Object.assign({}, { currentUserId })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}
