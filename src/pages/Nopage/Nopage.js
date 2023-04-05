import { Link } from "react-router-dom";

import React from 'react'

function Nopage() {
  return (
    <div className="container">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1 style={{color:"#6f42c1", fontSize:"250px"}}>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <Link to="/" className="btn btn-purple text-light">
              Back to home
            </Link>
            <img
            width={550}
            src="img/Not-found.svg"
            className="img-fluid py-5"
            alt="Page Not Found"
            />
        </section>
        </div>

  )
}

export default Nopage