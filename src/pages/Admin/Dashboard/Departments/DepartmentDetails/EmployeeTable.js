import { Link } from "react-router-dom";

function EmployeeTable(props) {
    return (
        <tr scope='col'>    
            <td>{props.id}</td>
            <td>
                <img             
                    src={'https://ui-avatars.com/api/?background=random&color=ffffff&name='+props.nom}
                    alt="ems"
                    width={30}
                    height={30}
                    className="rounded-circle me-2"
                />
                {props.nom}
            </td>
            <td>{props.job}</td>
            <td>{props.salaire} DH</td>
            <td>
                <Link to="/admin/employees/edit">
                    <button className="btn btn-sm btn-outline-primary rounded-pill">Details</button>
                </Link>
            </td>
        </tr>
    )
}
  
  export default EmployeeTable;