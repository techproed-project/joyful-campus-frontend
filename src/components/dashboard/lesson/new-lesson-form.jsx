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
import * as Yup from "yup";
import { config } from "../../../helpers/config";
import { createLesson } from "../../../api/lesson-service";

const NewLessonForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    lessonName: "",
    creditScore: "",
    compulsory: "",
  };

  const validationSchema = Yup.object({
    lessonName: Yup.string().required("Required"),
    creditScore: Yup.number()
      .required("Required")
      .min(0, "Min 0")
      .max(100, "Max 100"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createLesson(values);
      formik.resetForm();
      dispatch(refreshToken()); // Listeyi güncellemek için
      dispatch(setOperation(null)); // New formunu kapatmak için
      swalAlert("Lesson was created", "success");
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
            <Row xs={1} sm={2} md={3}className="g-3">
              <Col>
                <FloatingLabel
                  controlId="lessonName"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder=""
                    {...formik.getFieldProps("lessonName")}
                    isInvalid={
                      formik.touched.lessonName && formik.errors.lessonName
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lessonName}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="creditScore"
                  label="Credit"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder=""
                    {...formik.getFieldProps("creditScore")}
                    isInvalid={
                      formik.touched.creditScore && formik.errors.creditScore
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.creditScore}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <Form.Check
                  id="compulsory"
                  type="checkbox"
                  label="Compulsory"
                  {...formik.getFieldProps("compulsory")}
                />
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

export default NewLessonForm;
