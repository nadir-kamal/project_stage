
import { Link } from 'react-router-dom';
import './department.css';

function EditDepartment() {
  return (

  <main id="main" className="department">

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3 p-0">
            <div className="col">
                <div className="card shadow rounded-4 gradiant-2 m-0 p-0">
                    <div className='card-body d-flex justify-content-between'>
                        <h4 className="card-title ms-5">Department: <span className='text-purple h4'>marketing</span> </h4>
                    </div>
                </div>
            </div>
        </div>

      <div className="row">
       
        <div className="col-xl-8 mx-auto">
          <div className="card mb-5 rounded-4 shadow gradiant-2">
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
                            value='marketing'
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
                            value='Abdelilah Kamal'
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
                            value='abdelilah - kamal - ismail - yassine'
                            />
                        </div>
                    </div>
                  
                    <div className="text-center">
                      <Link to='/admin/departments/details'>
                        <button type="submit" className="btn btn-outline-primary rounded-pill my-3 mx-2">
                          <i className='bi bi-pencil-square me-2'/>
                          Save changes
                        </button>
                      </Link>
                      <Link to='/admin/departments/details'>
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
  </main>


  )
}

export default EditDepartment