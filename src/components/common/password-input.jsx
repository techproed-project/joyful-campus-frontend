import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = (props) => {
  const [type, setType] = useState("password");

  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));

    /* if(type==="password"){
            setType("text")
        }
        else{
            setType("password")
        }
 */
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type={type}
        placeholder="Password"
        aria-label="Password"
        aria-describedby="password"
        {...props}
      />
      <InputGroup.Text id="password" onClick={handleClick}>
        {type === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
      </InputGroup.Text>

      <Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
    </InputGroup>
  );
};

export default PasswordInput;
