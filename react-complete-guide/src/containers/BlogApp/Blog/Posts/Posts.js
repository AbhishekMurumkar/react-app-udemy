import React, { Component } from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";
import Axios from "../../../../axios-code";
import Spinner from "../../../../components/Blog/Spinner/Spinner";
import FullPost from "../FullPost/FullPost";
import { Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// import {Link} from "react-router-dom";

class Posts extends Component {
  postsComp;
  state = {
    posts: [],
    selectedPostId: null,
    errorStatus: false
  };
  selectPostHandler = (postId) => {
    // this.setState({ selectedPostId: postId });
    // this.props.history.push({ pathname:{this.props.match.url+"/full-post/"+postId} })
    this.props.history.push(this.props.match.url + "/full-post/" + postId)
  };

  // shouldComponentUpdate(prevProps,prevState,newProps,newState){
  //   console.log(prevProps,prevState,newProps,newState)
  //   return true;
  // }
  componentDidMount() {
    // console.log("[Posts.js] in component did mount");
    // console.log(this.props);
    setTimeout(() => {
      Axios.get("posts")
        .then((data) => {
          //   console.log(data);
          // getting 4 posts
          let selectedposts = data.data.slice(0, 4);
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
    }, 500);
  }

  render() {
    if (this.state.errorStatus) {
      this.postsComp = <h2>something went wrong. unable to fetch the posts</h2>;
    }
    if (this.state.posts.length > 0) {
      this.postsComp = this.state.posts.map((e) => {
        return (
          // <Link to={{this.props.match.url+'/full-post/'+e.id}} key={e.id}>
          <Post
            title={e.title}
            author={e.author}
            key={e.id}
            clicked={() => {
              this.selectPostHandler(e.id);
            }}
          />
          // </Link>
        );
      });
    } else {
      this.postsComp = <Spinner />;
    }
    // this statement loads only blocks of posts
    // return <section className={styles.Posts}>{this.postsComp}</section>;

    // now rendering blocks of posts with full post below with nested routes
    return (
      <div>
        <section className={styles.Posts}>{this.postsComp}</section>
        <Route path={this.props.match.url + "/full-post/:id"} component={FullPost}></Route>

      </div>
    )
  }
}
export default Posts;
