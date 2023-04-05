import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link className="logo d-flex align-items-center w-auto text-decoration-none">

                    <img src="img/logo-purple.png" alt="employees" width={40}/>
                    <h3 className="text-black ms-1" >employees</h3>

                  </Link>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-3 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username &amp; password to login
                      </p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate="" action="post">
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourEmail"
                            required=""
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            defaultValue="true"
                            id="rememberMe"
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        
                        <Link to="/admin/hi">
                          <button className="btn-purple btn btn-primary w-100" type="submit">Login</button>
                        </Link>
                        
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <a href="#">Create an account</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

  )
}

export default Login