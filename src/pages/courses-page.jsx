import React from "react";
import Courses from "../components/courses/courses";
import Spacer from "../components/common/spacer";
import PageHeader from "../components/common/page-header";

const CoursesPage = () => {
  return (
    <>
      <PageHeader title="Courses"/>
      <Spacer />
      <Courses />
      <Spacer />
    </>
  );
};

export default CoursesPage;
