import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.handleTickToggle = this.handleTickToggle.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleCloseClick = this.handleCloseClick.bind(this);

		this.state = {
			todos: [
				{
					id: 1,
					status: true,
					title: 'Complete HLS training day 4'
				}
			],
			filter: 'all'
		};

		this.newTodoRef = React.createRef();
		this.filterRef =  React.createRef();
	}

	componentDidUpdate() {
		if (this.props.newTodo && this.props.newTodo !== this.newTodoRef.current) {
			const { id } = this.props.newTodo;

			if (id) {
				const index = this.state.todos.findIndex((todo) => todo.id === id);
				const newTodos = this.state.todos;
				newTodos[index] = { ...this.props.newTodo };
				this.setState({
					todos: newTodos
				});
			} else {
				const newTodos = this.state.todos;
				newTodos.push({
					id: uuidv4(),
					status: false,
					title: this.props.newTodo.title
				});
				this.setState({ todos: newTodos });
			}
			this.newTodoRef.current = this.props.newTodo;
		}

		if (this.props.filter && this.props.filter !== this.filterRef.current) {
			this.setState({filter: this.props.filter});
			this.filterRef.current = this.props.filter; 
		}
	}

	handleTickToggle(id) {
		const index = this.state.todos.findIndex((todo) => todo.id === id);
		const newTodos = this.state.todos;
		const todo = newTodos[index];
		newTodos[index] = { ...todo, status: !todo.status };
		this.setState({ todos: newTodos });
	}

	handleEditClick(id) {
		if (this.props.onTodoEdit) {
			const todo = this.state.todos.find((todo) => todo.id === id);
			this.props.onTodoEdit(todo);
		}
	}

	handleCloseClick(id) {
		const newTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: newTodos });
	}

	render() {
		return (
			<div className="todo-list-container">
				{this.state.filter === "active" && this.state.todos.filter((todo) => !todo.status).map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onTickToggle={this.handleTickToggle}
						onEditButtonClick={this.handleEditClick}
						onCloseButtonClick={this.handleCloseClick}
					/>
				))}
				
				{this.state.filter === "complete" && this.state.todos.filter((todo) => todo.status).map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onTickToggle={this.handleTickToggle}
						onEditButtonClick={this.handleEditClick}
						onCloseButtonClick={this.handleCloseClick}
					/>
				))}

				{this.state.filter === 'all' && this.state.todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onTickToggle={this.handleTickToggle}
						onEditButtonClick={this.handleEditClick}
						onCloseButtonClick={this.handleCloseClick}
					/>
				))}
			</div>
		);
	}
}

export default TodoList;
