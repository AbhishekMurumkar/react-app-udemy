import React, { Component } from "react";
import styles from "./FullPost.module.css";
import axios from "axios";
class FullPost extends Component {
  state = {
    selectedPost: null,
  };
  loadData(){
    if (this.props.match.params.id) {
      if (
        //load data when we have load post
        !this.state.selectedPost ||
        // or when do have then checking whether current loaded post id and selected post id
        // from props are not same
        // if true , get data else do not update component
        (this.state.selectedPost &&
          this.state.selectedPost.id != this.props.match.params.id)
      ) {
        axios.get("posts/" + this.props.match.params.id).then((data) => {
          this.setState({
            selectedPost: data.data,
          });
          // console.log(this.state.selectedPost);
        });
      }
    }
  }
  componentDidUpdate() {
    console.log("[FullPosts.js] componentDidUpdate");
    this.loadData();
  }
  componentDidMount() {
    console.log("[FullPosts.js] componentDidMount");
    // console.log(this.props);
    this.loadData();
  }

  deletePostHandler = () => {
    axios.delete("posts/" + this.props.selectedPostId).then((data) => {
      console.log(data);
    });
  };
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
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}
export default FullPost;
