import React from "react";
import User from "../../components/User";

const auth = (props)=>{
    return(
        <div>
            <h1>The Auth Index Page - {props.appName}</h1>
            <User name="Abhishek" age={23} />
        </div>
    )
};
auth.getInitialProps = (context)=>{
    const promise = new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                resolve({appName:'MyAuthApp'});
            },5000);
        }catch(err){
            reject(err);
        }
    });
    return promise;
}
export default auth;