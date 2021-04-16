import React from 'react';
import BoardItem from './board_item';

const mappedItems = ({ boards }) => {
    const boardMap = () => (
        boards.map(board => (
            <BoardItem
                key={`board${chirp.id}`}
                board={board} />
            )
        )
    )

    const noBoards = () => (
        <li>No Boards</li>
    )

        return boards ? boardMap() : noBoards();
}

export default mappedItems;