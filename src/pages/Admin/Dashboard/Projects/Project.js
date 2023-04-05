
function Project(props) {
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
            <p className="text-sm font-weight-bold my-1">{props.status}</p>
        </td>
    
        <td className="align-middle text-center">
            <div className="d-flex align-items-center justify-content-center">
                <span className="me-2 text-xs font-weight-bold my-1">{props.completion}%</span>
                <div>
                <div className="progress" style={{width:"15em", height:"0.5em"}}>
                    <div
                    className="progress-bar bg-gradient-primary"
                    role="progressbar"
                    aria-valuenow={60}
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
        <button className="btn btn-sm btn-outline-primary rounded-pill my-1">
            details
        </button>
        </td>
    </tr>
  )
}

export default Project