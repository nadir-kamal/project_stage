import { Link } from 'react-router-dom';

import React from 'react'

function EmployeeTable(props) {
  return (
    <tr>    
        <th scope="row">{props.id}</th>
        <td>
            <img             
                src={'https://ui-avatars.com/api/?background=random&color=ffffff&name='+props.name}
                alt="ems"
                width={32}
                height={32}
                className="rounded-circle me-2"
            />
            {props.name}
        </td>
        <td>{props.department}</td>
        <td>{props.age}</td>
        <td>{props.startingDate}</td>
        <td>{props.salary}DH</td>
        <td>
            <Link to="/admin/employees/edit">
                <button className="btn btn-sm btn-outline-primary rounded-pill">Details</button>
            </Link>
        </td>
    </tr>
  )
}

export default EmployeeTable;