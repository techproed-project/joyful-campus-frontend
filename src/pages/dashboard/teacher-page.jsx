import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
import TeacherList from "../../components/dashboard/teacher/teacher-list";
import NewTeacherForm from "../../components/dashboard/teacher/new-teacher-form";
import EditTeacherForm from "../../components/dashboard/teacher/edit-teacher-form";
const TeacherPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Teacher" />
      <Spacer />

      {currentOperation === "new" && (
        <>
          <NewTeacherForm />
          <Spacer />
        </>
      )}

      {currentOperation === "edit" && (
        <>
          <EditTeacherForm />
          <Spacer />
        </>
      )}

      <TeacherList />
      <Spacer />
    </>
  );
};

export default TeacherPage;
