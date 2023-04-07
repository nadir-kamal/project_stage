import { Link } from 'react-router-dom';
import './department.css';

function AddDepartment() {
  return (

    <section className=" m-0 p-0">
      <div className="row m-0 p-0">
       
        <div className="col-xl-8  m-0 p-0">
          <div className="card shadow-lg mb-5 rounded-4 gradiant-2">
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
                      <Link to='/admin/departments'>
                        <button type="submit" className="btn btn-outline-primary rounded-pill my-2">
                          <i className='bi bi-plus-circle me-2'/>
                          create department
                        </button>
                      </Link>
                      <Link to='/admin/departments'>
                        <button type="submit" className="btn btn-outline-danger rounded-pill my-3 mx-2">
                          <i className='bi bi-x-square me-2'/>
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </form>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AddDepartment