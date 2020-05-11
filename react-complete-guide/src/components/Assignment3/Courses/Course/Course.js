import React from "react";
import "./Course.css";
import pic from "./pic.png";
import author from "./author.png";
import free from "./freepng.png";
import timer from "./timer.png";
import yes from "./true.png";
import no from "./false.png";
// import {Route} from "react-router-dom";

const Course = (props) => {
  console.log("In Course Component");
  console.log(props);
  let courseData = props.location.state;
  return (
    // <div>
    <div id="course">
    <div className="card">
      <h2 style={{textAlign:"center"}}>selected course = <b>{props.match.params.id}</b></h2>
      <img src={pic} alt="Avatar" width="100%" />
      <div className="courseName">{courseData.name}</div>
      <div className="courseBody">
        <div className="coursePart">
          <img src={author} className="authorImage" alt="img"></img>
          <br />
          <p>{courseData.author}</p>
        </div>
        <div className="coursePart">
          <img src={timer} width="65px" alt="img"></img>
          <br></br>
          <p>
            Length:
            <br />
            <span>{courseData.length} mins</span>
          </p>
        </div>
        <div className="coursePart">
          Certification:
          <br />
          <img
            src={courseData.certificationAvailablity ? yes : no}
            width="65px"
            style={{ margin: "10px 0px" }}
            alt="img"
          ></img>
        </div>
        <div className="coursePart">
          Price:
          <br />
          {courseData.type === "free" ? (
            <img src={free} width="65px" alt="img"></img>
          ) : (
            <p className="coursePrice">{courseData.type}/- Rs</p>
          )}
          {/* <br/> */}
        </div>
      </div>
      {/* <button className="buttonView">Lets check the course</button> */}
    </div>
     </div>
  );
};
export default Course;
