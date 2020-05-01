import React from 'react';
import styles from "./Cockpit.module.css";
import { useEffect } from 'react';

import {useRef} from 'react';
import authContext from "../../context/auth-context";
import {useContext} from 'react';

const Cockpit = (props) => {

	// getting the data of auth context in the functional component via useContext hook
	const cntxt=useContext(authContext);

	//creating reference to button(toggle)
	const toggleBtnRef = useRef(null);
	// now for experimentation we are automatically clicking the button to show how to perform dom operations in react

	// for that we need to check whether the toggleBtnRef actually has a correct ref or not , in our case it should not be null.  This is where the useEffect with return() with empty array as parameter comes in hand since we have click the button only after the completion of the render() that too it should be clicked only one 
	useEffect(()=>{
		console.log("clicking toggle button");
		toggleBtnRef.current.click();
	},[]);

	let toggleBtnClass = null;
	if (props.showPersons) {
		toggleBtnClass = styles.toggleBtn + " " + styles.green;
	} else {
		toggleBtnClass = styles.toggleBtn + " " + styles.red;
	}
	//then changing the h1 tag style
	let Classes = [];
	if (props.persons <= 2) {
		Classes.push(styles.red);
	}
	if (props.persons <= 1) {
		Classes.push(styles.bold);
	}
	Classes = Classes.join(' ');

	// useEffect(()=>{
	// 	console.log('Cockpit js use effect - 1');
	// 	setTimeout(()=>{
	// 		alert("Alert from useEffect - 1");
	// 	},1500)
	// 	// thus the cleaning up of the code can be done from the below return anonymous function
	// 	// To Be precise it runs before mainEffect but after first render cycle
	// 	// moreover the execution of return function depends on the variables sent in the last arrar
	// 	return ()=>{
	// 		console.log('Cockpit.js cleaning up code of useEffect - 1');
	// 	}
	// },[props.persons]);
	// thus in the above method the useEffect only executes whenever there is change in state of persons
	
	// notice that in below useEffect we dont have any conditional variables to check
	// every time this is executed where
	// first return function is executed first than the useEffect code , just like explained above
	// this is mainly useful when we need to re-render component to default view/property whenever it changes
	useEffect(()=>{
		console.log('Cockpit js use effect - 3');
		return ()=>{
			console.log('Cockpit.js 3rd useEffect cleaning up code');
		}
	});

	useEffect(()=>{
		console.log('Cockpit js use effect - 2');
		const timer = setTimeout(()=>{
			// alert("Alert from useEffect - 2");
		},1500);
		return ()=>{
			clearTimeout(timer);
			// here we are removing the timeout from the useEffect whenever the component un mounts
			// we are doing so because if alert is still not made and user click to toggle the view
			// then there is no need to still show the alert , hence we cancelled the alert by clearing the timeout timer

			// this is best example of cleaning components

			console.log('Cockpit.js cleaning up code of useEffect - 2');
		}
		// the above return function is only executed when the component is un - mounted
	},[]);
	// thus in the above method the useEffect only executes for the first time / whenever dependency changes

	return (
		<div className={styles.Cockpit}>
			<h1 className={Classes}>{props.title}</h1>
			{/*<button key="b2" style={style} onClick={this.togglePersons}>Toggle Persons</button><br/><br/>*/}
			<button key="b2" ref={toggleBtnRef} className={toggleBtnClass} onClick={props.togglePersons}>Toggle Persons</button>
			<br /><br />
			{/*<button onClick={props.login}>Login</button>*/}
			{/* Performing the above jsx with context */}
			{/*<authContext.Consumer>
				{(context)=><button onClick={context.login}>Login</button>}
			</authContext.Consumer>*/}
			{/* Performing the above jsx with context hook */}
			<button onClick={cntxt.login}>Login</button>
			{ /*<StyledButtonView alt={this.state.showPersons} onClick={this.togglePersons}>Toggle Persons</StyledButtonView>*/}
			<br /> <br />
			{/*<Person name="Abhi" age="23" />*/}
			{/*<Person name="Surya" age="22">This is from the second person component</Person> */}
			{/*<Person name="Srinidhi" age="21" /> */}
			{/*<Person name={this.state.person[0].name} age={this.state.person[0].age} onClick={this.switchNameHandler} />*/}
			{/*<Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this,'Rahul')} />*/}
			{/*<Person name={this.state.person[2].name} age={this.state.person[2].age} />*/}
			{/* duplicated above person to show the event working */}
			{/*<Person name={this.state.person[3].name} age={this.state.person[3].age} changed={this.nameChanger} />*/}
			{/*this.state.person.map((eachperson,index)=>{
                    return <Errorboundary key={index}>
                                <Person 
                                  name={eachperson.name} 
                                  age={eachperson.age}
                                  click={this.switchNameHandler.bind(this,"New Name for user")} 
                                  changed={(event)=>{this.nameChanger(event,index)}}
                                  delete={this.deletePersonHandler.bind(this,index)}
                                  index={index+1}
                                />
                            </Errorboundary>
                })*/}

		</div>
	);
}
// export default Cockpit;
export default React.memo(Cockpit);