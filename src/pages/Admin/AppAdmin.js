import { Routes, Route } from "react-router-dom";
import HeaderAdmin from './HeaderAdmin';
import SideNavBar from "./SideNavBar";
import './AppAdmin.css';


import Hi from "./Dashboard/Hi";

import Departments from "./Dashboard/Departments/Departments";
import DepartmentDetails from "./Dashboard/Departments/DepartmentDetails/DepartmentDetails";
import AddDepartment from "./Dashboard/Departments/AddDepartment";
import EditDepartment from "./Dashboard/Departments/EditDepartment";

import Employees from "./Dashboard/Employees/Employees";
import Employee from "./Dashboard/Employees/Employee";
import AddEmployee from "./Dashboard/Employees/AddEmployee";

import Projects from "./Dashboard/Projects/Projects";
import Meetings from "./Dashboard/Meetings/Meetings";
import Timings from "./Dashboard/Timings/Timings";
import Payroll from "./Dashboard/Payroll/Payroll";
import Leaves from "./Dashboard/Leaves/Leaves";


function AppAdmin() {
  return (
    <div className="container-fluid">

        <SideNavBar />
        <HeaderAdmin />
      
        <div className="dash container">
          <Routes>
              <Route path="hi" element={<Hi />} />
              <Route path="departments" element={<Departments />} />
              <Route path="departments/details" element={<DepartmentDetails />} />
              <Route path="departments/add" element={<AddDepartment />} />
              <Route path="departments/edit" element={<EditDepartment />} />

              <Route path="employees" element={<Employees />} />
              <Route path="employees/edit" element={<Employee />} />
              <Route path="employees/add" element={<AddEmployee />} />
              
              
              <Route path="projects" element={<Projects />} />
              <Route path="meetings" element={<Meetings />} />
              <Route path="timings" element={<Timings />} />
              <Route path="payroll" element={<Payroll />} />
              <Route path="leaves" element={<Leaves />} />
          </Routes>
        </div>

    </div>
  )
}

export default AppAdmin;