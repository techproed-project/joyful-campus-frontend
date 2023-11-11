import React from "react";
import PageHeader from "../../components/common/page-header";
import AdminList from "../../components/dashboard/admin/admin-list";
import Spacer from "../../components/common/spacer";
import NewAdminForm from "../../components/dashboard/admin/new-admin-form";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Admin" />
      <Spacer />

      {currentOperation === "new" && (
        <>
          <NewAdminForm />
          <Spacer />
        </>
      )}

      <AdminList />
      <Spacer />
    </>
  );
};

export default AdminPage;
