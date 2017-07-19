import React from 'react';
import Todo from './Todo';
import { updateTodo, addTodo, deleteTodo, toggleTodoStatus, toggleTodoEdit, } from '../../redux/actions/TodoActions';
import './TodoList.css';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onShowForm: id => {
            dispatch(addTodo(id));
        },
        onDeleteTodo: id => {
            dispatch(deleteTodo(id));
        },

        onCompleteTodo: id => {
            dispatch(toggleTodoStatus(id));
        },

        onPendingTodo: id => {
            dispatch(toggleTodoStatus(id));
        },

        onUpdateTodo: (id, title, task) => {
            dispatch(updateTodo(id, title, task));
        },

        onAddTodo: (title, task) => {
            dispatch(addTodo(title, task));
        },

        toggleTodoEdit(id) {
            dispatch(toggleTodoEdit(id));
        },
    }
};

class TodoList extends React.PureComponent {

    render() {
        return <div>
            <div className="todo-list-header"> <span>Completed Tasks: { this.props.todos.filter(todo => todo.completed ).length } </span> </div>
            <div className="todo-list-header"> <span>Pending Tasks: { this.props.todos.filter(todo => !todo.completed).length } </span> </div>

            <ul className="todo-list">
                {
                    this.props.todos.map((todo) => {
                        return <li>
                            <Todo todo={ todo }
                                  toggleTodoEdit={ this.props.toggleTodoEdit }
                                  onDeleteTodo={ this.props.onDeleteTodo }
                                  onCompleteTodo={ this.props.onCompleteTodo }
                                  onPendingTodo={ this.props.onPendingTodo }
                                  onUpdateTodo={ this.props.onUpdateTodo }
                        /> </li>
                    })
                }
            </ul>
        </div>
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);