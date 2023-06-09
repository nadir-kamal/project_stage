// import { Link } from "react-router-dom";
import './HeaderAdmin.css';
import Profile from '../Admin/Dashboard/Employees/Profile.jpg';

function HeaderAdmin() {
  return (
    <div className="header-admin container-fluid d-inline-flex justify-content-between px-5 shadow m-0 rounded-4 ">

      <div>
        <h5 className="my-3 ms-3">employees management system</h5>
      </div>
  
      <div className="dropdown py-3">
        <a
          href="https://github.com"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={Profile}
            alt="ems"
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong className="text-white">admin</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >

          <li>
            <a className="dropdown-item" href="https://github.com">
              profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://github.com">
              setings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="https://github.com">
              Sign out
            </a>
          </li>

        </ul>
        
      </div>
    </div>
  )
}

export default HeaderAdmin;