import React, { Component } from 'react';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TaskList extends Component {
	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleTodoEdit = this.handleTodoEdit.bind(this);
		this.handleFilterTodo = this.handleFilterTodo.bind(this);
		
		this.state = {
			todoData: null,
			todoEdit: '',
			filter: 'all'
		};
	}

	handleFormSubmit(todoData) {
		this.setState({ todoData });
	}

	handleTodoEdit(todoEdit) {
		this.setState({ todoEdit });
	}

	handleFilterTodo(filter) {
		this.setState({ filter });
	}

	render() {
		return (
			<div className="app-container">
				<div className="todo-container">
					<TodoForm todoEdit={this.state.todoEdit} onFormSubmit={this.handleFormSubmit}/>
					<TodoList filter= {this.state.filter} newTodo={this.state.todoData} onTodoEdit={this.handleTodoEdit}/>
					<TodoFooter onFilterTodo = {this.handleFilterTodo}/>
				</div>
			</div>
		);
	}
}

export default TaskList;
