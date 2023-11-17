import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import AllProgramList from "../../components/dashboard/choose-lesson/all-program-list";
import StudentProgramList from "../../components/dashboard/choose-lesson/student-program-list";
const ChooseLessonPage = () => {

  return (
    <>
      <PageHeader title="Choose Lesson" />
      <Spacer />
      <AllProgramList/>
      <Spacer />
      <StudentProgramList/>
      <Spacer/>
    </>
  );
};

export default ChooseLessonPage;
