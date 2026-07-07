import { Link } from "react-router-dom";
import "./edit.css";
import Loading from "../loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error/error";
import { useParams } from "react-router-dom";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function EditTask() {
  const { id } = useParams();
  const url = `http://localhost:8000/tasks/${id}`;
  const statusesUrl = "http://localhost:8000/tasks/statuses";
  const priorityUrl = "http://localhost:8000/tasks/priorities";

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [statuses, setStatuses] = useState([]);
  const [loadingStatuses, setLoadingStatuses] = useState(true);
  const [errorStatuses, setErrorStatuses] = useState(null);

  const [priorities, setPriorities] = useState([]);
  const [loadingPriorities, setLoadingPriorities] = useState(true);
  const [errorPriorities, setErrorPriorities] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState(0);
  const [priority, setPriority] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    log();
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    log();
  };
  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
    log();
  };
  const handleStatusChange = (statusID) => {
    setStatus(statusID);
    log();
  };
  const handlePriorityChange = (priorityID) => {
    setPriority(priorityID);
    log();
  };

  // Очистка формы
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDeadline("");
    setStatus("");
    setPriority("");
    setSuccess(false);
    setError(null);
  };

  function log() {
    console.log(title, description, deadline, status, priority);
  }

  function sendUpdateData() {
    const dataToSend = {};

    if (title && title.trim() !== "") {
      dataToSend.title = title.trim();
    }

    if (description && description.trim() !== "") {
      dataToSend.description = description.trim();
    }

    if (deadline && title.trim() !== "") {
      dataToSend.deadline = deadline;
    }

    if (status != 0) {
      dataToSend.status = status;
    }

    if (priority != 0) {
      dataToSend.priority = priority;
    }

    if (Object.keys(dataToSend).length === 0) {
      alert("no data for update");
      return;
    }

    setLoading(true)
    sleep(500)
    console.log(dataToSend)
    axios
      .post("http://localhost:8000/tasks", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Успешно:", response.data);
      })
      .catch((error) => {
        console.error("Ошибка:", error.response?.data || error.message);
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
        sleep(100).then(() => {
          setLoading(false);
        });
      });

    axios
      .get(statusesUrl)
      .then((response) => {
        setStatuses(response.data);
      })
      .catch((err) => {
        setErrorStatuses(err.message);
      })
      .finally(() => {
        sleep(100).then(() => {
          setLoadingStatuses(false);
        });
      });

    axios
      .get(priorityUrl)
      .then((response) => {
        setPriorities(response.data);
      })
      .catch((err) => {
        setErrorPriorities(err.message);
      })
      .finally(() => {
        sleep(100).then(() => {
          setLoadingPriorities(false);
        });
      });
  }, []);

  if (loading || loadingStatuses || loadingPriorities)
    return <Loading></Loading>;
  if (error || errorStatuses || errorPriorities)
    return <Error error={error}></Error>;

  return (
    <div className="container px-5 mx-5">
      <div className="container px-5 mx-5">
        <div className="go-back mb-2 text-secondary">
          <Link to="/tasks">
            <i class="bi bi-arrow-left"></i>
            <span className="mx-2">Go Back</span>
          </Link>
        </div>
        <form className="border border-secondary rounded p-3">
          <div className="row1">
            <div className="mb-1">
              <i className="bi bi-tag me-1"></i>Title
            </div>
            <input
              className="form-control fs-4"
              style={{ fontSize: "14px", letterSpacing: "0.5px" }}
              defaultValue={task.title}
              onChange={handleTitleChange}
            ></input>
          </div>
          <div className="row2 row my-2">
            <div className="col-4">
              <div className="mb-1">
                <i className="bi bi-circle me-1"></i>Status
              </div>

              {/* <input
                className="form-control"
                value={task.status.name}
             
              ></input> */}

              <div class="dropdown">
                <button
                  class="btn btn-outline-secondary w-100 text-white d-flex"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {task.status.name}
                </button>
                <ul class="dropdown-menu">
                  {statuses.map((status) => {
                    return (
                      <li
                        onClick={() => {
                          return handleStatusChange(status.id);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          {status.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-1">
                <i className="bi bi-flag me-1"></i>Priority
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-outline-secondary w-100 text-white d-flex"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {task.priority.name}
                </button>
                <ul class="dropdown-menu">
                  {priorities.map((priority) => {
                    return (
                      <li
                        onClick={() => {
                          return handlePriorityChange(priority.id);
                        }}
                      >
                        <a class="dropdown-item" href="#">
                          {priority.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-1">
                <i className="bi bi-calendar me-1"></i>Deadline
              </div>
              <input
                className="form-control"
                defaultValue={task.deadline}
                onChange={handleDeadlineChange}
              ></input>{" "}
            </div>
          </div>
          <div className="row3">
            <div className="mb-1">
              <i className="bi bi-text-paragraph me-1"></i>Description
            </div>
            <textarea
              className="des form-control auto-heigth"
              defaultValue={task.description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="row4 mt-3">
            <button className="btn btn-outline-primary" onClick={sendUpdateData}>Save Changes</button>
            <button className="btn btn-outline-danger mx-3">Delete Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
