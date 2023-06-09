import { Link } from "react-router-dom";
import Project from "./ProjectTable";

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
    <div className="container m-0 p-0">

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
          <div className="col">
            <div className="card shadow-sm rounded-4 gradiant-2">
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
        
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow-sm rounded-4 gradiant-2">
              <div className="card-body">
                <table className="table datatable table-hover">
                  <thead>
                    <tr className='text-purple'>
                      <th scope="col">Project</th>
                      <th scope="col">responsable</th>
                      <th scope="col">Status</th>
                      <th scope="col" className=" text-center">Completion</th>
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

    </div>

  )
}

export default Projects