import { Link } from "react-router-dom"
function Task() {

  return (
    <div className="container m-0 p-0">

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mb-3">
          <div className="col">
            <div className="card shadow rounded-4 gradiant-2 m-0 p-0">
                <div className='card-body d-flex justify-content-between my-1'>
                  <h4 className="card-title ms-5">Task : <span className="text-purple h4">Front end</span> </h4>
                </div>
            </div>
          </div>
        </div>

      <div className="col-12">
        <div className="card shadow rounded-4 gradiant-2 p-3 m-0">
          <div className="card-body">

              <ul className="nav nav-tabs nav-tabs-bordered">

                <li className="nav-item">
                  <button
                    className="nav-link active text-purple"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                  >
                    Task details
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link text-purple"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                  >
                    Edit task
                  </button>
                </li>

              </ul>
              
              <div className="tab-content pt-2">
                <div
                  className="tab-pane fade show active profile-overview"
                  id="profile-overview"
                >
                  <h5 className="card-title text-purple mt-3">Description</h5>
                  <p className="small fst-italic">
                    Sunt est soluta temporibus accusantium neque nam maiores
                    cumque temporibus. Tempora libero non est unde veniam est
                    qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                    perspiciatis odit. Fuga sequi sed ea saepe at unde.
                  </p>
                  <h5 className="card-title text-purple">Task details</h5>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">start date</div>
                    <div className="col-lg-9 col-md-8">05-06-2023</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">finish date</div>
                    <div className="col-lg-9 col-md-8">15-06-2023</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">responsable</div>
                    <div className="col-lg-9 col-md-8">Abdelilah Kamal</div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">participants</div>
                    <div className="col-lg-9 col-md-8">
                      Abdelilah lahjaji <br/>
                      kamal nadir <br/>
                      ismail aithsaine <br/>
                      ismail debbarh <br/>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade profile-edit pt-3"
                  id="profile-edit"
                >

                  <form >

                    <div className="row mb-3">
                      <label
                        htmlFor="ProjectName"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        task name
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="ProjectName"
                          type="text"
                          className="form-control"
                          id="ProjectName"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="description"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        description
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="description"
                          className="form-control"
                          id="description"
                          style={{ height: 120 }}
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
                        htmlFor="startDate"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        start date
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="startDate"
                          type="date"
                          className="form-control"
                          id="startDate"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="finishDate"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        finish date
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="finishDate"
                          type="date"
                          className="form-control"
                          id="finishDate"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="participants"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        participants
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="participants"
                          type="text"
                          className="form-control"
                          id="participants"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                    <Link to='/admin/projects/details'>
                      <button type="submit" className="btn btn-outline-primary rounded-pill my-3">
                        Save changes
                      </button>
                    </Link>
                    </div>

                  </form>

                </div>

                <div
                  className="tab-pane fade pt-3"
                  id="profile-change-password"
                >
                </div>
              </div>
              {/* End Bordered Tabs */}
            </div>
          </div>
        </div>


 



    </div>

  )
}

export default Task