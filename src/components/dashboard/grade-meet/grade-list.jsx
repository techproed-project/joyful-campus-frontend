import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { getStudentInfoByPageForStudent } from "../../../api/student-info-service";

const GradeList = () => {
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 20,
    page: 0,
  });

  const loadData = async () => {
    try {
      const resp = await getStudentInfoByPageForStudent(
        lazyState.page,
        lazyState.rows
      );
      setList(resp.content);
      setTotalRecords(resp.totalElements);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onPage = (event) => {
    setlazyState(event);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [lazyState]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>Grades</span>
          </Card.Title>

          <DataTable
            value={list}
            lazy
            dataKey="id"
            paginator
            first={lazyState.first}
            rows={lazyState.rows}
            totalRecords={totalRecords}
            onPage={onPage}
            loading={loading}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="lessonName" header="Lesson" />
            <Column field="absentee" header="Absentee" />
            <Column field="midtermExam" header="Midterm" />
            <Column field="finalExam" header="Final" />
            <Column field="note" header="Score" />
            <Column field="infoNote" header="Note" />
            <Column field="average" header="Average" />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GradeList;
