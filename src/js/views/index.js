import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <div className="card mb-4 bg-transparent">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1657299143437-b63ce1fc01aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">Contento señor contento</h5>
              <p className="card-text">
                Aprende desde casa con clases particulares online Elige entre
                miles de profesores en línea de todo el mundo y recibe clases
                orientadas a tu objetivo.
              </p>
              <p className="card-text">
                <a className="btn btn-dark" href="#register_here">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  card-group */}
      <div className="row row-cols-1 row-cols-md-2 g-4" id="">
        <div className="col">
          <div className="card bg-transparent">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeOVfERUx09oXylteH6YHzHOgEpo4slDQ-w&usqp=CAU" className="card-img-top" style={{ width: 614, height:150 }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tu eliges</h5>
              <p className="card-text">
                Te ayudamos a buscar tu clase, segun tus intereses y desarrollamos la mejor lista de clases personalizadas para ti, nos adaptamos a tus horarios y nuestros guias te dan una evaluacion, solo debes dejar un video mostrando tus progresos.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-transparent">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeOVfERUx09oXylteH6YHzHOgEpo4slDQ-w&usqp=CAU" className="card-img-top" style={{ width: 614, height:150 }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Primera clase sin costo</h5>
              <p className="card-text">
                Puedes escoger una clase sin costo para ti, asi puedes decidir si quieres seguir con la misma clase o cambiarte a otra clase de tu interes antes de que se te haga algún cobro adicional. No te arrepentiras!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* register */}
      <section
        className="vh-100 bg-transparent  my-3" id="register_here"
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-6 col-md-6 col-md-4">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form>
                      <div className="d-flex flex-row align-items-center mb-4"><i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg" placeholder="Your Name"
                        />
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4"><i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg" placeholder="E-mail"
                        />
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4"><i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg" placeholder="Password"
                        />
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4 "><i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg" placeholder="Repeat Password"
                        />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
