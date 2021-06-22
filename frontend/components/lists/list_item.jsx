import React from 'react';
import CardIndexContainer from '../cards/card_index_container';
import CreateCardFormContainer from '../cards/create_card_form_container'

export default ({ list, deleteList, board_id, cards }) => {

    return (
        <li className="list-item">
            <h3 className="list-item-title">{list.title}</h3>
            <button className="delete-list-button" onClick={() => {deleteList(list.id)}}>X</button>
            <CardIndexContainer
                list_id={list.id}
                board_id={board_id}
                cards={cards}/>
            <CreateCardFormContainer
                board_id={board_id}
                cards={cards}
                list_id={list.id}/>
        </li>
    )
}