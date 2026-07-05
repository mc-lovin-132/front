import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container px-5 mx-5"><div className="container px-5 mx-5">
    
      <nav className="navbar bg-dark text-secondary border border-secondary mb-5 rounded-bottom">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand text-secondary" href="#">
            Navbar
          </a>
          <div className="h-100 d-flex align-items-center">
            <ul className="d-flex justify-content-between list-unstyled mb-0">
              <li className="mx-2"><Link to="/tasks">tasks</Link></li>
              <li className="mx-2"><Link to="/profile">profile</Link></li>
              <li className="mx-2"><Link to="/#">groups</Link></li>
            </ul>
          </div>
        </div>
      </nav></div></div>
  );
}

export default Header;
