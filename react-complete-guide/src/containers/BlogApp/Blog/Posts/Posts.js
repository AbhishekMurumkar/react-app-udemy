import React, { Component } from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";
import Axios from "../../../../axios-code";
import Spinner from "../../../../components/Blog/Spinner/Spinner";


class Posts extends Component {
  postsComp;
  state = {
    posts: [],
    selectedPostId: null,
    errorStatus: false,
  };
  selectPostHandler = (postId) => {
    this.setState({ selectedPostId: postId });
  };
  componentDidMount() {
    console.log("[Posts.js] in component did mount");
    console.log(this.props);
    setTimeout(() => {
      Axios.get("posts")
        .then((data) => {
          //   console.log(data);
          // getting 4 posts
          let selectedposts = data.data.slice(0, 10);
          let updatedPosts = selectedposts.map((post) => {
            return {
              ...post,
              author: "Max",
            };
          });
            this.setState({ posts: updatedPosts });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ errorStatus: true });
        });
    }, 3000);
  }

  render() {
    if (this.state.errorStatus) {
      this.postsComp = <h2>something went wrong. unable to fetch the posts</h2>;
    }
    if (this.state.posts.length>0) {
      this.postsComp = this.state.posts.map((e) => {
        return (
          <Post
            title={e.title}
            author={e.author}
            key={e.id}
            clicked={() => {
              this.selectPostHandler(e.id);
            }}
          />
        );
      });
    } else {
      this.postsComp = <Spinner />;
    }

    return <section className={styles.Posts}>{this.postsComp}</section>;
  }
}
export default Posts;
