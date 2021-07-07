import React from 'react';
import CardIndexContainer from '../cards/card_index_container';
import CreateCardFormContainer from '../cards/create_card_form_container'

export default ({ list, deleteList, board_id, cards, startdrag, enterdrag, enddrag }) => {

    return (
        <li className="list-item">
            <div className="list-item-div">
                <h3 className="list-item-title">{list.title}</h3>
                <button className="delete-list-button" onClick={() => {deleteList(list.id)}}>X</button>
            </div>
            <div className="card-index-div">
                <CardIndexContainer
                    list_id={list.id}
                    board_id={board_id}
                    startdrag={startdrag}
                    enterdrag={enterdrag}
                    enddrag={enddrag}/>
                <CreateCardFormContainer
                    board_id={board_id}
                    cards={cards}
                    list_id={list.id}/>
            </div>
        </li>
    )
}