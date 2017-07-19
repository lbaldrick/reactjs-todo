import { TODO_ACTION_ENUM } from '../actions/TodoActions';

const INITIAL_STATE ={
    todos: [ {
            id: '1',
            title: '1',
            task: 'Task 1',
            completed: false,
            isEditing: false,
        }, {
            id: '2',
            title: '2',
            task: 'Task 2',
            completed: true,
            isEditing: false,
        }, {
            id: '3',
            title: '3',
            task: 'Task 3',
            completed: false,
            isEditing: false,
        }, {
            id: '4',
            title: '4',
            task: 'Task 4',
            completed: false,
            isEditing: false,
        },
    ],
    isAdding: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_ACTION_ENUM.ADD_TODO:
            return addTodo(action, state);
            break;
        case TODO_ACTION_ENUM.DELETE_TODO:
            return deleteTodo(action, state);
            break;
        case TODO_ACTION_ENUM.TOGGLE_TODO_STATUS:
            return toggleTodoStatus(action, state);
            break;
        case TODO_ACTION_ENUM.UPDATE_TODO:
            return updateTodo(action, state);
            break;
        case TODO_ACTION_ENUM.TOGGLE_EDIT_TODO:
            return toggleTodoEdit(action, state);
            break;
        case TODO_ACTION_ENUM.TOGGLE_ADD_TODO:
            return toggleTodoAdd(action, state);
            break;
    }

    return state;
};

const addTodo = (action, state) => {
    const stateTodos = state.todos;
    const payload = action.payload;
    const id = stateTodos.length > 0 ? stateTodos[stateTodos.length - 1].id++ : 0;
    const todos = [{
        id,
        title: payload.title,
        task: payload.task,
        completed: false,
        isEditing: false,
    }].concat(state.todos);

    return Object.assign({} , state, { todos, });
};

const deleteTodo = (action, state) => {
    const todos = state.todos.filter(todo => todo.id !== action.payload.id);

    return Object.assign({} , state, { todos, });
};

const toggleTodoStatus = (action, state) => {
    const todo = state.todos.find(todo => todo.id === action.payload.id);

    todo.completed = !todo.completed;
    const todos = [].concat(state.todos);

    return Object.assign({} , state, { todos, });
};

const updateTodo = (action, state) => {
    const todos = state.todos;
    const payload = action.payload;
    const todo = todos.find((t)=> t.id === payload.id);
    const index = todos.indexOf(todo);

    todos[index] = Object.assign( {}, todo, {
        title: payload.title,
        task: payload.task,
    });

    return Object.assign({} , state, { todos: [].concat(todos), }); ;
};

const toggleTodoEdit = (action, state) => {
    const todo = state.todos.find(todo => todo.id === action.payload.id);

    todo.isEditing = !todo.isEditing;
    const todos = [].concat(state.todos);

    return Object.assign({} , state, { todos, });
};

const toggleTodoAdd = (action, state) => {
    return Object.assign({} , state, { isAdding: !state.isAdding, } );
};



export default reducer;