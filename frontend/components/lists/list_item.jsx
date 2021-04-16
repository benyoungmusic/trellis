import React from 'react';

export default ({ list }) => {
    return (
        <li className="list-item">
            <h3 className="list-item-title">{list.title}</h3>
        </li>
    )
}