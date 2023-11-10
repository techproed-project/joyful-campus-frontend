import { useFormik } from "formik";
import React from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import * as Yup from "yup";

const NewAdminForm = () => {
  const initialValues = {
    birthDay: "",
    birthPlace: "",
    gender: "",
    name: "",
    password: "",
    ssn: "",
    surname: "",
    username: "",
    phoneNumber: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    gender: Yup.string()
      .required("Required")
      .oneOf(["MALE", "FEMALE"], "Invalid gender"),
    birthDay: Yup.date().required("Required"),
    birthPlace: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/\d{3}-\d{3}-\d{4}/g, "Invalid phone"),
    ssn: Yup.string()
      .required("Required")
      .matches(/\d{3}-\d{2}-\d{4}/g, "Invalid ssn"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be at least 8 characters")
      .matches(/[a-z]+/g, "One lowercase char")
      .matches(/[A-Z]+/g, "One uppercase char")
      .matches(/\d+/g, "One number"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords dosen't match"),
  });

  const onSubmit = () => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>New</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
              <Col>
                <FloatingLabel
                  controlId="firstName"
                  label="First name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder=""
                    {...formik.getFieldProps("name")}
                    isInvalid={formik.touched.name && formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewAdminForm;
