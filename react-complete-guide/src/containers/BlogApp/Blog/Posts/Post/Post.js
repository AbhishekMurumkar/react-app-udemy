import React from "react";

import styles from "./Post.module.css";
// import {withRoute} from "react-router-dom";
const post = (props) => {
  return (
    <article className={styles.Post} onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default post;
// export default withRoute(post);
