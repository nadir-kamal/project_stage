import { Link } from "react-router-dom";
import ProjectDetailsTable from "./ProjectDetailsTable";

function Projects() {

let data = [
    {
      "projectName": "front end",
      "responsableName": "John Doe",
      "projectStatus": "In progress",
      "Progretion": 75
    },
    {
      "projectName": "back end",
      "responsableName": "Jane Smith",
      "projectStatus": "Completed",
      "Progretion": 100
    },
    {
      "projectName": "web design",
      "responsableName": "Bob Johnson",
      "projectStatus": "In progress",
      "Progretion": 50
    },
    {
      "projectName": "databese conception",
      "responsableName": "Sarah Lee",
      "projectStatus": "Planned",
      "Progretion": 0
    },
    {
      "projectName": "testing",
      "responsableName": "Mike Smith",
      "projectStatus": "In progress",
      "Progretion": 30
    },
    {
      "projectName": "hosting",
      "responsableName": "Emily Jones",
      "projectStatus": "In progress",
      "Progretion": 70
    },
    {
      "projectName": "UX/UI",
      "responsableName": "David Brown",
      "projectStatus": "Completed",
      "Progretion": 100
    },
    {
      "projectName": "fuul stack",
      "responsableName": "Karen Kim",
      "projectStatus": "Planned",
      "Progretion": 0
    },

  ];

let list = data.map(p => <ProjectDetailsTable name={p.projectName} responsable={p.responsableName} status={p.projectStatus} completion={p.Progretion} />);

  return (
    
    <div className="container m-0 p-0">

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
          <div className="col">
            <div className="card shadow-sm rounded-4 gradiant-2">
              <div className='card-body d-flex justify-content-between my-1'>
                  <h4 className="card-title ms-5">Project : <span className="text-purple h4">creating web site</span> </h4>
                  <Link to="/admin/projects/details/add">
                    <button className="btn btn-sm btn-outline-primary me-5 rounded-pill">
                      <i className='bi bi-plus-circle me-2'></i>
                      Add task
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="row m-0 p-0">
          <div className="col-lg-12 m-0 p-0">
            <div className="card shadow-sm mb-5 rounded-4 gradiant-2 m-0 p-0">
              <div className="card-body">
                <table className="table datatable table-hover mb-0">
                  <thead>
                    <tr className='text-purple'>
                      <th scope="col">Task</th>
                      <th scope="col">Responsable</th>
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