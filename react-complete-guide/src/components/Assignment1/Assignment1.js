import React from 'react';
// import Component from 'react';
import { useState } from 'react';
import './Assignment1.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

let heading = 'Welcome to First Assignment';

function Assignment1() {
	// hooks can only be called inside of the function body
	let [nameState,setNameState]=useState({
		username:'Abhishek'	
	});
	let changeName=(event)=>{
		console.log("in change name");
		// changing the name of the user 
		setNameState({
			username:event.target.value
		});
	}

    return (
        <div className="Assignment1">
			<h1 className="a1-heading">{heading}</h1>
			<hr />
			<p className="a1-para">Now Testing the Internal Components</p>
			<UserInput change={changeName} default={nameState.username} />
			<UserOutput p1="this is 4-1" p2="this is 4-2" username={nameState.username} />
			<UserOutput p1="this is 3-1" p2="this is 3-2" username='user2'/>
			{<UserOutput p1="this is 2-1" p2="this is 2-2" username='user1'/>}
			{<UserOutput p1="this is 1-1" p2="this is 1-2"/>}
		</div>
    );
}

export default Assignment1;