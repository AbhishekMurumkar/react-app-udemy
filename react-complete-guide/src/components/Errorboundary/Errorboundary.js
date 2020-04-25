import React,{Component} from 'react';

class Errorboundary extends Component{
	state={
		'error':false,
		'errorMessage':''
	}
	catchErr = (error,info)=>{
		this.setState({
			'error':true,
			'errorMessage':error
		})
	}
	render(){
		if(this.state.error){
			return <h1>Something went wrong</h1>
		}else{
			return this.props.children;
		}
	}
}
export default Errorboundary;