
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="img/Hero.jpg"
            className="hero-img rounded d-block mx-lg-auto img-fluid"
            alt="employees"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 title-hero fw-bold lh-1 mb-5">
            Employees management system
          </h1>
          <p className="lead mb-2">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system, extensive
            prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to='/'>
              <button type="button" className="btn btn-primary btn-purple rounded-pill btn-lg px-4 me-md-2">
                get started
              </button>
            </Link>
            <Link to='/about'>
              <button type="button" className="btn btn-outline-secondary rounded-pill btn-lg px-4">
                about
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>


    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">New functionalities</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h3 className="fs-2">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add
            onto it with another sentence and probably just keep going until we run
            out of words.
          </p>
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Call to action
          </a>
        </div>
        <div className="feature col">
          <h3 className="fs-2">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add
            onto it with another sentence and probably just keep going until we run
            out of words.
          </p>
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Call to action
          </a>
        </div>
        <div className="feature col">
          <h3 className="fs-2">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll add
            onto it with another sentence and probably just keep going until we run
            out of words.
          </p>
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Call to action
          </a>
        </div>
      </div>
    </div>
  
  
  </>

  );
}

export default Home;