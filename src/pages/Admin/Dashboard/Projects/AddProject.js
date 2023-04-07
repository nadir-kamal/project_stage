import { Link } from "react-router-dom"


function AddProject() {
  return (

  <main className="p-0 m-0">

    <section className="section profile">
      <div className="row m-0 p-0">
       
        <div className="col-xl-8 ">
          <div className="card shadow mx-3 mb-5 rounded-4 gradiant-2">
            <div className="card-body pt-3">
             
                  <form >

                    <div className="row mb-3">
                      <label
                        htmlFor="ProjectName"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        project name
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
                        <i className='bi bi-plus-circle me-2'/>
                        create project
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

export default AddProject