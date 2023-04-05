import Employee from './Employee';


function ItemDetails(props) {
    return (
        
      <div className="col">
          <div className="card shadow-sm">
              <div className="card-body ms-5 me-5">

                    <h3 className='text-center my-3'>department : <span className='text-primary h3'>{props.name}</span> </h3>

                    <p className="card-text h5 my-3">responsable : <span className='text-primary h5'>{props.responsable}</span> </p>  

                    <p className="card-text h5 my-3">number of employees : <span className='text-primary h5'>{props.employes.length}</span> </p>  

                    <p className="card-text h5 my-3">total of salaries : <span className='text-primary h5'>{props.employes.reduce((total,p) => total+=p.salary,0)} DH</span> </p>
                
                    <p className="card-text h4 m-3 text-center">employees of the {props.name} department :</p>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                            <div className="card-body">
                                {/* Table with stripped rows */}
                                <table className="table datatable table-hover">
                                <thead>
                                    <tr className='text-primary'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">salary</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {props.employes.map(p => <Employee id={p.id} nom={p.fullName} salaire={p.salary} />)}

                                </tbody>
                                </table>
                                {/* End Table with stripped rows */}
                            </div>
                            </div>
                        </div>
                        </div>

              </div>
          </div>
      </div>
    );
}

export default ItemDetails;