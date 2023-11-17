import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllLessonProgramByStudent } from "../../../api/lesson-program-service";

const StudentProgramList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { listRefreshToken } = useSelector((state) => state.misc);

  const loadData = async () => {
    try {
      const resp = await getAllLessonProgramByStudent();
      setList(resp);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getLessonNames = (row) => {
    return row.lessonName.map((item) => item.lessonName).join("-");
  };

  const getTeacherNames = (row) => {
    return row.teachers.map((item) => `${item.name} ${item.surname}`).join("-");
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [listRefreshToken]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>Programs Selected</span>
          </Card.Title>

          <DataTable
            value={list}
            dataKey="lessonProgramId"
            loading={loading}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column body={getLessonNames} header="Lessons" />
            <Column body={getTeacherNames} header="Lessons" />
            <Column field="day" header="Day" />
            <Column field="startTime" header="Start" />
            <Column field="stopTime" header="End" />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentProgramList;
