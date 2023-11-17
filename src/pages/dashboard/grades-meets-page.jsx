import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import GradeList from "../../components/dashboard/grade-meet/grade-list";
import StudentMeetList from "../../components/dashboard/grade-meet/student-meet-list";
const GradesMeetsPage = () => {

  return (
    <>
      <PageHeader title="Grades & Meets" />
      <Spacer />
      <GradeList/>
      <Spacer />
      <StudentMeetList/>
      <Spacer/>
    </>
  );
};

export default GradesMeetsPage;
