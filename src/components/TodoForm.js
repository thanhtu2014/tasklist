import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChage = this.handleTitleChage.bind(this);

		this.state = {
			todoData: null
		};

		this.todoEditRef = React.createRef();
		this.inputRef = React.createRef();
	}

	componentDidUpdate() {
		if (this.props.todoEdit && this.props.todoEdit !== this.todoEditRef.current) {
			this.setState({ todoData: this.props.todoEdit });
			this.todoEditRef.current = this.props.todoEdit;
		}
		this.inputRef.current.focus();
	}

	validateForm(formValues) {
		const { title } = formValues;
		
		// handle return true if form is error.
		if (title === '') {
			return true;
		}
		return false;
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.props.onFormSubmit) {
			if (!this.validateForm(this.state.todoData)) {
				this.props.onFormSubmit(this.state.todoData);
			}
		}
		
		this.setState({
			todoData: {
				title: ''
			}
		});
	}

	handleTitleChage(event) {
		this.setState({
			todoData: {
				...this.state.todoData,
				title: event.target.value
			}
		});
	}
	
	render() {
		return (
			<div className="todo-form-container">
				<form onSubmit={this.handleSubmit}>
					<input
						ref={this.inputRef}
						type="text"
						placeholder="What need to be done?"
						value={this.state.todoData?.title || ''}
						onChange={this.handleTitleChage}
					/>
				</form>
			</div>
		);
	}
}

export default TodoForm;
