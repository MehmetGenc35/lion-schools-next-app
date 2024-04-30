"use client";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ error, ...rest }) => {
    const [type, setType] = useState("password");
    
    const handleClick = () => {
      setType((prevType) => (prevType === "password" ? "text" : "password"));
    };

  return (
    <InputGroup>
      <Form.Control
        placeholder=""
        type={type}
        aria-label="Password"
        aria-describedby="password"
        {...rest}
        isInvalid={!!error}
      />
      <InputGroup.Text
        id="password"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        {type === "password" ? <FaEye /> : <FaEyeSlash />}
      </InputGroup.Text>

      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </InputGroup>
  );
};

export default PasswordInput;
