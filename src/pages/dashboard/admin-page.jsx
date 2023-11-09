import React from "react";
import PageHeader from "../../components/common/page-header";
import AdminList from "../../components/dashboard/admin/admin-list";
import Spacer from "../../components/common/spacer";

const AdminPage = () => {
  return (
    <>
      <PageHeader title="Admin" />
      <Spacer/>
      <AdminList/>
    </>
  );
};

export default AdminPage;
