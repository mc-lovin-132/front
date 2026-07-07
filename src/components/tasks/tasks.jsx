import { Link } from "react-router-dom";
import "./tasks.css";
import Task from "./task";
import Loading from "../loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error/error";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Tasks() {
  const url = "http://localhost:8000/tasks";

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTasks(response.data);
        console.log(response.data)
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
    <div className="text-secondary container px-5 mx-5">
      <div className="text-secondary container px-5 mx-5">
      <button className="btn btn-outline-primary">add <i className="bi bi-plus"></i></button>
      </div>
      <ul className="container px-5 mx-5 task-list list-unstyled">
        
        {tasks.map((task) => {
          return <Task title={task.title} description={task.description} status={task.status} priority={task.priority} deadline={task.deadline} id={task.id}></Task>;
        })}
      </ul>
    </div>
  );
}

export default Tasks;
