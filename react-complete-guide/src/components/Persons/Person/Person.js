import React,{Component} from 'react';
// import "./Person.css";
import personStyles from "./Person.module.css";
import trash from "./trash.png";
// import styled from "styled-components";
// import Radium from 'radium';

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
        return (
            // <div className="Person" style={style}>
            <div className={personStyles.Person}>
        {/*<StyledRoot>*/}
            <p>Person Component Works - {this.props.index}</p> 
            <h2 onClick = { this.props.click } > Hello, I am { this.props.name } and I am { this.props.age } years old </h2> 
            <p> { this.props.children } </p> 
            <label> Enter Dynamic Name Here: </label> 
            <input type = "text" value = { this.props.name } onChange = { this.props.changed }/> 
            <p onClick = { this.props.delete }>
                <img src={trash} alt={"img not found"} width="75px" height="75px" style={{cursor:"pointer"}} />
            </p>
        {/*</StyledRoot >*/}
        </div>
        );
    }
}
// export default Radium(person);
export default Person;