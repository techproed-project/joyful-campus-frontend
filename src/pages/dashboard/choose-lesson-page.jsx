import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
const ChooseLessonPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Choose Lesson" />
      <Spacer />

      <Spacer />
    </>
  );
};

export default ChooseLessonPage;
