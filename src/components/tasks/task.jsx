import { Link } from "react-router-dom";

function Task(props) {

  return (
    <Link to="/detail">
      <li className="task border rounded border-secondary border-2 p-3 my-3 d-flex d-flex justify-content-between">
        <div className="d-flex">
          <div class="form-check p-0 ms-4 d-flex justify-content-center align-items-center me-4">
            <input
              class="form-check-input task-check"
              type="checkbox"
              id="checkDefault"
            ></input>
          </div>
          <div>
            <h4 className="mb-0 fw-normal">{props.title}</h4>
            <div>
              <span className="me-2">priority</span>
              <span>{props.deadline}</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <i class="bi bi-pencil me-4 trash-icon"></i>
          <i class="bi bi-trash trash-icon text-danger"></i>
        </div>
      </li>
    </Link>
  );
}

export default Task;
