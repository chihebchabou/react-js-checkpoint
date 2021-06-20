import './App.css';
import react from './react.svg';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
          <a href="#" className="navbar-brand">React.js Bootcamp</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <button className="btn btn-outline-warning ms-auto" data-bs-toggle="modal" data-bs-target="#enroll">Sign Up</button>
          </div>
        </div>
      </nav>

      <section className=" p-5  pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="row">
            <div className="col-md-7 pb-5">
            <h1>Become a <span className="text-warning">React.js Developer</span></h1>
              <p className="lead my-4">
                Our goal is to get you comfortable with React.js so you can start building more robust projects.
              </p>
              <p></p>
            </div>
            <div className="col-md-5 pb-5">
              <img src={react} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="enroll" tabIndex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="enrollLabel">Join Us</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="lead">Fill out this form to sign up</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className="form-label">First Name:</label>
                  <input type="text" className="form-control" id="first-name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="last-name" className="form-label">Last Name:</label>
                  <input type="text" className="form-control" id="last-name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" required />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
