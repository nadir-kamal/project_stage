import { Link } from "react-router-dom";
import './SideNavBar.css';
import Logo from './Logo-purple.png';

function SideNavBar() {
  return (

    <div className="gradiant-2 shadow side-bar sticky-top d-flex flex-column px-4 py-3 bg-white m-0 rounded-4">

      <Link to="/admin/hi" className="d-flex align-items-center mb-2 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img alt="logo" src={Logo} className="" width="35em"/>
        <span className="text-purple fs-4 mx-1">employees</span>
      </Link>

      <hr />

      <ul className="side-bar-items nav nav-pills flex-column mb-auto">

        <li className="nav-item h5 act">
          <Link to='departments' className="nav-link rounded-pill navlink">
            <i className=" bi bi-menu-button-wide" />&nbsp;
            Departments
          </Link>
        </li>
        <li className="nav-item h5 act">
          <Link to='employees' className="nav-link rounded-pill navlink">
            <i className="bi bi-person-circle" />&nbsp;
            Employees
          </Link>
        </li>
        <li className="nav-item h5 act">
          <Link to='projects' className="nav-link rounded-pill navlink">
            <i className="bi bi-diagram-3" />&nbsp;
            Projects
          </Link>
        </li>
        <li className="nav-item h5 act">
          <Link to='meetings' className="nav-link rounded-pill navlink">
            <i className="bi bi-megaphone" />&nbsp;
            Meetings
          </Link>
        </li>
        <li className="nav-item h5 act">
          <Link to='timings' className="nav-link rounded-pill navlink">
            <i className="bi bi-calendar3" />&nbsp;
            Timings
          </Link>
        </li>
        <li className="nav-item h5 act">
          <Link to='payroll' className="nav-link rounded-pill navlink">
            <i className="bi bi-cash-stack" />&nbsp;
            Payroll
          </Link>
        </li>
        <li className="nav-item h5 act">
          <Link to='leaves' className="nav-link rounded-pill navlink">
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