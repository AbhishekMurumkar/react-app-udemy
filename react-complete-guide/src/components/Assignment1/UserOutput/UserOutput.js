import React,{Component} from 'react';
import './UserOutput.css';

class UserOutput extends Component{
style={
	fontSize:"25px",
	color:"#a29ee8",
};
render(){
	return(
		<div className="UserOutputDiv">
			<p style={{textAlign:"center",fontSize:"25px",padding:"5px",color:"#54c50fd4",fontWeight:"bold"}}>Welcome to UserOutput Component</p>
			<p className="p1">{this.props.p1}</p>
			<p className="p2">{this.props.p2}</p>
			<p>username : <span style={this.style}>{this.props.username}</span></p>
		</div>
	);
};
}
export default UserOutput;