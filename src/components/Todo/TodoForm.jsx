import React from 'react';
import './TodoForm.css';

const handleValueChange = (event, id) => {
    this[id] = event.target.value;
    event.preventDefault();
}

const TodoForm = ( { id, title, task, toggleForm, onSubmitTodo, } ) => {
    return  <div className="todo-form-section">
        <div className='todo-form-section_fields'>
            <div className='todo-form-section_fields_field'>
                <label>Title</label>
                <input type='text'
                       defaultValue={ title }
                       onChange={(event) => handleValueChange(event, 'title')}
                />
            </div>
            <div className='todo-form-section_fields_field'>
                <label>Task</label>
                <input type='text'
                       defaultValue={ task }
                       onChange={(event) => handleValueChange(event, 'task')}
                />
            </div>
            <div className='todo-form-section_fields_hide-form'>
                <button className='todo-form-section_fields_hide-form_btn'onClick={() => toggleForm(id)} >
                    Close
                </button>
            </div>
            <div className='todo-form-add-section_fields_submit-form'>
                <button className='todo-form-add-section_fields_submit-form_btn'onClick={() => {onSubmitTodo(id, this.title || title, this.task || task)}}>
                    Submit
                </button>
            </div>
        </div>
    </div>
};

export default TodoForm;