import { Link } from "react-router-dom";
import "./create.css"
import Loading from "../loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error/error";

function CreateTask() {


  const [title, setTitle] = useState("");
  const [statusID, setStatusID] = useState(0);
  const [priorityID, setPriorityID] = useState(0)
  const [deadline, setDeadline] = useState("")
  const [description, setDescription]= useState("")


//   if (loading) return <Loading></Loading>;
//   if (error) return <Error error={error}></Error>;

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
          <input className="form-control fs-4" style={{ fontSize: '14px', letterSpacing: '0.5px' }}></input>
        </div>
        <div className="row2 row my-2">
          <div className="col-4">
            <div className="mb-1"><i className="bi bi-circle me-1"></i>Status</div>
            <input className="form-control"></input>{" "}
          </div>
          <div className="col-4">
            <div className="mb-1"><i className="bi bi-flag me-1"></i>Priority</div>
            <input className="form-control" ></input>{" "}
          </div>
          <div className="col-4">
            <div className="mb-1"><i className="bi bi-calendar me-1"></i>Deadline</div>
            <input className="form-control" ></input>{" "}
          </div>
        </div>
        <div className="row3">
          <div className="mb-1"><i className="bi bi-text-paragraph me-1"></i>Description</div>
          <textarea className="des form-control auto-heigth" ></textarea>
        </div>
        <div className="row4 mt-3">
            <button className="btn btn-outline-primary">Add</button>
        </div>
      </form>
    </div></div>
  );
}

export default CreateTask;
