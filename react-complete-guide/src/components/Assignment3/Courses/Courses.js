import React from "react";
import { Route, Link } from "react-router-dom";
import Course from "./Course/Course";
import "./Courses.css";
import courseImg from "./Course/pic.png";

// let coursesStructure = {
//   id: "number",
//   name: "string",
//   author: "string",
//   type: "string",
//   length: "number(in mins)",
//   certificationAvailablity: "boolean",
// };
let courses = [
  {
    id: 1,
    name: "react from beginner to advanced user or pro",
    author: "Abhishek Murumkar",
    type: "free",
    length: 125,
    certificationAvailablity: true,
  },
  {
    id: 2,
    name: "javascript for beginners",
    author: "Y. Surya Kiran Reddy",
    type: "free",
    length: 30,
    certificationAvailablity: false,
  },
  {
    id: 3,
    name: "laravel for beginners",
    author: "Jeevana Madishetty",
    type: "75",
    length: 1215,
    certificationAvailablity: true,
  },
  {
    id: 4,
    name: "getting started with matlab",
    author: "srinidhi.shastrula",
    type: "1215",
    length: 2125,
    certificationAvailablity: true,
  },
  {
    id: 5,
    name: "MSSQL for beginners",
    author: "gagan",
    type: "free",
    length: 120,
    certificationAvailablity: false,
  },
  {
    id: 6,
    name: "wordpress for beginners",
    author: "divya",
    type: "550",
    length: 115,
    certificationAvailablity: true,
  },
];
const Courses = (props) => {
  console.log(props);

  let selectCourseHandler = (courseId) => {
    console.log(courseId);
    props.history.replace(
      props.match.path + "/course/" + courseId,
      courses[courseId - 1]
    );
  };

  let coursesComp = courses.map((e) => {
    return (
      <div className="courseCard" key={e.id}>
        <img src={courseImg} className="courseImg" alt="img"></img>
        <p className="courseTitle">{e.name}</p>
        {/* <button className="selectedCourse" onClick={()=>{selectCourseHandler(e.id)}}>Go To Course</button> */}
        <Link
          to={{
            pathname: props.match.url + "/course/" + e.id,
            state: courses[e.id - 1],
            hash:"course"
          }}
          className="selectedCourse"
        >
          See Course Details
        </Link>
      </div>
    );
  });
  return (
    <div className="coursesContent">
            <Route
        path={props.match.url + "/course/:id"}
        exact
        component={Course}
      ></Route>
      <p style={{ textAlign: "center" }}>In Courses Component</p>
      <div className="courses">{coursesComp}</div>

    </div>
  );
};
export default Courses;
