export const fetchLists = board_id => (
    $.ajax({
        method: 'GET',
        url: `api/lists`,
        data: { board_id: board_id }
    })
);

export const fetchList = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: 'GET'
    });
};

export const createList = list => {
    return $.ajax({
        url: '/api/lists/',
        method: 'POST',
        data: { list: list }
    });
};

export const updateList = list => {
    return $.ajax({
        url: `/api/lists/${list.id}`,
        method: 'PATCH',
        data: { list: list }
    });
};

export const deleteList = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: 'DELETE'
    });
};