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
import { config } from "../../../helpers/config";
import { createLessonProgram } from "../../../api/lesson-program-service";
import { MultiSelect } from "primereact/multiselect";
import { getAllLessons } from "../../../api/lesson-service";
import { getAllEducationTerms } from "../../../api/education-term-service";

const NewLessonProgramForm = () => {
  const [loading, setLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [terms, setTerms] = useState([]);
  const dispatch = useDispatch();

  const initialValues = {
    day: "",
    educationTermId: "",
    lessonIdList: [],
    startTime: "",
    stopTime: "",
  };

  const validationSchema = Yup.object({
    lessonIdList: Yup.array().required("Required"),
    day: Yup.string().required("Required").oneOf(config.days, "Invalid day"),
    educationTermId: Yup.string().required("Required"),
    startTime: Yup.string().required("Required"),
    stopTime: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createLessonProgram(values);
      formik.resetForm();
      dispatch(refreshToken()); // Listeyi güncellemek için
      dispatch(setOperation(null)); // New formunu kapatmak için
      swalAlert("Lesson program was created", "success");
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

  useEffect(() => {
    loadLessons();
    loadTerms();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>New</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row xs={1} sm={2} md={3} className="g-3">
              <Col>
                <MultiSelect
                  value={formik.values.lessonIdList}
                  onChange={(e) =>
                    formik.setFieldValue("lessonIdList", e.value)
                  }
                  options={lessons}
                  optionLabel="lessonName"
                  optionValue="lessonId"
                  placeholder="Select lessons"
                />
              </Col>
              <Col>
                <FloatingLabel
                  controlId="educationTermId"
                  label="Term"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Education term"
                    {...formik.getFieldProps("educationTermId")}
                    isInvalid={
                      formik.touched.educationTermId &&
                      formik.errors.educationTermId
                    }
                  >
                    <option>Select</option>
                    {terms.map((item) => (
                      <option value={item.id} key={item.id}>
                        {config.educationTerms.find(term=> term.key === item.term).label } {item.startDate}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.educationTermId}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="day" label="Day" className="mb-3">
                  <Form.Select
                    aria-label="Day"
                    {...formik.getFieldProps("day")}
                    isInvalid={formik.touched.day && formik.errors.day}
                  >
                    <option>Select</option>
                    {config.days.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.day}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="startTime"
                  label="Start"
                  className="mb-3"
                >
                  <Form.Control
                    type="time"
                    placeholder=""
                    {...formik.getFieldProps("startTime")}
                    isInvalid={
                      formik.touched.startTime && formik.errors.startTime
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.startTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="stopTime"
                  label="Stop"
                  className="mb-3"
                >
                  <Form.Control
                    type="time"
                    placeholder=""
                    {...formik.getFieldProps("stopTime")}
                    isInvalid={
                      formik.touched.stopTime && formik.errors.stopTime
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.stopTime}
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

export default NewLessonProgramForm;
