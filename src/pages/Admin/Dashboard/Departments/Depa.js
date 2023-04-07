import React from 'react'
import { Link } from 'react-router-dom';
import './department.css';

function Depa(props) {
  return (
    <div className="col">
        <div className="card shadow rounded-4 m-0 p-0 gradiant-2">
            <div className="card-body">

                <h3 className="card-text text-purple border rounded-pill border-1 border-primary py-2 my-2 text-center">{props.name}</h3>  

                <p className="card-text h5 my-3">number of employes : <span className='text-purple h4'>{props.employes.length}</span> </p>  

                <p className="card-text h5 my-3">total of salaries : <span className='text-purple h4'>{props.employes.reduce((total,p) => total+=p.salaire,0)} DH</span></p>  
                                
                <p className="card-text h5 my-3">responsable : <span className='text-purple h4'>{props.responsable}</span> </p>  

                <Link to="/admin/departments/details">
                    <button className="btn btn-md mt-2 btn-outline-primary text-purple rounded-pill">
                        Details
                    </button>
                </Link>

            </div>
        </div>
    </div>

  );
}

export default Depa