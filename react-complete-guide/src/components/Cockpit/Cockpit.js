import React from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props)=>{
	let toggleBtnClass = null;
	if(props.showPersons){
	    toggleBtnClass = styles.toggleBtn+" "+styles.green;
	}else{
	    toggleBtnClass = styles.toggleBtn+" "+styles.red;
	}
	//then changing the h1 tag style
	let Classes=[];
	if(props.persons<=2){
  		Classes.push(styles.red);
	}
	if(props.persons<=1){
  		Classes.push(styles.bold);
	}
	Classes=Classes.join(' ');

	return(
	    <div className={styles.Cockpit}>
		    <h1 className={Classes}>{props.title}</h1> 
			{/*<button key="b2" style={style} onClick={this.togglePersons}>Toggle Persons</button><br/><br/>*/ }
		    <button key="b2" className={toggleBtnClass} onClick={props.togglePersons}>Toggle Persons</button> 
		    <br/><br/> 
		    { /*<StyledButtonView alt={this.state.showPersons} onClick={this.togglePersons}>Toggle Persons</StyledButtonView>*/ }
		    <br/> <br/>
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
export default Cockpit;