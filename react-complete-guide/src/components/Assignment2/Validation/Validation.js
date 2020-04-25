import React from 'react';
import {Component} from 'react';

class Validation extends Component{
	rendering_component = null;

	render(){
		switch (true) {
			case this.props.length==0:
				this.rendering_component=(<h2 style={{color:"brown"}}>Please Enter A Value in Textfield</h2>);
				break;

			case 5> this.props.length:
				this.rendering_component=(<h2 style={{color:"cyan"}}>Looks like given string is too small</h2>);
				break;

			case 5<=this.props.length && this.props.length<12:
				this.rendering_component=(<h1 style={{color:"green"}}>Looks like given string is good</h1>);
				break;

			case this.props.length>12:
				this.rendering_component=(<h2 style={{color:"red"}}>Looks like given string is too big</h2>);
				break;
			default:
				this.rendering_component=null;break;
		}
		return(
			<div>
				<p>Validation Component works</p>
				{this.rendering_component}
			</div>
		);
	}
}
export default Validation;