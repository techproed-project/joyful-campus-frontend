import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken, setOperation } from "../../../store/slices/misc-slice";
import { swalAlert, swalConfirm } from "../../../helpers/swal";
import { FaTrash } from "react-icons/fa";
import {
  deleteLessonProgram,
  getLessonProgramsByPage,
} from "../../../api/lesson-program-service";

const LessonProgramList = () => {
  const { listRefreshToken } = useSelector((state) => state.misc);
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 20,
    page: 0,
  });
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const resp = await getLessonProgramsByPage(
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

  const handleDelete = async (id) => {
    const resp = await swalConfirm("Are you sure to delete?");
    if (!resp.isConfirmed) return;
    setLoading(true);
    try {
      await deleteLessonProgram(id);
      dispatch(refreshToken());
      swalAlert("Lesson program was deleted", "success");
    } catch (err) {
      const msg = err.response.data.message;
      console.log(err);
      swalAlert(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const onPage = (event) => {
    setlazyState(event);
  };

  const getOperations = (row) => {
    return (
      <div>
        <Button
          variant="danger"
          size="sm"
          disabled={row.built_in}
          onClick={() => handleDelete(row.lessonProgramId)}
        >
          <FaTrash />
        </Button>
      </div>
    );
  };

  const getLessonNames = (row) => {
    return row.lessonName.map((item) => item.lessonName).join("-");
  };

  const handleNew = () => {
    dispatch(setOperation("new"));
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [lazyState, listRefreshToken]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>List</span>
            <Button onClick={handleNew}>New</Button>
          </Card.Title>

          <DataTable
            value={list}
            lazy
            dataKey="lessonProgramId"
            paginator
            first={lazyState.first}
            rows={lazyState.rows}
            totalRecords={totalRecords}
            onPage={onPage}
            loading={loading}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column body={getLessonNames} header="Lessons" />
            <Column field="day" header="Day" />
            <Column field="startTime" header="Start" />
            <Column field="stopTime" header="End" />
            <Column body={getOperations} header="" />
          </DataTable>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LessonProgramList;
