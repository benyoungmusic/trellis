export const fetchCardsByList = list_id => (
    $.ajax({
        method: 'GET',
        url: `api/cards`,
        data: { list_id: list_id }
    })
);

export const fetchCardsByBoard = board_id => (
    $.ajax({
        method: 'GET',
        url: `api/cards`,
        data: { board_id: board_id }
    })
);

export const fetchCard = cardId => {
    return $.ajax({
        url: `/api/cards/${cardId}`,
        method: 'GET'
    });
};

export const createCard = card => {
    return $.ajax({
        url: '/api/cards/',
        method: 'POST',
        data: { card: card }
    });
};

export const updateCard = card => {
    return $.ajax({
        url: `/api/cards/${card.id}`,
        method: 'PATCH',
        data: { card: card }
    });
};

export const deleteCard = cardId => {
    return $.ajax({
        url: `/api/cards/${cardId}`,
        method: 'DELETE'
    });
};