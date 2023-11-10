import React from "react";
import PageHeader from "../../components/common/page-header";
import ManagerList from "../../components/dashboard/manager/manager-list";
import Spacer from "../../components/common/spacer";
import NewManagerForm from "../../components/dashboard/manager/new-manager-form";
import { useSelector } from "react-redux";

const ManagerPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Manager" />
      <Spacer />

      {currentOperation === "new" && (
        <>
          <NewManagerForm />
          <Spacer />
        </>
      )}

      <ManagerList />
    </>
  );
};

export default ManagerPage;
