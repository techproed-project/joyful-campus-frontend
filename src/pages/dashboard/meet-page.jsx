import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
import MeetList from "../../components/dashboard/meet/meet-list";
import NewMeetForm from "../../components/dashboard/meet/new-meet-form";
import EditMeetForm from "../../components/dashboard/meet/edit-meet-form";
const MeetPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Meet" />
      <Spacer />

      {currentOperation === "new" && (
        <>
          <NewMeetForm />
          <Spacer />
        </>
      )}

      {currentOperation === "edit" && (
        <>
          <EditMeetForm />
          <Spacer />
        </>
      )}

      <MeetList />
      <Spacer />
    </>
  );
};

export default MeetPage;
