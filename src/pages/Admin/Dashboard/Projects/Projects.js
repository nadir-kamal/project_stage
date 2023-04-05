import { Link } from "react-router-dom";
import Project from "./Project";

function Projects() {

let data = [
    {
      "projectName": "Project A",
      "responsableName": "John Doe",
      "projectStatus": "In progress",
      "Progretion": 80
    },
    {
      "projectName": "Project B",
      "responsableName": "Jane Smith",
      "projectStatus": "Completed",
      "Progretion": 100
    },
    {
      "projectName": "Project C",
      "responsableName": "Bob Johnson",
      "projectStatus": "In progress",
      "Progretion": 50
    },
    {
      "projectName": "Project D",
      "responsableName": "Sarah Lee",
      "projectStatus": "Planned",
      "Progretion": 0
    },
    {
      "projectName": "Project E",
      "responsableName": "Mike Smith",
      "projectStatus": "In progress",
      "Progretion": 30
    },
    {
      "projectName": "Project F",
      "responsableName": "Emily Jones",
      "projectStatus": "In progress",
      "Progretion": 70
    },
    {
      "projectName": "Project G",
      "responsableName": "David Brown",
      "projectStatus": "Completed",
      "Progretion": 100
    },
    {
      "projectName": "Project H",
      "responsableName": "Karen Kim",
      "projectStatus": "Planned",
      "Progretion": 0
    },
    {
      "projectName": "Project I",
      "responsableName": "Peter Lee",
      "projectStatus": "In progress",
      "Progretion": 10
    },
    {
      "projectName": "Project J",
      "responsableName": "Samantha Smith",
      "projectStatus": "In progress",
      "Progretion": 50
    }
  ];

let list = data.map(p => <Project name={p.projectName} responsable={p.responsableName} status={p.projectStatus} completion={p.Progretion} />);

  return (
    <div className="container m-4">

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
          <div className="col">
            <div className="card shadow-sm">
              <div className='card-body d-flex justify-content-between my-1'>
                  <h4 className="card-title ms-5">Projects</h4>
                  <Link to="/admin/projects/add">
                    <button className="btn btn-sm btn-outline-primary me-5 rounded-pill">
                      <i className='bi bi-plus-circle me-2'></i>
                      Add project
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>

      <div className="col-12">
        <div className="card mb-4">
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center justify-content-center datatable table-hover mb-0">
                <thead className="text-primary">
                  <tr>
                    <th className="text-xxs font-weight-bolder py-3">
                      Project
                    </th>
                    <th className="text-xxs font-weight-bolder py-3">
                      responsable
                    </th>
                    <th className="text-xxs font-weight-bolder py-3">
                      Status
                    </th>
                    <th className="text-xxs font-weight-bolder text-center py-3">
                      Completion
                    </th>
                    <th />
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
    </div>

  )
}

export default Projects