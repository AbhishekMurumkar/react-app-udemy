import React,{Component} from 'react';
import './UserInput.css';

class UserInput extends Component{
render(){
	return(
		<div className="UserInputDiv">
			<p>Welcome to UserInput Component</p>
			<label>Enter Text Here : <input type="text" className="user-input" spellCheck="false" value={this.props.default} onChange={this.props.change}/></label>
		</div>
	);
};
}
export default UserInput;