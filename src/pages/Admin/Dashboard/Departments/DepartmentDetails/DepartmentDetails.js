
import { Link } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';

function DepartmentDetails() {

      let department = {
      "name":"marketing",
      "employes" : [
        {
            "id": 1,
            "fullName": "John Doe",
            "department": "Sales",
            "job": "web designer",
            "age": 28,
            "startingDate": "2020-01-01",
            "salary": 50000
        },
        {
            "id": 2,
            "fullName": "Jane Smith",
            "department": "Marketing",
            "job": "graphic designer",
            "age": 32,
            "startingDate": "2019-05-01",
            "salary": 60000
        },
        {
            "id": 3,
            "fullName": "Michael Johnson",
            "department": "IT",
            "job": "frontend developper",
            "age": 24,
            "startingDate": "2021-02-15",
            "salary": 45000
        },
        {
            "id": 4,
            "fullName": "Sarah Lee",
            "department": "Finance",
            "job": "digital marketer",
            "age": 35,
            "startingDate": "2018-11-01",
            "salary": 75000
        },
        {
            "id": 5,
            "fullName": "David Kim",
            "department": "HR",
            "job": "community manager",
            "age": 30,
            "startingDate": "2017-06-01",
            "salary": 65000
        },
        {
            "id": 6,
            "fullName": "Amy Chen",
            "department": "IT",
            "job": "backend developper",
            "age": 26,
            "startingDate": "2020-10-01",
            "salary": 55000
        },
        {
            "id": 7,
            "fullName": "Brian Lee",
            "department": "Sales",
            "job": "project manager",
            "age": 29,
            "startingDate": "2019-01-01",
            "salary": 50000
        },
        {
            "id": 8,
            "fullName": "Jessica Park",
            "department": "Marketing",
            "job": "salesman",
            "age": 31,
            "startingDate": "2020-07-01",
            "salary": 60000
        },
        {
            "id": 9,
            "fullName": "Kevin Kim",
            "department": "Finance",
            "job": "full stack developper",
            "age": 38,
            "startingDate": "2017-11-01",
            "salary": 75000
        },
        {
            "id": 10,
            "fullName": "Laura Davis",
            "department": "HR",
            "job": "HR manager",
            "age": 27,
            "startingDate": "2021-03-01",
            "salary": 65000
        },
        {
            "id": 11,
            "fullName": "Adam Johnson",
            "department": "IT",
            "job": "accounter",
            "age": 23,
            "startingDate": "2022-01-01",
            "salary": 45000
        },
        {
            "id": 12,
            "fullName": "Samantha Brown",
            "department": "Sales",
            "job": "financial manager",
            "age": 30,
            "startingDate": "2019-06-01",
            "salary": 50000
        },
        {
            "id": 13,
            "fullName": "Patrick Lee",
            "department": "Marketing",
            "job": "UX UI designer",
            "age": 34,
            "startingDate": "2020-05-01",
            "salary": 60000
        }
      ],
      "responsable":"Tahiri"
      }

    return (

        <div className="container m-0 p-0">

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
                <div className="col">
                    <div className="card shadow rounded-4 gradiant-2">
                        <div className='card-body d-flex justify-content-between my-1'>
                            <h4 className="card-title ms-5">Department: <span className='text-purple h4'>{department.name}</span> </h4>
                            <div>
                                <Link to="/admin/departments/edit">
                                    <button className="btn btn-sm btn-outline-primary me-2 rounded-pill">
                                        <i className='bi bi-pencil me-2'></i>
                                        Edit
                                    </button>
                                </Link>
                                <Link to="/admin/departments">
                                    <button className="btn-delete btn btn-sm btn-outline-danger me-5 rounded-pill">
                                        <i className='bi bi-trash me-2'></i>
                                        delete
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card shadow rounded-4 gradiant-2">
                    <div className="card-body ms-5 mx-5 mb-3">

                        <p className="card-text h5 my-3">responsable : <span className='text-purple h5'>{department.responsable}</span> </p>  

                        <p className="card-text h5 my-3">number of employees : <span className='text-purple h5'>{department.employes.length}</span> </p>  

                        <p className="card-text h5 my-3">total of salaries : <span className='text-purple h5'>{department.employes.reduce((total,p) => total+=p.salary,0)} DH</span> </p>
                    
                        <p className="card-text h5 mt-5 mb-3">employees of the {department.name} department :</p>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table className="table datatable table-hover mb-0">
                                            <thead>
                                                <tr className='text-purple'>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Job</th>
                                                    <th scope="col">salary</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {department.employes.map(p => <EmployeeTable id={p.id} nom={p.fullName} job={p.job} salaire={p.salary} />)}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DepartmentDetails