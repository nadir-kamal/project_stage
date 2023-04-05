import { Link } from "react-router-dom";
import './SideNavBar.css';
import Logo from './Logo-purple.png';

function SideNavBar() {
  return (
    <div className="side-bar d-flex flex-column flex-shrink-0 p-3 bg-light ">
      <Link to="/admin" className="d-flex align-items-center mb-2 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img alt="logo" src={Logo} className="img-logo"/>
        <span className="logo-text fs-4 mx-1">employees</span>
      </Link>

      <hr />

      <ul className="side-bar-items nav nav-pills flex-column mb-auto">

        <li className="nav-item h5">
          <Link to='departments' className="nav-link link-dark">
            <i className="bi bi-menu-button-wide" />&nbsp;
            Departments
          </Link>
        </li>
        <li className="nav-item h5">
          <Link to='employees' className="nav-link link-dark">
            <i className="bi bi-person" />&nbsp;
            Employees
          </Link>
        </li>
        <li className="nav-item h5">
          <Link to='projects' className="nav-link link-dark">
            <i className="bi bi-diagram-3" />&nbsp;
            Projects
          </Link>
        </li>
        <li className="nav-item h5">
          <Link to='meetings' className="nav-link link-dark">
            <i className="bi bi-megaphone" />&nbsp;
            Meetings
          </Link>
        </li>
        <li className="nav-item h5">
          <Link to='timings' className="nav-link link-dark">
            <i className="bi bi-calendar3" />&nbsp;
            Timings
          </Link>
        </li>
        <li className="nav-item h5">
          <Link to='payroll' className="nav-link link-dark">
            <i className="bi bi-cash-stack" />&nbsp;
            Payroll
          </Link>
        </li>
        <li className="nav-item h5">
          <Link to='leaves' className="nav-link link-dark">
            <i className="bi bi-calendar2-x" />&nbsp;
            Leaves
          </Link>
        </li>

      </ul>

      <hr />

    </div>

  )
}

export default SideNavBar;