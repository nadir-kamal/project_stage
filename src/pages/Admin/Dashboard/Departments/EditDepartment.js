
import './department.css';

function EditDepartment() {
  return (

  <main id="main" className="department main m-4">

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
            <div className="col">
                <div className="card shadow-sm">
                    <div className='card-body d-flex justify-content-between my-1'>
                        <h4 className="card-title ms-5">Department: <span className='text-primary h4'>marketing</span> </h4>
                        <div>
                                <button className="btn btn-sm btn-outline-primary me-2 rounded-pill">
                                    <i className='bi bi-pencil me-2'></i>
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger me-5 rounded-pill">
                                    <i className='bi bi-trash me-2'></i>
                                    delete
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    <section className="section profile">
      <div className="row">
       
        <div className="col-xl-8" style={{margin:'auto'}}>
          <div className="card mb-5">
            <div className="card-body pt-3">
             
                  <form className='py-2'>
                  
                    <div className="row mb-3">
                        <label
                            htmlFor="name"
                            className="col-md-4 col-lg-3 col-form-label"
                        >
                            department name
                        </label>
                        <div className="col-md-8 col-lg-9">
                            <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label
                            htmlFor="responsable"
                            className="col-md-4 col-lg-3 col-form-label"
                        >
                            responsable
                        </label>
                        <div className="col-md-8 col-lg-9">
                            <input
                            name="responsable"
                            type="text"
                            className="form-control"
                            id="responsable"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label
                            htmlFor="employees"
                            className="col-md-4 col-lg-3 col-form-label"
                        >
                            employees
                        </label>
                        <div className="col-md-8 col-lg-9">
                            <input
                            name="employees"
                            type="text"
                            className="form-control"
                            id="employees"
                            />
                        </div>
                    </div>
                  
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary rounded-pill my-3">
                        Add department
                      </button>
                    </div>

                  </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  </main>


  )
}

export default EditDepartment