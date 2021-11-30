import React, { Component } from 'react';
import clsx from 'clsx';

class TodoItem extends Component {
	constructor(props) {
		super(props);

		this.handleTickToggle = this.handleTickToggle.bind(this);
		this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
		this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
	}

	handleTickToggle() {
		if (this.props.onTickToggle) {
			this.props.onTickToggle(this.props.todo.id);
		}
	}

	handleEditButtonClick() {
		if (this.props.onEditButtonClick) {
			this.props.onEditButtonClick(this.props.todo.id);
		}
	}

	handleCloseButtonClick() {
		if (this.props.onCloseButtonClick) {
			this.props.onCloseButtonClick(this.props.todo.id);
		}
	}

	render() {
		return (
			<div className="todo-item-container">
				<a href="#" className="todo-item-toggle">
					<img
						onClick={this.handleTickToggle}
						src={this.props.todo.status ? './assets/green-tick.svg' : './assets/black-tick.svg'}
						alt="tick"
					/>
				</a>
				<div
					className={clsx('todo-item-content', {
						completed: this.props.todo.status
					})}
				>
					{this.props.todo.title}
				</div>
				<div className="todo-item-options">
					<a href="#" className="icon-btn">
						<img onClick={this.handleEditButtonClick} src="./assets/edit.svg" alt="edit" />
					</a>
					<a href="#" className="icon-btn">
						<img onClick={this.handleCloseButtonClick} src="./assets/delete.svg" alt="close" />
					</a>
				</div>
			</div>
		);
	}
}

export default TodoItem;
