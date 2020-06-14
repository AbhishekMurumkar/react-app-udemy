import React, { Component } from 'react';
import './AddPerson.css';
// adding state to get user inputs and then to add person


// const addPerson = (props) => (
//     <div className="AddPerson">
//         <input type="text" name="name" placeholder="Enter Name"/>
//         <input type="number" name="age"placeholder="Enter Age"/>
//         <button onClick={props.personAdded}>Add Person</button>
//     </div>
// );
// export default addPerson;

class AddPerson extends Component{
    //setting up local ui state
    state={
        name:'',
        age:0
    }

    setNameHandler = (event)=>{
        this.setState({name:event.target.value});
    };
    setAgeHandler  = (event)=>{
        this.setState({age:event.target.value});
    };
    render(){
        return(
            <div className="AddPerson">
                <input type="text" name="name" placeholder="Enter Name" onChange={this.setNameHandler} value={this.state.name}/>
                <input type="number" name="age"placeholder="Enter Age" onChange={this.setAgeHandler} value={this.state.age}/>
                <button onClick={this.props.personAdded.bind(this,this.state)}>Add Person</button>
            </div>
        );
    }
}
export default AddPerson;