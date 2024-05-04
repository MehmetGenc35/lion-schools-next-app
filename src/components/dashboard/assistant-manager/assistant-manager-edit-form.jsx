"use client";
import { updateAssistantManagerAction } from "@/actions/assistant-manager-actions";
import BackButton from "@/components/common/form-fields/back-button";
import MaskedInput from "@/components/common/form-fields/masked-input";
import SelectInput from "@/components/common/form-fields/select-input";
import SubmitButton from "@/components/common/form-fields/submit-button";
import TextInput from "@/components/common/form-fields/text-input";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";
const AssistantManagerEditForm = ({ user }) => {
  const [state, dispatch] = useFormState(updateAssistantManagerAction, initialResponse);
  const router = useRouter();
  if (state.ok) {
    swAlert(state.message, "success");
    router.push("/dashboard/assistant-manager");
  } else if (state.message) {
    swAlert(state.message, "error");
  }
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Edit</Card.Title>
          <Form noValidate action={dispatch}>
            <input type="hidden" name="id" value={user?.userId} />
            <Row xs={1} md={2} xl={3}>
              <Col>
                <TextInput
                  type="text"
                  name="name"
                  className="mb-3"
                  label="FirstName"
                  error={state?.errors?.name}
                  defaultValue={user?.name}
                />
              </Col>
              <Col>
                <TextInput
                  type="text"
                  name="surname"
                  className="mb-3"
                  label="LastName"
                  error={state?.errors?.surname}
                  defaultValue={user?.surname}
                />
              </Col>
              <Col>
                <SelectInput
                  name="gender"
                  className="mb-3"
                  label="Gender"
                  options={config.genders}
                  error={state?.errors?.gender}
                  defaultValue={user?.gender}
                />
              </Col>
              <Col>
                <TextInput
                  type="date"
                  name="birthDay"
                  className="mb-3"
                  label="Birth date"
                  error={state?.errors?.birthDay}
                  defaultValue={user?.birthDay}
                />
              </Col>
              <Col>
                <TextInput
                  type="text"
                  name="birthPlace"
                  className="mb-3"
                  label="Place of birth"
                  error={state?.errors?.birthPlace}
                  defaultValue={user?.birthPlace}
                />
              </Col>
              <Col>
                <MaskedInput
                  name="phoneNumber"
                  className="mb-3"
                  label="Phone number"
                  error={state?.errors?.phoneNumber}
                  mask="999-999-9999"
                  defaultValue={user?.phoneNumber}
                />
              </Col>
              <Col>
                <MaskedInput
                  name="ssn"
                  className="mb-3"
                  label="SSN"
                  error={state?.errors?.ssn}
                  mask="999-99-9999"
                  defaultValue={user?.ssn}
                />
              </Col>
              <Col>
                <TextInput
                  type="text"
                  name="username"
                  className="mb-3"
                  label="Username"
                  error={state?.errors?.username}
                  defaultValue={user?.username}
                />
              </Col>
              <Col>
                <TextInput
                  type="password"
                  name="password"
                  className="mb-3"
                  label="Password"
                  error={state?.errors?.password}
                />
              </Col>
              <Col>
                <TextInput
                  type="password"
                  name="confirmPassword"
                  className="mb-3"
                  label="Confirm password"
                  error={state?.errors?.confirmPassword}
                />
              </Col>
            </Row>
            <BackButton />
            <SubmitButton />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default AssistantManagerEditForm;
