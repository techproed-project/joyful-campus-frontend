import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "./scroll-to-top-button.scss";
import { scrollTop } from "../../helpers/scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // sayfada hareketimizi algılayan ve state'yi buna göre değiştiren yer.
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    scrollTop("smooth");
  };

  return (
    <Button className={`btn btn-primary btn-scroll ${isVisible ? 'visible' : 'hidden'}`} onClick={handleClick}>
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
