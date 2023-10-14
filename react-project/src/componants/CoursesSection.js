import React from "react";
import Swipe from "./Swipe";
import CoursesContainer from "./CoursesContainer";
import { useSelector } from "react-redux"

function CoursesSection(props) {
  const name = props.course;
  const searchWord = props.searchWord;
  let courseList = useSelector((state) => state.courseList)

  let sectionTitle = courseList[name].sectionTitle;
  let courseName = courseList[name].courseName;
  let courseDesc = courseList[name].courseDesc;
  let courses = courseList[name].courses;

  return (
    <div className="contain">
      <h2 className="header">{sectionTitle}</h2>
      <p className="description">{courseDesc}</p>
      <button className="explore-button">Explore {courseName}</button>
      <CoursesContainer
        course={courses}
        searchWord={searchWord}
      ></CoursesContainer>
    </div>
  );
}

export default CoursesSection;
