import React from 'react';
import ListItem from './list_item';
import CreateListFormContainer from './create_list_form_container';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            boardId: this.props.match.params.boardId
        }
    }

    componentDidMount() {
        this.props.requestLists(this.state.boardId);
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
                                list={list}/>
                            )
                        )
                    }
                    <CreateListFormContainer
                        boardId={this.state.boardId}
                        boardPos={Object.keys(lists).length + 1}
                    />
                </ul>
            </div>
        )
    }
}

export default ListIndex;