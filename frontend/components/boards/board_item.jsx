import React from 'react';
import { Link } from 'react-router-dom';

export default ({ board }) => {
    return (
        <li>
            <Link to={`/board/${board.id}`}
            className="board-item"
            >{board.title}</Link>
        </li>
    )
}