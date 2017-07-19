const TODO_ACTION_ENUM = {
    UPDATE_TODO: 'UPDATE_TODO',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO_STATUS: 'CHANGE_TODO_STATUS',
    TOGGLE_EDIT_TODO: 'TOGGLE_EDIT_TODO',
    TOGGLE_ADD_TODO: 'TOGGLE_ADD_TODO',
};

function updateTodo(id, title, task) {
    return {
        type: TODO_ACTION_ENUM.UPDATE_TODO,
        payload: { id, title, task, },
    };
}

function addTodo(title, task) {
    return {
        type: TODO_ACTION_ENUM.ADD_TODO,
        payload: { title, task, },
    };
}

function deleteTodo(id) {
    return {
        type: TODO_ACTION_ENUM.DELETE_TODO,
        payload: { id },
    };
}

function toggleTodoStatus(id) {
    return {
        type: TODO_ACTION_ENUM.TOGGLE_TODO_STATUS,
        payload: { id },
    };
}

function toggleTodoEdit(id) {
    return {
        type: TODO_ACTION_ENUM.TOGGLE_EDIT_TODO,
        payload: { id },
    };
}

function toggleTodoAdd(title, task) {
    return {
        type: TODO_ACTION_ENUM.TOGGLE_ADD_TODO,
        payload: { title, task },
    };
}

export { TODO_ACTION_ENUM, updateTodo, addTodo, deleteTodo, toggleTodoStatus, toggleTodoEdit, toggleTodoAdd, }