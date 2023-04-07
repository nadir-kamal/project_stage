import { Link } from "react-router-dom"

function ProjectDetailsTable(props) {
    
    let statusBG = "badge bg-primary rounded-pill px-2 py-1";

    switch (props.status) {
        case "Planned" : 
            statusBG = "badge bg-danger rounded-pill px-2 py-1"
            break;
        case "In progress" :
            statusBG = "badge bg-primary rounded-pill px-2 py-1"
            break;
        case "Completed" : 
            statusBG = "badge bg-success rounded-pill px-2 py-1"
            break;
        case "Paused" :
            statusBG = "badge bg-warning rounded-pill px-2 py-1"
            break;
        default:
            statusBG = "badge bg-primary rounded-pill px-2 py-1"
            break;
    }

    let progressBG = "progress-bar bg-primary";

        if (props.completion<25 ) {
            progressBG = "progress-bar bg-danger"
        }    
        else if (props.completion<50 ) {
            progressBG = "progress-bar bg-warning"
        }
        else if (props.completion<75 ) {
            progressBG = "progress-bar bg-info"
        } 
        else if (props.completion<100 ) {
            progressBG = "progress-bar bg-primary"
        }
        else {
            progressBG = "progress-bar bg-success"
        }

    return (   
      <tr >
          <td >
              <p className="text-sm font-weight-bold my-1">{props.name}</p>
          </td>
      
          <td>
              <img             
                  src={'https://ui-avatars.com/api/?background=random&color=ffffff&name='+props.responsable}
                  alt="ems"
                  width={30}
                  height={30}
                  className="rounded-circle me-2 my-1"
              />
              <p className="text-sm font-weight-bold my-1 d-inline">{props.responsable}</p>
          </td>
      
          <td>
              <p className={statusBG}>{props.status}</p>
          </td>
      
          <td className="align-middle text-center">
              <div className="d-flex align-items-center justify-content-center">
                  <span className="me-2 text-xs font-weight-bold my-1">{props.completion}%</span>
                  <div>
                  <div className="progress" style={{width:"15em", height:"0.5em"}}>
                      <div
                      className={progressBG}
                      role="progressbar"
                      aria-valuenow={props.completion}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: props.completion + "%" }}
                      >
                      </div>
                  </div>
                  </div>
              </div>
          </td>
          
          <td className="align-middle">
          <Link to='/admin/projects/details/task'>
            <button className="btn btn-sm btn-outline-primary rounded-pill my-1">
              details
            </button>
          </Link>
          </td>
      </tr>
    )
  }
  
  export default ProjectDetailsTable