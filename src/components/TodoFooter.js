import React, { Component } from 'react';
import clsx from 'clsx';

class TodoFooter extends Component {
	constructor(props) {
		super(props);

		this.handleAllClick = this.handleAllClick.bind(this);
		this.handleActiveCLick = this.handleActiveCLick.bind(this);
		this.handleCompleteClick = this.handleCompleteClick.bind(this);

		this.state = {
			filter: 'all', 
		}
	}

	handleFilterTodo() {
		if (this.props.onFilterTodo) {
			this.props.onFilterTodo(this.state.filter);
		}
	}

	handleAllClick(id) {
		this.setState({
			filter : 'all', 
		});
		this.handleFilterTodo();
	}

	handleActiveCLick() {
		this.setState({
			filter : 'active', 
		  });
		this.handleFilterTodo();
	}

	handleCompleteClick() {
		this.setState({
			filter : 'complete', 
		  });
		this.handleFilterTodo();
	}

	render() {
		return (
			<div className="todo-footer-container">
				<div className="todo-count"> items left</div>
				<div className="todo-menus">
					<a 
						href="#" 
						onClick= {this.handleAllClick}
						className={clsx({
							'active': this.state.filter === 'all',
						})}

					>All</a>
					<a 
						href="#" 
						onClick= {this.handleActiveCLick}
						className={clsx({
							'active': this.state.filter === 'active',
						})}
					>Active</a>
					<a 
						href="#" 
						onClick= {this.handleCompleteClick}
						className={clsx({
							'active': this.state.filter === 'complete',
						})}
					>
						Complete</a>
				</div>
			</div>
		);
	}
}	
export default TodoFooter;
