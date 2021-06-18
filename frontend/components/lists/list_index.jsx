import React from 'react';
import ListItem from './list_item';
import CreateListFormContainer from './create_list_form_container';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board_id: this.props.match.params.boardId,
            lists: this.props.lists
        }
        console.log(this.state.board_id);

        this.handleDeleteList = this.handleDeleteList.bind(this);
    }

    componentDidMount() {
        console.log("didmount")
        this.props.requestLists(this.state.board_id);
    }

    handleDeleteList(listId) {
        this.props.deleteList(listId)
    }

    render() {
        const { lists } = this.props;
        return (
            <div className="board-page-div">
                <div className="lists-navbar">
                    <h1 className="lists-navbar-trellis">Trellis</h1>
                    <Link className="lists-navbar-logout" onClick={this.props.logout} to="/">Log Out</Link>
                    {/* <button className="lists-navbar-logout" onClick={handleLogout()}>Log Out</button> */}
                </div>
                <ul className="list-list">
                    {
                        lists.map(list => (
                            <ListItem
                                key={`list${list.id}`}
                                list={list}
                                deleteList={this.handleDeleteList}/>
                            )
                        )
                    }
                    <CreateListFormContainer
                        boardId={parseInt(this.state.board_id)}
                        boardPos={Object.keys(lists).length + 1}
                    />
                </ul>
            </div>
        )
    }
}

export default ListIndex;