import React from "react";
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import { useSelector } from "react-redux";
import ContactMessageList from "../../components/dashboard/contact-message/contact-message-list";
const ContactMessagePage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <PageHeader title="Messages" />
      <Spacer />
      <ContactMessageList/>
      <Spacer />
    </>
  );
};

export default ContactMessagePage;
