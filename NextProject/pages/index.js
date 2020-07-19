import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

// const index = () => {
//   return (
//     <div>
//       <h1>The Main Page</h1>
//       <p>
//         Go to
//         <Link href="/auth">
//           <a>Auth</a>
//         </Link>
//         Page
//       </p>
//       <button
//         onClick={() => {
//           Router.push("/auth");
//         }}
//       >
//         Auth Route
//       </button>
//     </div>
//   );
// };
// export default index;
class Index extends Component {
//   static async getStaticProps(context) {
//     console.log(context);
//     return {};
//   }
  static async getInitialProps(context) {
    console.log(context);
    const mypromise = new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                resolve({appName:'myNextApp'});
            },5000);
        }catch(err){
            reject(err);
        }
    });
    return mypromise;
  }
  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName!=undefined?this.props.appName:null}</h1>
        <p>
          Go to
          <Link href="/auth">
            <a>Auth</a>
          </Link>
          Page
        </p>
        <button
          onClick={() => {
            Router.push("/auth");
          }}
        >
          Auth Route
        </button>
      </div>
    );
  }
}
export default Index;
