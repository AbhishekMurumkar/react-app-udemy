import React from 'react';
import {Component} from 'react';
import {useState} from 'react';
import Validation from './Validation/Validation';
import Character from './Character/Character';

const Assignment2 = ()=>{
	let rendering_component = null;
	let [setName,setNameState]=useState({
		'userText':'',
		'userTextLength':0,
	});
	let getLength = (event)=>{
		setNameState({
			'userText':event.target.value,
			'userTextLength':event.target.value.length
		})
	};
	let deleteChar = (event,index)=>{
		let temp = [...setName.userText];
		temp.splice(index,1);
		setNameState({
			'userText':temp.join(''),
			'userTextLength':temp.length
		})
	} ;

	if(setName.userTextLength > 0){
		let temp = [...setName.userText];
		rendering_component = temp.map((ch,index)=>{
			return <Character character={ch} key={index} delete={(event)=>{deleteChar(event,index)}} />
		});
	}else{
		rendering_component = null;
	}

	return(
		<div className="Assignment2">
			<p>Assignment2 paragraph is working</p>
			<label>Enter Text Here : </label>
			<input type="text" onChange={getLength} value={setName.userText}/>
			<p>Entered Text is : {setName.userText}</p>
			<p> and its Length is : {setName.userTextLength}</p>
			<Validation length={setName.userTextLength} /> 
			{rendering_component}
		</div>
	);
}

// class Assignment2 extends Component{
// 	state={
// 		userText:'',
// 		userTextLength:0
// 	};
// 	deleteChar = (event,index)=>{
// 		let temp = [...this.state.userText];
// 		temp.splice(index,1);
// 		this.setState({
// 			userText:temp.join(''),
// 			userTextLength:temp.join('').length	
// 		})
// 	};
// 	getLength = (event)=>{
// 		this.setState({
// 			userText : event.target.value,
// 			userTextLength : event.target.value.length
// 		});
// 	}
// 	rendering_component=null;
// 	render(){
// 		if(this.state.userTextLength > 0)
// 		{
// 			let temp = [...this.state.userText];
// 			this.rendering_component=temp.map((char,index)=>{
// 				return <Character character={char} key={index+1} delete={(event)=>{this.deleteChar(event,index)}} />
// 			});
// 		}else{
// 			this.rendering_component=null;
// 		}

// 	return(
// 		<div className="Assignment2">
// 			<h2>Welcome to Assignment2</h2>
// 			<label>Enter a Text Here : </label>
// 			<input type="text" onChange={this.getLength} value={this.state.userText}/>
// 			<p>User String='{this.state.userText}' & Length = {this.state.userTextLength}</p>
// 			<Validation length={this.state.userTextLength} />
// 			{this.rendering_component}
// 		</div>
// 	);		
// 	}
// }
export default Assignment2;