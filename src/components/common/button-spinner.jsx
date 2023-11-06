import React from "react";
import { Spinner } from "react-bootstrap";

const ButtonSpinner = ({ size = "sm", animation = "border" }) => {
  return <Spinner size={size} animation={animation} />;
};

export default ButtonSpinner;
