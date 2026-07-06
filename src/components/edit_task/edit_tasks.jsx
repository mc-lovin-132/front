import { Link } from "react-router-dom";
import "./edit.css"
import Loading from "../loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error/error";
import { useParams } from 'react-router-dom';
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function EditTask() {
  const { id } = useParams();
  const url = `http://localhost:8000/tasks/${id}`;

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTask(response.data.task);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        sleep(1000).then(() => {
          setLoading(false);
        });
      });
  }, []);

  if (loading) return <Loading></Loading>;
  if (error) return <Error error={error}></Error>;

  return (
    <div className="container px-5 mx-5"><div className="container px-5 mx-5">
    
        <div className="go-back mb-2 text-secondary">
            <Link to="/tasks">
            <i class="bi bi-arrow-left"></i>
            <span className="mx-2">Go Back</span>
            </Link>
        </div>
      <form className="border border-secondary rounded p-3">
        <div className="row1">
          <div className="mb-1"><i className="bi bi-tag me-1"></i>Title</div>
          <input className="form-control fs-4" style={{ fontSize: '14px', letterSpacing: '0.5px' }} value={task.title}></input>
        </div>
        <div className="row2 row my-2">
          <div className="col-4">
            <div className="mb-1"><i className="bi bi-circle me-1"></i>Status</div>
            <input className="form-control" value={task.status.name}></input>{" "}
          </div>
          <div className="col-4">
            <div className="mb-1"><i className="bi bi-flag me-1"></i>Priority</div>
            <input className="form-control" value="urgently"></input>{" "}
          </div>
          <div className="col-4">
            <div className="mb-1"><i className="bi bi-calendar me-1"></i>Deadline</div>
            <input className="form-control" value={task.deadline}></input>{" "}
          </div>
        </div>
        <div className="row3">
          <div className="mb-1"><i className="bi bi-text-paragraph me-1"></i>Description</div>
          <textarea className="des form-control auto-heigth" value={task.description}></textarea>
        </div>
        <div className="row4 mt-3">
            <button className="btn btn-outline-primary">Save Changes</button>
            <button className="btn btn-outline-danger mx-3">Delete Task</button>
        </div>
      </form>
    </div></div>
  );
}

export default EditTask;
