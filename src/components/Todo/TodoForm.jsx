import React from 'react';
import './TodoForm.css';

class TodoForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            task: props.task,
        };
    }

    handleValueChange(event, id) {
        this.setState(Object.assign({}, this.state, { [id]: event.target.value }));
        event.preventDefault();
    }

    render() {
        return  <div className="todo-form-section">
            <div className='todo-form-section_fields'>
                <div className='todo-form-section_fields_field'>
                    <label>Title</label>
                    <input type='text'
                           defaultValue={ this.state.title }
                           onChange={(event) => this.handleValueChange(event, 'title')}
                    />
                </div>
                <div className='todo-form-section_fields_field'>
                    <label>Task</label>
                    <input type='text'
                           defaultValue={ this.state.task }
                           onChange={(event) => this.handleValueChange(event, 'task')}
                    />
                </div>
                <div className='todo-form-section_fields_hide-form'>
                    <button className='todo-form-section_fields_hide-form_btn'onClick={() => this.props.toggleForm(this.props.id)} >
                        Close
                    </button>
                </div>
                <div className='todo-form-add-section_fields_submit-form'>
                    <button className='todo-form-add-section_fields_submit-form_btn'onClick={() => { this.props.onSubmitTodo(this.props.id, this.state.title, this.state.task)}}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    }

};

export default TodoForm;