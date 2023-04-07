
import { Link } from 'react-router-dom';
import './Employee.css';

function AddEmployee() {
  return (

  <main id="main" className="employee m-0 p-0">

    <section className=" m-0 p-0">
      <div className="row">
       
        <div className="col-xl-8">
          <div className="card shadow rounded-4 m-0 p-0 gradiant-2">
            <div className="card-body pt-3">
             
                  <form >
                    <div className="row mb-3">
                      <label
                        htmlFor="profileImage"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Profile Image
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <img 
                            src='https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' 
                            alt="Profile"
                            height={175} 
                        />
                        <div className="pt-2">
                          <a
                            href="#"
                            className="btn btn-outline-primary btn-sm"
                            title="Upload new profile image"
                          >
                            <i className="bi bi-upload" />
                          </a>&nbsp; &nbsp;
                          <a
                            href="#"
                            className="btn btn-outline-danger btn-sm"
                            title="Remove my profile image"
                          >
                            <i className="bi bi-trash" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="fullName"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Full Name
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="fullName"
                          type="text"
                          className="form-control"
                          id="fullName"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="about"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        About
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="about"
                          className="form-control"
                          id="about"
                          style={{ height: 120 }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="company"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Company
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="company"
                          type="text"
                          className="form-control"
                          id="company"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Job"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Job
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="job"
                          type="text"
                          className="form-control"
                          id="Job"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Country"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Country
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="country"
                          type="text"
                          className="form-control"
                          id="Country"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Address"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Address
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="address"
                          type="text"
                          className="form-control"
                          id="Address"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Phone"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Phone
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="phone"
                          type="text"
                          className="form-control"
                          id="Phone"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Email"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="Email"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Twitter"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Twitter Profile
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="twitter"
                          type="text"
                          className="form-control"
                          id="Twitter"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Facebook"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Facebook Profile
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="facebook"
                          type="text"
                          className="form-control"
                          id="Facebook"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Instagram"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Instagram Profile
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="instagram"
                          type="text"
                          className="form-control"
                          id="Instagram"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="Linkedin"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Linkedin Profile
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="linkedin"
                          type="text"
                          className="form-control"
                          id="Linkedin"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                    <Link to='/admin/employees'>        
                      <button type="submit" className="btn btn-outline-primary rounded-pill">
                        <i className='bi bi-plus-circle me-2'/>
                        Add employee
                      </button>
                    </Link>
              
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

export default AddEmployee