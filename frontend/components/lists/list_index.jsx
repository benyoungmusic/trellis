import React from 'react';
import ListItem from './list_item';
import CreateListFormContainer from './create_list_form_container';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CardModal from '../cards/card_modal'


class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        const tempBoardId = (this.props.match ? this.props.match.params.boardId : this.props.boardId)
        this.state = {
            board_id: tempBoardId,
            lists: this.props.lists,
            cards: this.props.cards.filter(card => card.board_id = tempBoardId),
            cardModal: this.props.cardModal,
            overlay: this.props.overlay
        }
        this.handleDeleteList = this.handleDeleteList.bind(this);

        this.dragStartCard = 0;
        this.dragCurrent = 0;
        this.dragEnd = 0;
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
    }

    componentDidMount() {
        this.props.requestLists(this.state.board_id);
        this.props.requestCardsByBoard(this.state.board_id)
    }

    handleDeleteList(listId) {
        this.props.deleteList(listId)
    }

    showModal () {
        this.setState({
            createModal: "open-modal",
            overlay: "modal-grey-area"
        }, () => {
            document.addEventListener("click", this.closeMenu)
        })
    }

    hideModal () {
        this.setState({
            createModal: "closed-modal",
            overlay: "no-overlay"
        })
    }

    handleDragStart(e, card) {
        // e.preventDefault();
        this.dragStartCard = card;
    }

    handleDragEnter(e, card) {
        e.preventDefault();
        this.dragCurrent = card;
    }

    handleDragEnd(e, card) {
        e.preventDefault();
        let listCards = this.state.cards.filter(card => card.list_id === this.dragCurrent.list_id);
        for (let i = this.dragCurrent.list_pos - 1; i < listCards.length; i++) {
            let updateCard = listCards[i];
            updateCard.list_pos += 1;
            this.props.updateCard(updateCard);
        }
        let newCard = this.dragStartCard;
        newCard.list_id = this.dragCurrent.list_id;
        newCard.list_pos = this.dragCurrent.list_pos;
        this.props.updateCard(newCard);
    }

    sortCards() {
        let listCards = this.state.cards.filter(card => card.list_id === this.dragCurrent.list_id);
        for (let i = this.dragCurrent.list_pos - 1; i < listCards.length; i++) {
            let updateCard = listCards[i];
            updateCard.list_pos += 1;
            this.props.updateCard(updateCard);
        }
    }


    handleDragEnter2(e, listPos) {
        this.dragCurrent = listPos
        let cards = this.state.cards.length ? this.state.cards : this.props.cards.filter(card => card.list_id === this.props.list_id);
        let cardsCopy = [...cards];
        let startCard = cardsCopy[this.dragStart - 1]
        cardsCopy.splice((this.dragStart - 1), 1);
        cardsCopy.splice((this.dragCurrent - 1), 0, startCard)
        this.setState({ cards: cardsCopy })
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
                                deleteList={this.handleDeleteList}
                                board_id={parseInt(this.state.board_id)}
                                cards={this.state.cards}
                                startdrag={this.handleDragStart}
                                enterdrag={this.handleDragEnter}
                                enddrag={this.handleDragEnd}/>
                            )
                        )
                    }
                    <CreateListFormContainer
                        boardId={parseInt(this.state.board_id)}
                        boardPos={Object.keys(lists).length + 1}
                    />
                </ul>
                <div className="modal-container">
                    <CardModal createModal={this.state.createModal}/>
                </div>
                <div onClick={this.hideModal}  className={this.state.overlay}>
                </div>
            </div>
        )
    }
}

export default ListIndex;