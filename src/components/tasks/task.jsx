import { Link } from "react-router-dom";

function Task(props) {

  return (
    <div>
      <li className="task border rounded border-secondary border-2 p-3 my-3 d-flex d-flex justify-content-between">

        <div className="d-flex text-white">

          <label class="form-check-label d-flex justify-content-center align-items-center" for={`checkDefault${props.id}`}>
          <div class="form-check p-0 ms-4 me-4"> 
            <input
              class="form-check-input task-check"
              type="checkbox"
              id={`checkDefault${props.id}`}
            ></input>
          </div>
          </label>

          <div className="w-100">
            <h4 className="mb-0 fw-normal" >{props.title}</h4>
            <div>
              <span className="me-2">priority</span>
              <span>{props.deadline}</span>
            </div>
          </div>

        </div>


        <div className="d-flex justify-content-center align-items-center">
          <i class="bi bi-eye me-4 icon text-primary"  data-bs-toggle="modal" data-bs-target={`#exampleModal${props.id}`}></i>
         <Link to={`/tasks/edit/${props.id}`} className="text-decoration-none icon">
         <i class="bi bi-pencil me-4"></i>
         </Link>
          <i class="bi bi-trash icon text-danger"></i>
        </div>

      </li>



   <div className="modal fade" id={`exampleModal${props.id}`} tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content bg-dark border-secondary">

      <div className="modal-header border-secondary">
        <h5 className="modal-title text-white fw-semibold" id="taskModalLabel">
          <i className="bi bi-clipboard me-2 text-primary"></i>Task Details
        </h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>

      <div className="modal-body">

        <div className="mb-4">
          <label className="text-secondary-emphasis fw-semibold mb-1" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
            <i className="bi bi-tag me-1"></i>title
          </label>
          <h4 className="text-white fw-semibold mb-0">{props.title}</h4>
        </div>

        <div className="mb-4">
          <label className="text-secondary-emphasis fw-semibold mb-1" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
            <i className="bi bi-text-paragraph me-1"></i>Description
          </label>
          <p className="text-white-50 mb-0" style={{ lineHeight: '1.6' }}>
            {props.description}
          </p>
        </div>

        <div className="row g-3">

          <div className="col-md-4">
            <label className="text-secondary-emphasis fw-semibold mb-1" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
              <i className="bi bi-calendar me-1"></i>Deadline
            </label>
            <div className="bg-dark rounded-3 p-2 px-3 border border-secondary">
              <span className="text-white">{props.deadline}</span>
            </div>
          </div>

          <div className="col-md-4">
            <label className="text-secondary-emphasis fw-semibold mb-1" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
              <i className="bi bi-circle me-1"></i>Status
            </label>
            <div className="bg-dark rounded-3 p-2 px-3 border border-secondary">
              {props.status.name}
            </div>
          </div>

          <div className="col-md-4">
            <label className="text-secondary-emphasis fw-semibold mb-1" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
              <i className="bi bi-flag me-1"></i>Priority
            </label>
            <div className="bg-dark rounded-3 p-2 px-3 border border-secondary">
              Hight
            </div>
          </div>

        </div>

      </div>

      <div className="modal-footer border-secondary">
        <button type="button" className="btn btn-outline-secondary text-white border-secondary" data-bs-dismiss="modal">
          <i className="bi bi-x-circle me-2"></i>Close
        </button>
      </div>

    </div>
  </div>
</div>





      </div>
  );
}

export default Task;
