import React from 'react'
import { Link } from 'react-router-dom';

function Depa(props) {
  return (
    <div className="col">
        <div className="card shadow-sm">
            <div className="card-body">

                <p className="card-text h5 my-3">number of employes : <span className='text-primary h4'>{props.employes.length}</span> </p>  

                <p className="card-text h5 my-3">total of salaries : <span className='text-primary h4'>{props.employes.reduce((total,p) => total+=p.salaire,0)} DH</span></p>  
                                
                <p className="card-text h5 my-3">responsable : <span className='text-primary h4'>{props.responsable}</span> </p>  

                <Link to="/admin/departments/details">
                    <button className="btn btn-md btn-outline-primary rounded-pill">
                        Details
                    </button>
                </Link>

            </div>
        </div>
    </div>

  );
}

export default Depa