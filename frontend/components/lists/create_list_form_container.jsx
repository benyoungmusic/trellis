import { connect } from 'react-redux';
import { createList, requestLists } from '../../actions/list_actions';
import CreateListForm from './create_list_form';



const mapStateToProps = state => ({
    list: {
        title: '',
        author_id: state.session.currentUserId,
    },
    lists: Object.keys(state.entities.lists).map(key => state.entities.lists[key]),
})

const mapDispatchToProps = dispatch => ({
    requestLists: boardId => dispatch(requestLists(boardId)),
    submitList: list => dispatch(createList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateListForm)