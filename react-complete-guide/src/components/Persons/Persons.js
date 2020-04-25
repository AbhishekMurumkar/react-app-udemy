// creating functional component because we dont need of states here
import React, { Component } from 'react';
import Person from './Person/Person';
import Errorboundary from "../Errorboundary/Errorboundary";
// import App from "../../containers/App/App";
// here we did not used {} for function body since in ES6 if there is only statement we can directly content
// const Persons = (props) => {
class Persons extends Component {
	constructor(props){
		super(props);
		console.log('Person.js constructor',props);
	}
	static getDerivedStateFromProps(props,state){
		console.log('Persons.js getDerivedStateFromProps',props,state);
	}
	shouldComponentUpdate(newProps,newState){
		console.log('Persons js shouldComponentUpdate',newProps,newState);
		return true;
	}
	getSnapshotBeforeUpdate(prevProps,prevState){
		console.log('Persons.js getSnapshotBeforeUpdate',prevProps,prevState);
		return {message:"Snapshot Received!"};
	}
	componentDidUpdate(prevProps,prevState,snapshot){
		console.log(snapshot);
		console.log('Personsjs componentDidUpdate');
	}
    render() {
        console.log('Persons.js render');
        return this.props.persons.map(
            (eachperson, index) => {
                return <Errorboundary key={index}>
	                    <Person 
	                      name={eachperson.name} 
	                      age={eachperson.age}
	                      click={this.props.clicked.bind(this.props,"New Name for user")} 
	                      changed={(event)=>{this.props.changed(event,index)}}
	                      delete={this.props.delete.bind(this.props,index)}
	                      index={index+1}
	                    />
                	</Errorboundary>
            })
    }
};
export default Persons;