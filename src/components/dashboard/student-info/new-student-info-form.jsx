import React, { useEffect, useState } from "react";
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
import { createStudentInfo } from "../../../api/student-info-service";
import { getAllStudentsForAdvisor } from "../../../api/student-service";
import { getAllLessons } from "../../../api/lesson-service";
import { getAllEducationTerms } from "../../../api/education-term-service";
import { config } from "../../../helpers/config";

const NewStudentInfoForm = () => {
  const [loading, setLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [students, setStudents] = useState([]);
  const [terms, setTerms] = useState([]);
  const dispatch = useDispatch();

  const initialValues = {
    absentee: "",
    educationTermId: "",
    finalExam: "",
    infoNote: "",
    lessonId: "",
    midtermExam: "",
    studentId: "",
  };

  const validationSchema = Yup.object({
    absentee: Yup.number().required("Required").min(0, "Invalid"),
    finalExam: Yup.number()
      .required("Required")
      .min(0, "Invalid")
      .max(100, "Invalid"),
    midtermExam: Yup.number()
      .required("Required")
      .min(0, "Invalid")
      .max(100, "Invalid"),
    educationTermId: Yup.number().required("Required"),
    lessonId: Yup.number().required("Required"),
    studentId: Yup.number().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createStudentInfo(values);
      formik.resetForm();
      dispatch(refreshToken()); // Listeyi güncellemek için
      dispatch(setOperation(null)); // New formunu kapatmak için
      swalAlert("Info was created", "success");
    } catch (err) {
      const msg = Object.values(err.response.data.validations)[0];
      swalAlert(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(setOperation(null));
  };

  const loadStudents = async () => {
    try {
      const data = await getAllStudentsForAdvisor();
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadLessons = async () => {
    try {
      const data = await getAllLessons();
      setLessons(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadTerms = async () => {
    try {
      const data = await getAllEducationTerms();
      setTerms(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    loadStudents();
    loadLessons();
    loadTerms();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>New</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
              <Col>
                <FloatingLabel
                  controlId="lesson"
                  label="Lesson"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Select lesson"
                    {...formik.getFieldProps("lessonId")}
                    isInvalid={
                      formik.touched.lessonId && formik.errors.lessonId
                    }
                  >
                    <option>Select lesson</option>
                    {lessons.map((item) => (
                      <option value={item.lessonId} key={item.lessonId}>
                        {item.lessonName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lessonId}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="student"
                  label="Student"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Select student"
                    {...formik.getFieldProps("studentId")}
                    isInvalid={
                      formik.touched.studentId && formik.errors.studentId
                    }
                  >
                    <option>Select student</option>
                    {students.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name} {item.surname}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.studentId}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="term"
                  label="Education Term"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Select term"
                    {...formik.getFieldProps("educationTermId")}
                    isInvalid={
                      formik.touched.educationTermId &&
                      formik.errors.educationTermId
                    }
                  >
                    <option>Select term</option>
                    {terms.map((item) => (
                      <option value={item.id} key={item.id}>
                        {
                          config.educationTerms.find(
                            (term) => term.key === item.term
                          ).label
                        }{" "}
                        {item.startDate}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.educationTermId}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

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

export default NewStudentInfoForm;
