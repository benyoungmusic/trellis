import React from 'react';

export default ({ list, deleteList }) => {

    return (
        <li className="list-item">
            <h3 className="list-item-title">{list.title}</h3>
            <button className="delete-list-button" onClick={() => {deleteList(list.id)}}>X</button>
        </li>
    )
}