import React, { Component } from 'react';

class Counter extends Component {
	constructor (props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render () {
		return (
			<div>
				<h1>Counter: { this.state.count }</h1>

				<button onClick={() => this.substract() }>Subtract 1</button>
				<button onClick={() => this.add() }>Add 1</button>

			</div>
		);
	}

	substract() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	add() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
}


export default Counter;