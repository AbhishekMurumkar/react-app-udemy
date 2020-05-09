// import Axios from "axios";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
import React, { Component } from "react";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import styles from "./Blog.module.css";
import {Route,Link,withRouter,NavLink} from "react-router-dom";

class Blog extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink  to="/">Home</NavLink>
              </li>
              <li>
                <NavLink   to={{
                  pathname:"/new-post",
                  hash:"#submit",
                  search:"?quick-search=true"
                }}>New Post</NavLink>
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
        <Route path="/" exact component={Posts}></Route>
        <Route path="/new-post" component={NewPost}></Route>
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
