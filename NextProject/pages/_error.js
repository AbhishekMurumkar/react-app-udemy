import React from "react";
import Link from "next/link";

const error = (props)=>{
    return(
        <div>
            <h1>Something went wrong here...!!!</h1>
            <p><Link href="/"><a>Try going back</a></Link></p>
        </div>
    )
};
export default error;