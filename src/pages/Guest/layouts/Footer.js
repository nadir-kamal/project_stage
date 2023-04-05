import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div className='p-3 text-bg-dark'>
        <div className="container ">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-secondary">© 2023 employees, All rights reserved</p>
                <Link to="/"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                  <h2 className='purple mx-3'>
                      employees
                  </h2>
                </Link>
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-white">
                    home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link px-2 text-white">
                    about
                    </Link>
                </li>

                </ul>
            </footer>
        </div>
    </div>
  );
}

export default Footer;