import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="sticky-top rounded-4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between shadow px-5">

      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
        <img src='img/Logo.png' className="ms-5 img-logo" />
        <h1 className="text-white ms-2">employees</h1>
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to='/' className="nav-link px-3 text-white fs-3">home</Link>
        </li>
        <li>
          <Link to='/about' className="nav-link px-3 text-white fs-3">about</Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login">
          <button type="button" className="btn rounded-pill btn-outline-light me-5">
            Login
          </button>
        </Link>
      </div>

  </header>

  );
}

export default Header;