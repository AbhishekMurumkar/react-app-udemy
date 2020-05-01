// creating functional component because we dont need of states here
import React from 'react';
// import { Component } from 'react';
import { PureComponent } from 'react';
import Person from './Person/Person';
import Errorboundary from "../Errorboundary/Errorboundary";
// import App from "../../containers/App/App";
// here we did not used {} for function body since in ES6 if there is only statement we can directly content
// const Persons = (props) => {
class Persons extends PureComponent {

	constructor(props) {
		super(props);
		console.log('Person.js constructor', props);
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Persons.js getDerivedStateFromProps', props, state);
		return true;
	}

	// shouldComponentUpdate(newProps, newState) {
	// 	console.log('Persons js shouldComponentUpdate', newProps, newState);
	// 	// now we are checking if the properties and state has any changes , if not we will not update them from current props and state
	// 	if (newProps.persons !== this.props.persons || newProps.clicked !== this.props.clicked || newProps.changed !== this.props.changed) {
	// 		//hence we are checking current persons pointer and new persons pointer are different are not
	// 		//we are checking pointer since arrays are treated as pointers in js
	// 		//hence even though the value changes pointer remains the same 
	// 		// that is why in our App.js we have given new pointer location on state change by using the spread operator
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Persons.js getSnapshotBeforeUpdate', prevProps, prevState);
		return { message: "Snapshot Received!" };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(snapshot);
		console.log('Personsjs componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Persons.js componentWillUnmount');
	}

	render() {
		console.log('Persons.js render');
		return this.props.persons.map(
			(eachperson, index) => {
				return <Errorboundary key={index}>
					<Person
						name={eachperson.name}
						age={eachperson.age}
						click={this.props.clicked.bind(this.props, "New Name for user")}
						changed={(event) => { this.props.changed(event, index) }}
						delete={this.props.delete.bind(this.props, index)}
						index={index + 1}
						// isAuth={this.props.isAuthenticated}
					/>
				</Errorboundary>
			})
	}
};
export default Persons;