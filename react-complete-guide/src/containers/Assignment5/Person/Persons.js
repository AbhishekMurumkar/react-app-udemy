import React, { Component } from 'react';
import Person from '../../../components/Assignment5/Person/Person';
import AddPerson from '../../../components/Assignment5/AddPerson/AddPerson';
// now connecting to store
import { connect } from "react-redux";
import * as ActionNames from "../MyStore/Assignment5Actions";

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render() {
        return (
            <div>
                {/* <AddPerson personAdded={this.personAddedHandler} /> */}
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        // clicked={this.personDeletedHandler.bind(this,person.id)} />
                        clicked={this.props.personDeletedHandler.bind(this,person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
};
const mapDisptachToProps = (dispatch) => {
    return {
        personAddedHandler: (data) => {
            console.log("adding");
            let person = {
                id: Math.random(), // not really unique but good enough here!
                name: data.name,
                age: data.age
            }
            dispatch({
                type:ActionNames.ADD,
                payload:{
                    person:person
                }
            })
        },
        personDeletedHandler: (personId) => {
            dispatch({
                type:ActionNames.SUB,
                payload:personId
            })
        },
    }
};

export default connect(mapStateToProps, mapDisptachToProps)(Persons);