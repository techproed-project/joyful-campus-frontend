import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiMessage, BiTag, BiSend } from "react-icons/bi";
import * as Yup from "yup";
import ButtonSpinner from "../common/button-spinner";
import { createMessage } from "../../api/contact-service";
import { swalAlert } from "../../helpers/swal";
import "./contact-form.scss";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    subject: Yup.string().required("Required").min(4, "At least 4 charactes").max(50, "Max 50 characters"),
    message: Yup.string().required("Required").min(4, "At least 4 charactes").max(50, "Max 50 characters"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
        await createMessage(values);
        formik.resetForm();
        swalAlert("Your message has been sent","success")
        
    } catch (err) {
        const errMsg = Object.values(err.response.data.validations)[0];
        swalAlert(errMsg,"error");
    }
    finally{
        setLoading(false);
    }

  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className="contact-form">
      <h2>Send Me Message</h2>

      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="name">
              <AiOutlineUser />
            </InputGroup.Text>
            <Form.Control
              placeholder="Your name"
              aria-label="Your name"
              aria-describedby="name"
              {...formik.getFieldProps("name")}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>

        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="email">
              <AiOutlineMail />
            </InputGroup.Text>
            <Form.Control
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby="email"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>

        <Col xs={12}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="subject">
              <BiTag />
            </InputGroup.Text>
            <Form.Control
              placeholder="Your subject"
              aria-label="Your subject"
              aria-describedby="subject"
              {...formik.getFieldProps("subject")}
              isInvalid={formik.touched.subject && formik.errors.subject}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.subject}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>

        <Col xs={12}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="message">
              <BiMessage />
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              placeholder="Your message"
              aria-label="Your message"
              aria-describedby="message"
              {...formik.getFieldProps("message")}
              isInvalid={formik.touched.message && formik.errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Row>

      <Button
        type="submit"
        disabled={!(formik.dirty && formik.isValid) || loading}
      >
        {loading && <ButtonSpinner />} Send <BiSend />
      </Button>
    </Form>
  );
};

export default ContactForm;
