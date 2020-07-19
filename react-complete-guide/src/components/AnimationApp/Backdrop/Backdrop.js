import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    let myclass=['Backdrop'];
    if(props.show){
        myclass.push('BackdropOpen');
    }else{
        myclass.push('BackdropClose');
    }
    myclass = myclass.join(" ");
    console.log(myclass);
    return (<div className={myclass}></div>);
};

export default backdrop;