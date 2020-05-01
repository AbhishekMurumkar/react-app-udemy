import React from 'react';

const withwrapper = (WrapperComponent,className)=>{
    // this is a functional component
    return props=>(
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    )
}

export default withwrapper;