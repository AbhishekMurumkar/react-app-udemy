import React, { Component } from 'react';
// import "./Person.css";
import personStyles from "./Person.module.css";
import trash from "./trash.png";
import Aux from "../../../higher-order-components/Auxiliary";
// import WithClass from "../../../higher-order-components/WithClass";
// import styled from "styled-components";
// import Radium from 'radium';

// this is not a component but simple javascript import
import withwrapper from "../../../higher-order-components/withwrapper";

import PropTypes from "prop-types";
import authContext from "../../../context/auth-context";



// the css written in between the backticks are now applied to the div
// here there is no need to specify class or id names , styled lib will check css present in those backticks and updates them
//always styled components return you respective react component as your build , hence we can integarte them into app as
// const StyledRoot = styled.div`
//     backgroundColor:#009;
//     padding:20px;
//     color:blue;
//     border:1px dotted violet;
//     width:50%;
//     display:inline-block;
//     margin: 20px 5px;

//     &:hover{
//         background-color:#caf3ca;
//         color:#c94041;
//         poiter:'curosr';
//     }
//     @media screen only and (min-width: 1024px){
//         width:850px;
//     }
// `;

// React component is just a function that returns a JSX
// ES6
// person is smaller since all function names does
// const person = ()=>{
//     return(
//         <div>
//             <p>This is person component</p>
//             <p>I am X and I am {Math.floor(Math.random()*30)} years old</p>        
//         </div>
//     );
// }
// creating a component with props
// const person = (props) => {
class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType=authContext;

    componentDidMount(){
        // while entire component is loaded we are trying to focus a input of latest component
        // document.querySelector("input").focus();
        // the above dom focus the first one only thus it get only one element

        // this inputElement is the reference on input field and it is updated the number of times this component is loaded to get data of latest component
        // this.inputElement.focus();
        console.log("showing the content of the created reference");
        console.log(this.inputElementRef);
        this.inputElementRef.current.focus();
        //refs only work in class based components since we are using it with this keyword
        console.log("context=");console.log(this.context);
    }

    render() {
        console.log('Person -' + this.props.index + " is rendering..");
        // const style = {
        //     '@media only screen and (min-width: 1024px)': {
        //         width: "750px"
        //     },
        //     '@media only screen and (min-width: 940px) and (max-width: 1023px)': {
        //         width: "550px"
        //     }
        // };
        // let rand =  Math.random();
        // if(rand > 0.7){
        //     throw new Error('Something went wrong');        
        // }
        // return (
        //     // <div className="Person" style={style}>
        //     <div className={personStyles.Person}>
        //         {/*<StyledRoot>*/}
        //         <p>Person Component Works - {this.props.index}</p>
        //         <h2 onClick={this.props.click} > Hello, I am {this.props.name} and I am {this.props.age} years old </h2>
        //         <p> {this.props.children} </p>
        //         <label> Enter Dynamic Name Here: </label>
        //         <input type="text" value={this.props.name} onChange={this.props.changed} />
        //         <p onClick={this.props.delete}>
        //             <img src={trash} alt={"img not found"} width="75px" height="75px" style={{ cursor: "pointer" }} />
        //         </p>
        //         {/*</StyledRoot >*/}
        //     </div>
        // );

        // Rendering the Adjacent JSX Elements i.e, build JSX without root and multiple components
        //step 1:
        // return[
        //     <p key="0">Person Component Works - {this.props.index}</p>,            
        //     <h2 key="1" onClick={this.props.click} > Hello, I am {this.props.name} and I am {this.props.age} years old </h2>,
        //     <p key="2"> {this.props.children} </p>,
        //     <label key="3"> Enter Dynamic Name Here: </label>,
        //     <input key="4" type="text" value={this.props.name} onChange={this.props.changed} />,
        //     <p key="5" onClick={this.props.delete}>
        //         <img key="6" src={trash} alt={"img not found"} width="75px" height="75px" style={{ cursor: "pointer" }} />
        //     </p>
        // ];


        // step 2:
        // instead of WithClass we can also use Aux without classname
        // return (
        //     // <div className="Person" style={style}>
        //     <WithClass classes={personStyles.Person}>
        //         {/*<StyledRoot>*/}
        //         <p>Person Component Works - {this.props.index}</p>
        //         <h2 onClick={this.props.click} > Hello, I am {this.props.name} and I am {this.props.age} years old </h2>
        //         <p> {this.props.children} </p>
        //         <label> Enter Dynamic Name Here: </label>
        //         <input type="text" value={this.props.name} onChange={this.props.changed} />
        //         <p onClick={this.props.delete}>
        //             <img src={trash} alt={"img not found"} width="75px" height="75px" style={{ cursor: "pointer" }} />
        //         </p>
        //         {/*</StyledRoot >*/}
        //     </WithClass>
        // );

        // //step 3:
        // return (
        //     // <div className="Person" style={style}>
        //     <React.Fragment>
        //         {/*<StyledRoot>*/}
        //         <p>Person Component Works - {this.props.index}</p>
        //         <h2 onClick={this.props.click} > Hello, I am {this.props.name} and I am {this.props.age} years old </h2>
        //         <p> {this.props.children} </p>
        //         <label> Enter Dynamic Name Here: </label>
        //         <input type="text" value={this.props.name} onChange={this.props.changed} />
        //         <p onClick={this.props.delete}>
        //             <img src={trash} alt={"img not found"} width="75px" height="75px" style={{ cursor: "pointer" }} />
        //         </p>
        //         {/*</StyledRoot >*/}
        //     </React.Fragment>
        // );

        //step 4:
        return (
            // <div className="Person" style={style}>
            <Aux>
                {/*<StyledRoot>*/}
                <p>Person Component Works - {this.props.index}</p>
                <h2 onClick={this.props.click} > Hello, I am {this.props.name} and I am {this.props.age} years old </h2>
                <p> {this.props.children} </p>
                <label> Enter Dynamic Name Here: </label>
                {/* creating a ref with an anonymnous function */}
                {/*<input ref={(input)=>{this.inputElement = input}}type="text" value={this.props.name} onChange={this.props.changed} />*/}
                {/* creating a ref with a react method from constructor */}
                <input ref={this.inputElementRef}type="text" value={this.props.name} onChange={this.props.changed} />
                <p onClick={this.props.delete}>
                    <img src={trash} alt={"img not found"} width="75px" height="75px" style={{ cursor: "pointer" }} />
                </p>
                {/*this.props.isAuth    ?
                        <p>Authenticated</p>
                                       :
                        <p>Please Login</p>
                */}
                {/* Performing the above operation with contexts **/}
                {/*<authContext.Consumer>
                    {
                        (context)=> context.authenticate ? <p>Authenticated</p> : <p>Please Login</p>
                    }
                </authContext.Consumer>*/}
                {/* Implementing static context*/}
                {(this.context.authenticate)?<p>Authenticated</p> : <p>Please Login</p>}
                {/*</StyledRoot >*/}
            </Aux>
        );
    }
}
// export default Person;
// export default Radium(person);

//setting the prop types for component
Person.propTypes={
    click : PropTypes.func,
    name : PropTypes.string,
    age: PropTypes.number,
    changed : PropTypes.func
};

//only used for render step -4
export default withwrapper(Person,personStyles.Person);