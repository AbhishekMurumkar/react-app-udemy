// import Axios from "axios";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import React, { Component } from "react";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import styles from "./Blog.module.css";
import { Route } from "react-router-dom";
// import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import FullPost from "./FullPost/FullPost";
import { Switch } from "react-router-dom";
// import AsyncComponent from "../../../higher-order-components/BlogApp/AsyncComponent";
import { Suspense } from "react";

// const AsyncNewPost = AsyncComponent(()=>{
//   return import("./NewPost/NewPost");
// })

const NewPost = React.lazy(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    // console. log(styles)
    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  exact
                  to="/posts"
                  activeStyle={{
                    textDecoration: "underline",
                  }}
                >
                  POSTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-search=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname:"/new-post",
                  hash:"#submit",
                  search:"?quick-search=true"
                }}>New Post</Link>
              </li> */}
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={()=>{return(<h1>Home</h1>)}}></Route> */}
        {/* <Route path="/" render={()=>{return(<h1>Home2</h1>)}}></Route> */}
        {/* <Route path="/new-post" exact render={()=>{return(<h1>New Post</h1>)}}></Route> */}
        <Switch>
          {/* {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}></Route> : null} */}
          {this.state.auth ? (
            <Route
              path="/new-post"
              render={() => {
                return (
                  <Suspense fallback={<div>Loading. . . </div>}>
                    <NewPost></NewPost>
                  </Suspense>
                );
              }}
            ></Route>
          ) : null}
          {/* <Route path="/new-post" component={NewPost}></Route> */}
          <Route path="/posts" component={Posts}></Route>
          {/* <Redirect from="/" to="/posts"></Redirect> */}
          {/* <Route path="/full-post/:id" component={FullPost}></Route> */}

          {/* handling the 404 error */}
          <Route
            render={() => {
              return <p>Page Not found</p>;
            }}
          ></Route>
        </Switch>
        {/* <Posts/> */}
        {/* <section className={styles.Posts}>{posts}</section> */}
        {/* <section>
          <FullPost selectedPostId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default withRouter(Blog);
// export default Blog;
