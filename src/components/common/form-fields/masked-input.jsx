"use client";
import React from "react";
import { Form } from "react-bootstrap";
import InputMask from "react-input-mask-next";
const MaskedInput = ({ className, label, error, ...rest }) => {
  return (
    <Form.Group className={className} controlId={rest.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as={InputMask} {...rest} isInvalid={!!error} />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};
export default MaskedInput;
