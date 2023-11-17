import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { getAllMeetsForStudent } from "../../../api/meet-service";

const StudentMeetList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      const resp = await getAllMeetsForStudent();
      setList(resp);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>Meets</span>
          </Card.Title>

          <DataTable
            value={list}
            dataKey="id"
            loading={loading}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="date" header="Date" />
            <Column field="startTime" header="Start Time" />
            <Column field="stopTime" header="End Time" />
            <Column field="description" header="Description" />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentMeetList;
