import { connect } from 'react-redux';
import { requestCard, updateCard } from '../../actions/card_actions';
import CardDetails from './card_details';

const mapStateToProps = state => ({
    currentUserId: state.session.currentUserId,
    cards: state.entities.cards
})

const mapDispatchToProps = dispatch => ({
    updateCard: card => dispatch(updateCard(card)),
    requestCard: card_id => dispatch(requestCard(card_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)