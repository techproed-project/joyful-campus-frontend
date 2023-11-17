import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "./scroll-to-top-button.scss";
import { scrollTop } from "../../helpers/scroll";

const ScrollToTopButton = () => {


    const handleClick = () => { 
        scrollTop("smooth")
     }

  return (
    <Button class="btn btn-primary btn-scroll" onClick={handleClick}>
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
