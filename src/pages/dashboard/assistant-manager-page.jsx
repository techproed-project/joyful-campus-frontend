import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
import AssistantManagerList from "../../components/dashboard/assistant-manager/assistant-manager-list";
import NewAssistantManagerForm from "../../components/dashboard/assistant-manager/new-assistant-manager-form";
import EditAssistantManagerForm from "../../components/dashboard/assistant-manager/edit-assistant-manager-form";

const AssistantManagerPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Assistant Manager" />
      <Spacer />

       {currentOperation === "new" && (
        <>
          <NewAssistantManagerForm />
          <Spacer />
        </>
      )}

      {currentOperation === "edit" && (
        <>
          <EditAssistantManagerForm />
          <Spacer />
        </>
      )} 

      <AssistantManagerList />
      <Spacer />
    </>
  );
};

export default AssistantManagerPage;
