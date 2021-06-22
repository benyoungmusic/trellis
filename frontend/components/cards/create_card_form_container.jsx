import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import CreateCardForm from './create_card_form';

const mapStateToProps = state => ({
    card: {
        title: '',
        author_id: state.session.currentUserId,
    },
    cards: Object.keys(state.entities.cards).map(key => state.entities.cards[key])
})

const mapDispatchToProps = dispatch => ({
    submitCard: card => dispatch(createCard(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardForm)