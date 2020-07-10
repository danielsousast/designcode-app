import React from "react";
import { Container } from "./styles";
import Course from "../Course";

import courses from "../../data/courses";

export default function CoursesList() {
  return (
    <Container>
      {courses.map((course, index) => (
        <Course
          key={index}
          image={course.image}
          title={course.title}
          subtitle={course.subtitle}
          logo={course.logo}
          author={course.author}
          avatar={course.avatar}
          caption={course.caption}
        />
      ))}
    </Container>
  );
}
