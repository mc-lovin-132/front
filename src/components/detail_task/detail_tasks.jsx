import { Link } from "react-router-dom";
import "./detail.css"

function Detail() {
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
          <div className="mb-1">Title</div>
          <input className="form-control" value="work hard all day"></input>
        </div>
        <div className="row2 row my-2">
          <div className="col-4">
            <div className="mb-1">Status</div>
            <input className="form-control" value="in progress"></input>{" "}
          </div>
          <div className="col-4">
            <div className="mb-1">Priority</div>
            <input className="form-control" value="urgently"></input>{" "}
          </div>
          <div className="col-4">
            <div className="mb-1">Deadline</div>
            <input className="form-control" value="2027-04-22 12:00"></input>{" "}
          </div>
        </div>
        <div className="row3">
          <div className="mb-1">Description</div>
          <textarea className="des form-control auto-heigth" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a nesciunt unde error et rem eum debitis, id deleniti numquam consequuntur magni porro itaque maxime beatae officiis molestias! Aperiam, ex!"></textarea>
        </div>
        <div className="row4 mt-3">
            <button className="btn btn-outline-primary">Save Changes</button>
            <button className="btn btn-outline-danger mx-3">Delete Task</button>
        </div>
      </form>
    </div></div>
  );
}

export default Detail;
