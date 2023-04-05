
import { Link } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';

function Employees() {

  let data = [
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
  ];

  let list = data.map(item => <EmployeeTable id={item.id} name={item.fullName} department={item.department} age={item.age} startingDate={item.startingDate} salary={item.salary}/>);


  return (
    <section className="container section m-4">

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
          <div className="col">
            <div className="card shadow-sm">
              <div className='card-body d-flex justify-content-between my-1'>
                  <h4 className="card-title ms-5">Employees</h4>
                  <Link to="/admin/employees/add">
                    <button className="btn btn-sm btn-outline-primary me-5 rounded-pill">
                      <i className='bi bi-plus-circle me-2'></i>
                      Add employee
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-5">
              <div className="card-body">
                <table className="table datatable table-hover">
                  <thead>
                    <tr className='text-primary'>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">department</th>
                      <th scope="col">Age</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">salary</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>

                    {list}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Employees