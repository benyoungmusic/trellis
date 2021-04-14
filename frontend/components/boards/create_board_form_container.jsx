import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import CreateBoardForm from './create_board_form';

const mapStateToProps = state => ({
    board: {
        title: '',
        author_id: state.session.currentUserId
    }
})

const mapDispatchToProps = dispatch => ({
    submitBoard: board => dispatch(createBoard(board))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm)