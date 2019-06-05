import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			error: false,
		};

		this.decrementCounter = this.decrementCounter.bind(this);
		this.incrementCounter = this.incrementCounter.bind(this);
	}

	decrementCounter() {
		if (this.state.counter === 0) {
			this.setState({ error: true });
		} else {
			this.setState({ counter: this.state.counter - 1 });
		}
	}

	incrementCounter() {
		if (this.state.error) {
			this.setState({ error: false });
		}
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		// determine whether error is hidden based on state
		const errorClass = this.state.error ? '' : 'hidden';

		return (
			<div data-test="component-app">
				<h1 data-test="counter-display">{this.state.counter}</h1>
				<div data-test="error-message" className={`error ${errorClass}`}>
					The counter cannot go below 0
				</div>
				<button className="addBtn" data-test="increment-button" onClick={this.incrementCounter}>
					+
				</button>
				<button className="minusBtn" data-test="decrement-button" onClick={this.decrementCounter}>
					-
				</button>
			</div>
		);
	}
}

export default App;
