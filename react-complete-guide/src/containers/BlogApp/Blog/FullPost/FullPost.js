import React, { Component } from "react";

import styles from "./FullPost.module.css";

import axios from "axios";

class FullPost extends Component {
  state = {
    selectedPost: null,
  };

  componentDidUpdate() {
    console.log(this.props.selectedPostId, this.state.selectedPost);
    if (this.props.selectedPostId) {
      if (
        //load data when we have load post
        !this.state.selectedPost ||
        // or when do have then checking whether current loaded post id and selected post id
        // from props are not same
        // if true , get data else do not update component
        (this.state.selectedPost &&
          this.state.selectedPost.id !== this.props.selectedPostId)
      ) {
        axios
          .get(
            "posts/" +
              this.props.selectedPostId
          )
          .then((data) => {
            this.setState({
              selectedPost: data.data,
            });
            // console.log(this.state.selectedPost);
          });
      }
    }
  }

  deletePostHandler = ()=>{
    axios.delete("posts/" +
    this.props.selectedPostId).then((data)=>{
      console.log(data);
    })
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.selectedPostId != null) {
      post = <p style={{ textAlign: "center" }}>Fetching you post...!</p>;
    }
    if (this.state.selectedPost) {
      post = (
        <div className={styles.FullPost}>
          <h1>{this.state.selectedPost.title}</h1>
          <p>{this.state.selectedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
