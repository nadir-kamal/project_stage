
import { Link } from 'react-router-dom';
import ItemDetails from './ItemDetails';

function DepartmentDetails() {

      let service = {
      "name":"merketing",
      "employes" : [
        {
            "id": 1,
            "fullName": "John Doe",
            "department": "Sales",
            "age": 28,
            "startingDate": "2020-01-01",
            "salary": 50000
        },
        {
            "id": 2,
            "fullName": "Jane Smith",
            "department": "Marketing",
            "age": 32,
            "startingDate": "2019-05-01",
            "salary": 60000
        },
        {
            "id": 3,
            "fullName": "Michael Johnson",
            "department": "IT",
            "age": 24,
            "startingDate": "2021-02-15",
            "salary": 45000
        },
        {
            "id": 4,
            "fullName": "Sarah Lee",
            "department": "Finance",
            "age": 35,
            "startingDate": "2018-11-01",
            "salary": 75000
        },
        {
            "id": 5,
            "fullName": "David Kim",
            "department": "HR",
            "age": 30,
            "startingDate": "2017-06-01",
            "salary": 65000
        },
        {
            "id": 6,
            "fullName": "Amy Chen",
            "department": "IT",
            "age": 26,
            "startingDate": "2020-10-01",
            "salary": 55000
        },
        {
            "id": 7,
            "fullName": "Brian Lee",
            "department": "Sales",
            "age": 29,
            "startingDate": "2019-01-01",
            "salary": 50000
        },
        {
            "id": 8,
            "fullName": "Jessica Park",
            "department": "Marketing",
            "age": 31,
            "startingDate": "2020-07-01",
            "salary": 60000
        },
        {
            "id": 9,
            "fullName": "Kevin Kim",
            "department": "Finance",
            "age": 38,
            "startingDate": "2017-11-01",
            "salary": 75000
        },
        {
            "id": 10,
            "fullName": "Laura Davis",
            "department": "HR",
            "age": 27,
            "startingDate": "2021-03-01",
            "salary": 65000
        },
        {
            "id": 11,
            "fullName": "Adam Johnson",
            "department": "IT",
            "age": 23,
            "startingDate": "2022-01-01",
            "salary": 45000
        },
        {
            "id": 12,
            "fullName": "Samantha Brown",
            "department": "Sales",
            "age": 30,
            "startingDate": "2019-06-01",
            "salary": 50000
        },
        {
            "id": 13,
            "fullName": "Patrick Lee",
            "department": "Marketing",
            "age": 34,
            "startingDate": "2020-05-01",
            "salary": 60000
        }
      ],
      "responsable":"Tahiri"
      }

    return (

          <div className="container py-4">

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <div className='card-body d-flex justify-content-between my-1'>
                            <h4 className="card-title ms-5">Department: <span className='text-primary h4'>{service.name}</span> </h4>
                            <div>
                                <Link to="/admin/departments/edit">
                                    <button className="btn btn-sm btn-outline-primary me-2 rounded-pill">
                                        <i className='bi bi-pencil me-2'></i>
                                        Edit
                                    </button>
                                </Link>
                                <Link to="/admin/departments">
                                    <button className="btn btn-sm btn-outline-danger me-5 rounded-pill">
                                        <i className='bi bi-trash me-2'></i>
                                        delete
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ItemDetails name={service.name} employes={service.employes} responsable={service.responsable} />
          </div>
    );
}

export default DepartmentDetails