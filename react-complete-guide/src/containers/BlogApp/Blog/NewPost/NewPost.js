import React, { Component } from "react";
import styles from "./NewPost.module.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    // submit: false
  };
  createPostHandler = () => {
    console.log("in createPostHandler");
    const data = {
      ...this.state
    }
    axios.post("posts", data).then((data) => {
      console.log(data);
      // this.props.history.push('/posts')
      this.props.history.replace('/posts')
      // this.setState({ submit: true })
    })
  }
  componentDidMount() {
    console.log("[NewPosts.js] in component did mount");
    // console.log(this.props);

    // checking whether user is authenticated or Notification
    // if not we will redirect the user from NewPost page to posts page
    // this.props.history.replace("/posts")
  }
  render() {
    return (
      <div className={styles.NewPost}>
        {/* {this.state.submit ? <Redirect to="/posts"></Redirect> : null} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.createPostHandler}>Add Post</button>
      </div>
    );
  }
}
export default NewPost;
