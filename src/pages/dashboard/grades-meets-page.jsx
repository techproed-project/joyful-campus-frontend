import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
const GradesMeetsPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Grades & Meets" />
      <Spacer />

      <Spacer />
    </>
  );
};

export default GradesMeetsPage;
