import React from "react";
import styles from "./Error404.css"
import {Link} from "react-router-dom";
const component404 = (props) => {
  console.log(styles)
  return (
    <div className="Err">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link to="/">HOME PAGE</Link>
        </div>
      </div>
    </div>
  );
};
export default component404;