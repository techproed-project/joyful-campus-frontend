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
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { refreshToken, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert } from "../../../helpers/swal";
import * as Yup from "yup";
import { MultiSelect } from "primereact/multiselect";
import { updateMeet } from "../../../api/meet-service";
import { getAllStudentsForAdvisor } from "../../../api/student-service";
import { formatTime } from "../../../helpers/date-time";

const EditMeetForm = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();

  const { currentRecord } = useSelector((state) => state.misc);

  const initialValues = {
    ...currentRecord,
    startTime: formatTime(currentRecord.startTime),
    stopTime: formatTime(currentRecord.stopTime),
    studentIds: currentRecord.students.map((item) => item.id),
  };

  const validationSchema = Yup.object({
    date: Yup.date().required("Required"),
    startTime: Yup.string().required("Required"),
    stopTime: Yup.string().required("Required"),
    studentIds: Yup.array().min(1, "Required"),
    description: Yup.string()
      .required("Required")
      .min(2, "At least 2 characters")
      .max(16, "Max 16 characters"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

   
    try {
      await updateMeet(values);
      formik.resetForm();
      dispatch(refreshToken()); // Listeyi güncellemek için
      dispatch(setOperation(null)); // New formunu kapatmak için
      swalAlert("Meet was updated", "success");
    } catch (err) {
      console.log(err);
      const msg = "Unexpected error";
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
    enableReinitialize: true,
  });

  const loadStudents = async () => {
    try {
      const data = await getAllStudentsForAdvisor();

      const arr = data.map((item) => ({
        id: item.userId,
        label: `${item.name} ${item.surname}`,
      }));
      setStudents(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Edit</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className="g-3">
              <Col xs={12}>
                <MultiSelect
                  value={formik.values.studentIds}
                  onChange={(e) => formik.setFieldValue("studentIds", e.value)}
                  options={students}
                  optionValue="id"
                  optionLabel="label"
                />
              </Col>

              <Col md={4}>
                <FloatingLabel controlId="date" label="Date" className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder=""
                    {...formik.getFieldProps("date")}
                    isInvalid={formik.touched.date && formik.errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.date}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel
                  controlId="startTime"
                  label="Start Time"
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

              <Col md={4}>
                <FloatingLabel
                  controlId="stopTime"
                  label="End Time"
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
              <Col xs={12}>
                <FloatingLabel
                  controlId="description"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder=""
                    {...formik.getFieldProps("description")}
                    isInvalid={
                      formik.touched.description && formik.errors.description
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.description}
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
                  {loading && <ButtonSpinner />} Update
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditMeetForm;
