import React, { Component } from 'react';

class Course extends Component {
    state={
        title:''
    }
    loadQuery(){
        const query= [...new URLSearchParams(this.props.location.search)]
        console.log(query)
        //to prevent infinite loop
        if(this.state.title!==query[0][1])
        {
            this.setState({title:query[0][1]})        
        }
    }
    componentDidMount(){
        this.loadQuery()
    }
    componentDidUpdate(){
        this.loadQuery()
    }
    render () {
        // console.log(this.props)
        return (
            <div>
                {/* <h1>{this.props.match.params.courseTitle}</h1> */}
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;