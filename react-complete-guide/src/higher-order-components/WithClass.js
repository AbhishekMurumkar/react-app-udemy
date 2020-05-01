import React from 'react';

const WithClass = props =>{
    console.log("From WithClass");
    console.log(props);
    return(
    <div className={props.classes}>{props.children}</div>
);}



export default WithClass;