import "./profile.css";
import Loading from "../loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../error/error";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Profile() {
  const url = "http://localhost:8000/users/1";

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        setError(err);
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
    <div className="container px-5 mx-5">
    <div className="container px-5 mx-5 d-flex justify-content-center">
    <div className=" border border-secondary p-3 rounded w-50">
      <div className="profile-head d-flex flex-column align-items-center mb-3">
        <div className="avatar bg-primary">
          <h2 className="mb-0">И</h2>
        </div>
        <div className="">
          <h4 className="mb-0">{user.name}</h4>
        </div>
        <div className="text-secondary">{user.email}</div>
      </div>
      <hr></hr>
      {/* noti toggle */}
      <div class="form-check form-switch d-flex justify-content-between p-0">
           <label class="form-check-label" for="switchCheckDefault">

            <i class="bi bi-bell me-2"></i>
          notifications
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
        ></input>
    
      </div>

      {/* отчет toggle */}
      <div class="form-check form-switch d-flex justify-content-between p-0">
         <label class="form-check-label" for="switchCheckDefault">

            <i class="bi bi-graph-up me-2"></i>
          report noti

        </label>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
        ></input>
       
      </div>
 <hr></hr>
      {/* edit profile */}
      <div>
        {/* modal button */}
        <button
          type="button"
          class="btn btn-primary mb-3 w-100"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
        <i class="bi bi-pencil me-2"></i>  Edit profile
        </button>
        {/* modal button */}

        {/* modal */}
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  EDIT ICON Edit profile
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <form>
                  <label for="inputPassword5" class="form-label mb-1">
                    Name
                  </label>
                  <input
                    id="inputPassword5"
                    class="form-control mb-3"
                    aria-describedby="passwordHelpBlock"
                    defaultValue={user.name}
                  ></input>

                  <label for="inputPassword5" class="form-label mb-1">
                    Email
                  </label>
                  <input
                    id="inputPassword5"
                    class="form-control mb-3"
                    aria-describedby="passwordHelpBlock"
                    defaultValue={user.email}
                  ></input>

                  <label for="inputPassword5" class="form-label mb-1">
                    Avator
                  </label>
                  <input
                    
                    id="inputPassword5"
                    class="form-control mb-3"
                    aria-describedby="passwordHelpBlock"
                    placeholder="https://example.com"
                  ></input>
                  <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
      {/* edit profile */}

      {/* change password */}
      <div>
        {/* modal button */}
        <button
          type="button"
          class="btn btn-outline-secondary mb-3 w-100"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
         <i class="bi bi-key me-2"></i> Change password
        </button>
        {/* modal button */}

        {/* modal */}
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  EDIT ICON Change Password
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <form>
                  <label for="inputPassword5" class="form-label mb-1">
                    Current password
                  </label>
                  <input
                  type="password"
                    id="inputPassword5"
                    class="form-control mb-3"
                    aria-describedby="passwordHelpBlock"
                  ></input>

                  <label for="inputPassword5" class="form-label mb-1">
                    New password
                  </label>
                  <input
                  type="password"
                    id="inputPassword5"
                    class="form-control mb-3"
                    aria-describedby="passwordHelpBlock"

                  ></input>

                  <label for="inputPassword5" class="form-label mb-1">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    id="inputPassword5"
                    class="form-control mb-3"
                    aria-describedby="passwordHelpBlock"

                  ></input>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
      {/* change password */}

      {/* logount */}
      
            <div>
        {/* modal button */}
        <button
          type="button"
          class="btn btn-outline-secondary mb-3 w-100"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
        >
         <i class="bi bi-box-arrow-right me-2"></i>logout
        </button>
        {/* modal button */}

        {/* modal */}
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <i class="bi bi-box-arrow-right me-2"></i>Exit
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                Are you sure you want to exit?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
      {/*  */}

      <hr className="text-danger border-3 mb-2"></hr>
      <div className="text-danger mb-2"><i class="bi bi-exclamation-triangle me-2"></i>Danger zone</div>
      <button className="btn btn-outline-danger w-100">
          <i class="bi bi-trash"></i> delete account
      </button>
      </div>
    </div></div>
  );
}

export default Profile;
