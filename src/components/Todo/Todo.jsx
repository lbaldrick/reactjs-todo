import React from 'react';
import TodoForm from './TodoForm';
import './Todo.css';

const Todo = ({ todo, toggleTodoEdit, onDeleteTodo, onCompleteTodo, onPendingTodo, onUpdateTodo, }) => {
    return  <section className="todo-details-section">
        <div className={ !todo.isEditing ? "todo-details-section-details" : "todo-details-section-details --hidden"}>
            <div className='todo-details-section-details_title'>
                <span> { todo.title } </span>
            </div>
            <div className='todo-details-section-details_task'>
                <span> { todo.task } </span>
            </div>
            <div className="todo-details-section-details_buttons">
                <div className='todo-details-section-details_buttons_edit'>
                    <button className='todo-details-section-details_buttons_edit_button' onClick={ () => toggleTodoEdit(todo.id) }>
                        Edit
                    </button>
                </div>
                <div className='todo-details-section-details_buttons_delete'>
                    <button className='todo-details-section-details_buttons_delete_button' onClick={ () => onDeleteTodo(todo.id) }>
                        Delete
                    </button>
                </div>
                <div className='todo-details-section-details_buttons_completed'>
                    <button className={!todo.completed ? "todo-details-section-details_buttons_pending_button"
                        : "todo-details-section-details_buttons_pending_button --hidden"} onClick={ () => onCompleteTodo(todo.id) }>
                        Completed
                    </button>
                </div>
                <div className='todo-details-section-details_buttons_pending'>
                    <button className={todo.completed ? "todo-details-section-details_buttons_pending_button"
                        : "todo-details-section-details_buttons_pending_button --hidden"}
                            onClick={ () => onPendingTodo(todo.id) }>
                        Pending
                    </button>
                </div>
            </div>

        </div>
        <div className={ todo.completed && !todo.isEditing ? "todo-status-completed" : "todo-status-completed --hidden"}>
            Completed
        </div>
        <div className={ !todo.completed && !todo.isEditing ? "todo-status-pending" : "todo-status-pending --hidden"}>
            Pending
        </div>
        <section className={ todo.isEditing ? "todo-details-section_form" : "todo-details-section_form --hidden" }>
           <TodoForm
                    id={ todo.id }
                    title={ todo.title }
                    task={ todo.task }
                    toggleForm={ toggleTodoEdit }
                    onSubmitTodo={ onUpdateTodo }
           />
        </section>
    </section>

};

export default Todo;