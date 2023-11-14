import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { getUnAssignedPrograms } from "../../../api/lesson-program-service";
import { Column } from "primereact/column";
import {
  assignTeacherToProgram,
  getAllTeachers,
} from "../../../api/teacher-service";
import { swalAlert } from "../../../helpers/swal";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../../store/slices/misc-slice";

const LessonAssignment = () => {
  const [loading, setLoading] = useState(true);
  const [loadingAssign, setLoadingAssign] = useState(false);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const { listRefreshToken } = useSelector((state) => state.misc);

  const loadPrograms = async () => {
    try {
      const data = await getUnAssignedPrograms();
      setList(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const loadTeachers = async () => {
    try {
      const data = await getAllTeachers();
      setTeachers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAssign = async () => {
    setLoadingAssign(true);
    try {
      if (selectedPrograms.length <= 0)
        throw new Error("Select at least a program");
      if (!selectedTeacher) throw new Error("Select a teacher");

      const payload = {
        lessonProgramId: selectedPrograms.map((item) => item.lessonProgramId),
        teacherId: selectedTeacher,
      };

      await assignTeacherToProgram(payload);
      swalAlert("Assignment was comleted", "success");
      setSelectedPrograms([]);
      dispatch(refreshToken());
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data?.message || err.message;
      swalAlert(msg, "error");
    } finally {
      setLoadingAssign(false);
    }
  };

  const getLessonNames = (row) => {
    return row.lessonName.map((item) => item.lessonName).join("-");
  };

  useEffect(() => {
    loadPrograms();
  }, [listRefreshToken]);

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Unassigned Programs</Card.Title>

          <DataTable
            dataKey="lessonProgramId"
            value={list}
            loading={loading}
            selection={selectedPrograms}
            onSelectionChange={(e) => setSelectedPrograms(e.value)}
          >
            <Column selectionMode="multiple" />
            <Column body={getLessonNames} header="Lessons" />
            <Column field="day" header="Day" />
            <Column field="startTime" header="Start" />
            <Column field="stopTime" header="End" />
          </DataTable>

          <InputGroup className="mt-5 mb-3">
            <FloatingLabel controlId="floatingSelect" label="Teacher">
              <Form.Select
                aria-label="Floating label select example"
                onChange={(e) => setSelectedTeacher(e.target.value)}
              >
                <option value="">Select Teacher</option>
                {teachers.map((item) => (
                  <option value={item.userId} key={item.userId}>
                    {item.name} {item.surname}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>

            <Button onClick={handleAssign} disabled={loadingAssign}>Assign</Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LessonAssignment;
