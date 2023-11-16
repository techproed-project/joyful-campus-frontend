import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
import StudentInfoList from "../../components/dashboard/student-info/student-info-list";
import NewStudentInfoForm from "../../components/dashboard/student-info/new-student-info-form";
const StudentInfoPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Student Info" />
      <Spacer />

      {currentOperation === "new" && (
        <>
          <NewStudentInfoForm />
          <Spacer />
        </>
      )}
      {/*
      {currentOperation === "edit" && (
        <>
          <EditTeacherForm />
          <Spacer />
        </>
      )}
*/}
      <StudentInfoList />
      <Spacer />
    </>
  );
};

export default StudentInfoPage;
