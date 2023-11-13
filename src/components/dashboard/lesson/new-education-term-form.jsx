import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import ButtonSpinner from "../../common/button-spinner";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { refreshToken, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert } from "../../../helpers/swal";
import InputMask from "react-input-mask-next";
import * as Yup from "yup";
import { config } from "../../../helpers/config";
import { createEducationTerm } from "../../../api/education-term-service";

const getTermKeys = () => config.educationTerms.map((item) => item.key);

const NewEducationTermForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    endDate: "",
    lastRegistrationDate: "",
    startDate: "",
    term: "",
  };

  const validationSchema = Yup.object({
    term: Yup.string()
      .required("Required")
      .oneOf(getTermKeys(), "Invalid term"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date()
      .required("Required")
      .min(Yup.ref("startDate"), "must be later than start date"),
    lastRegistrationDate: Yup.date()
      .required("Required")
      .max(Yup.ref("startDate"), "must be earlier than start date"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createEducationTerm(values);
      formik.resetForm();
      dispatch(refreshToken()); // Listeyi güncellemek için
      dispatch(setOperation(null)); // New formunu kapatmak için
      swalAlert("Education term was created", "success");
    } catch (err) {
      const msg = err.response.data.message;
      swalAlert(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(setOperation(null));
  };

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
                <FloatingLabel controlId="term" label="Term" className="mb-3">
                  <Form.Select
                    aria-label="Education term"
                    {...formik.getFieldProps("term")}
                    isInvalid={formik.touched.term && formik.errors.term}
                  >
                    <option>Select</option>
                    {config.educationTerms.map((item) => (
                      <option value={item.key} key={item.key}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.term}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="startDate"
                  label="Start"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    placeholder=""
                    {...formik.getFieldProps("startDate")}
                    isInvalid={
                      formik.touched.startDate && formik.errors.startDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.startDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="endDate" label="End" className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder=""
                    min={formik.values.startDate}
                    {...formik.getFieldProps("endDate")}
                    isInvalid={formik.touched.endDate && formik.errors.endDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.endDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="lastRegistrationDate"
                  label="Last Registration"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    placeholder=""
                    max={formik.values.startDate}
                    {...formik.getFieldProps("lastRegistrationDate")}
                    isInvalid={
                      formik.touched.lastRegistrationDate &&
                      formik.errors.lastRegistrationDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastRegistrationDate}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button
                  variant="outline-secondary"
                  className="me-3"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                >
                  {loading && <ButtonSpinner />} Create
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewEducationTermForm;
