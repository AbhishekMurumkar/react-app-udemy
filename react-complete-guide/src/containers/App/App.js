import React from "react";
import { Component } from "react";
//all the hooks have use as prefix
// import { useState } from 'react';
// import logo from './logo.svg';
// external style sheet styling for app
// import './App.css';
// importing the above css in the form of a module
import appStyles from "./App.module.css";
// import custom component made by us
import Persons from "../../components/Persons/Persons";
import Cockpit from "../../components/Cockpit/Cockpit";

import authContext from "../../context/auth-context";
// import styled from "styled-components";
// const StyledButtonView=styled.button`
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;
//     background:${props=>props.alt?'green':'red'};
//     &:hover{
//       background-color:#${props=>props.alt?'c1f7b7':'fdd0d0'};
//       color:${props=>props.alt?'red':'green'};
//       poiter:'curosr';
//     }
// `;

// import Radium,{StyleRoot} from 'radium';
// const App = props => {
//   const [ personState,setPersonState ] = useState({
//     person: [
//       { name: 'Abhi', age: 23 },
//       { name: 'Surya', age: 22 },
//       { name: 'Srinidhi', age: 21 },
//     ]
//   });
//   const [otherState,setOtherState] = useState('some state value');
//   console.log(personState,typeof(setPersonState));
//   console.log(otherState,setOtherState);
//   const switchNameHandler = ()=>{
//     console.log('button clicked');
//     // this.state.person[2]='Abhishek'; //DONT DO THIS since state already person[2] object which is immutable
//     setPersonState({
//       person:[
//         {name:'Abhishek',age:23},
//         {name:'Nagarjuna',age:22},
//         {name:'Jeevana',age:21},
//       ]
//     });
//     setOtherState('some new state value');
//   }
//   return (
//     <div className="App">
//       <h1>Im Abhishek</h1>
//       <button onClick={switchNameHandler}>Switch name</button>
//       {/* <Person name="Abhi" age="23"/>
//        <Person name="Surya" age="22">This is from the second person component</Person> */}
//       {/* <Person name="Srinidhi" age="21" /> */}
//       <Person name={personState.person[0].name} age={personState.person[0].age} />
//       <Person name={personState.person[1].name} age={personState.person[1].age} />
//       <Person name={personState.person[2].name} age={personState.person[2].age} />
//     </div>
//   );
//   // the above html code is not really simple html but instead it is converted to react elements
//   // this is the reason why we have imported React module from 'react'
//   // thus the react elemets html code is called as JSX
//   // let temp = React.createElement('h1',null,'I\'m Abhishek');
//   // return React.createElement('div',{className:'App'},temp);
//   //thus above statements gives same-output as the code above commented
// }
class App extends Component {
    constructor(props) {
        super(props);
        console.log("Appjs cons");
        // while defining new variables or objects in class we dont need to define the type of variable used
        // states are majorly used to change the state of a variable or object internally in a class
        this.state = {
            person: [
                { name: "Abhi", age: 23 },
                { name: "Surya", age: 22 },
                { name: "Srinidhi", age: 21 },
                { name: "Srinidhi", age: 21 },
            ],
            showPersons: false,
            showCockpit: true,
            nameChangedCounter: 0,
            authenticate:false
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App js getDerivedStateFromProps", props, state);
        return state;
    }
    componentDidMount() {
        console.log("Appjs didMount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("App js shouldComponentUpdate", nextProps, nextState);
        return true;
    }
    componentDidUpdate() {
        console.log("App js componentDidUpdate");
    }
    // first method without params
    // switchNameHandler = ()=>{
    //   console.log('button clicked');
    //   // this.state.person[2]='Abhishek'; //DONT DO THIS since state already person[2] object which is immutable
    //   this.setState({
    //     person:[
    //       {name:'Abhishek',age:23},
    //       {name:'Nagarjuna',age:22},
    //       {name:'Abhshek',age:21},
    //     ]
    //   });
    // }
    //first method with params
    switchNameHandler = (newName) => {
        console.log("button clicked");
        // this.state.person[2]='Abhishek'; //DONT DO THIS since state already person[2] object which is immutable
        this.setState({
            person: [
                { name: "Abhishek", age: 23 },
                { name: "Nagarjuna", age: 22 },
                { name: newName, age: 21 },
                { name: newName, age: 19 },
            ],
        });
    };
    // code to delete a person based on an index
    deletePersonHandler = (deleteindex) => {
        console.log(deleteindex);
        // let temp = this.state.person.slice();
        let temp = [...this.state.person];
        temp.splice(deleteindex, 1);
        this.setState({ person: temp });
        // there is flaw in the above method
        // in javascript the objects and arrays are in immutable in nature
        // in statement, let temp = this.state.person; we are actually getting the pointer of persons
        // in statement, temp.splice(deleteindex,1); we are mutating the nature of the pointer /original state
        // this can lead to unpredicted splices or behaviour
        // thats why we use method slice which copies the content of the present state of pointer
        // alternatively in ES6, we use spread operator
    };
    // code to handle the change event whenever user types names in the Person.js
    nameChanger = (event, index) => {
        let temp_persons = [...this.state.person];
        temp_persons[index].name = event.target.value;
        // this.setState({ person: temp_persons })
        
        // the above method executes asynchronously where we may not get exact previous data some time
        // now we converting to synchrously
        this.setState((prevState, props) => {
            return {
                person: temp_persons,
                nameChangedCounter: prevState.nameChangedCounter + 1,
            };
        });

        // this.setState({
        //     person: [
        //         { name: 'Abhishek', age: 23 },
        //         { name: 'Nagarjuna', age: 22 },
        //         { name: 'Gagan', age: 21 },
        //         { name: event.target.value, age: 20 }
        //     ]
        // });
    };
    // method to toggle person view
    togglePersons = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        });
    };
    toggleCockpit = () => {
        this.setState({
            showCockpit: !this.state.showCockpit,
        });
    };

    loginHandler=()=>{
        this.setState({
            authenticate:true
        })
    }
    // we cannot declare the styles out of render method because whenever we do that they are treated as read
    // only objects which can be changed only while first load but not after that
    // style = {
    //     backgroundColor: 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer'
    // };
    togglePersonsView = null;

    // based on the value present
    render() {
        console.log("App js render");
        // inline styling for button
        // const style = {
        //     // backgroundColor: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        // };

        if (this.state.showPersons) {
            // this.toggleBtnClass = appStyles.toggleBtn+" "+appStyles.green;
            // style.backgroundColor='green';
            // style.color='white';
            // style[':hover']={
            //   backgroundColor:'#b6ecb6',
            //   color:'black'
            // }

            // style[':hover']={
            //   backgroundColor:'azure',
            //   color:'black'
            // };
            // this.toggleBtnClass = appStyles.toggleBtn+" "+appStyles.green;
            this.togglePersonsView = (
                <Persons
                    persons={this.state.person}
                    clicked={this.switchNameHandler}
                    changed={this.nameChanger}
                    delete={this.deletePersonHandler}
                    // isAuthenticated={this.state.auth}
                />
            );
        } else {
            // this.toggleBtnClass = appStyles.toggleBtn+" "+appStyles.red;
            // style.backgroundColor='red';
            // style.color='white';
            // style[':hover']={
            //   backgroundColor:'#f1d1d1',
            //   color:'black'
            // }
            this.togglePersonsView = null;
        }
        // console.log(style);
        // return (
        //   <StyleRoot>
        //     <div className="App">
        //       <h1 className={Classes}>I'm Abhishek</h1>
        //       <button key="b2" style={style} onClick={this.togglePersons}>Toggle Persons</button><br/><br/>
        //       {this.togglePersonsView}
        //     </div>
        //   </StyleRoot>
        // );
        return (
            // normal css styling with css import
            // <div className="App">
            // css styling with css-module as import
            <div className={appStyles.App}>
                <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
                <authContext.Provider value={{authenticate:this.state.authenticate,login:this.loginHandler}}>
                     {this.state.showCockpit ? (
                        <Cockpit
                            showPersons={this.state.showPersons}
                            persons={this.state.person.length}
                            togglePersons={this.togglePersons}
                            title={this.props.title}
                            // login={this.loginHandler}
                        />) 
                        : null
                    }
                    <button
                        key="b1"
                        onClick={() => {
                            this.switchNameHandler("Divya");
                        }}
                    >Switch name</button>
                    {/*<button key="b1" style={style} onClick={()=>{this.switchNameHandler('Divya')}}>Switch name</button>*/}
                    {this.togglePersonsView}
                </authContext.Provider>
            </div>
        );
    }
}
export default App;
// export default Radium(App);
