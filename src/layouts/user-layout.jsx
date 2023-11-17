import React, { useEffect } from "react";
import Topbar from "../components/common/topbar";
import Menubar from "../components/common/menubar";
import Footer from "../components/common/footer";
import { Outlet, useLocation } from "react-router-dom";
import { scrollTop } from "../helpers/scroll";
import ScrollToTopButton from "../components/common/scroll-to-top-button";

const UserLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    scrollTop();
  }, [pathname]);

  return (
    <>
      <Topbar />
      <Menubar />
      <Outlet />
      <Footer />
      <ScrollToTopButton/>
    </>
  );
};

export default UserLayout;
