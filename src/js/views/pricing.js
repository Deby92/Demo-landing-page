import React from "react";

export default function pricing() {
  return (
    <>
      <main className="flex-shrink-0">
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="index.html">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="faq.html">
                    FAQ
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownBlog"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <li>
                      <a className="dropdown-item" href="blog-home.html">
                        Blog Home
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-post.html">
                        Blog Post
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Portfolio
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="portfolio-overview.html"
                      >
                        Portfolio Overview
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="portfolio-item.html">
                        Portfolio Item
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Pricing section*/}
        <section className="bg-light py-5">
          <div className="container px-5 my-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Pay as you grow</h1>
              <p className="lead fw-normal text-muted mb-0">
                With our no hassle pricing plans
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              {/* Pricing card free*/}
              <div className="col-lg-6 col-xl-4">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-5">
                    <div className="small text-uppercase fw-bold text-muted">
                      Free
                    </div>
                    <div className="mb-3">
                      <span className="display-4 fw-bold">$0</span>
                      <span className="text-muted">/ mo.</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        <strong>1 users</strong>
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        5GB storage
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Unlimited public projects
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Community access
                      </li>
                      <li className="mb-2 text-muted">
                        <i className="bi bi-x" />
                        Unlimited private projects
                      </li>
                      <li className="mb-2 text-muted">
                        <i className="bi bi-x" />
                        Dedicated support
                      </li>
                      <li className="mb-2 text-muted">
                        <i className="bi bi-x" />
                        Free linked domain
                      </li>
                      <li className="text-muted">
                        <i className="bi bi-x" />
                        Monthly status reports
                      </li>
                    </ul>
                    <div className="d-grid">
                      <a className="btn btn-outline-primary" href="#!">
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing card pro*/}
              <div className="col-lg-6 col-xl-4">
                <div className="card mb-5 mb-xl-0">
                  <div className="card-body p-5">
                    <div className="small text-uppercase fw-bold">
                      <i className="bi bi-star-fill text-warning" />
                      Pro
                    </div>
                    <div className="mb-3">
                      <span className="display-4 fw-bold">$9</span>
                      <span className="text-muted">/ mo.</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        <strong>5 users</strong>
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        5GB storage
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Unlimited public projects
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Community access
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Unlimited private projects
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Dedicated support
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Free linked domain
                      </li>
                      <li className="text-muted">
                        <i className="bi bi-x" />
                        Monthly status reports
                      </li>
                    </ul>
                    <div className="d-grid">
                      <a className="btn btn-primary" href="#!">
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing card enterprise*/}
              <div className="col-lg-6 col-xl-4">
                <div className="card">
                  <div className="card-body p-5">
                    <div className="small text-uppercase fw-bold text-muted">
                      Enterprise
                    </div>
                    <div className="mb-3">
                      <span className="display-4 fw-bold">$49</span>
                      <span className="text-muted">/ mo.</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        <strong>Unlimited users</strong>
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        5GB storage
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Unlimited public projects
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Community access
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Unlimited private projects
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        Dedicated support
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check text-primary" />
                        <strong>Unlimited</strong>
                        linked domains
                      </li>
                      <li className="text-muted">
                        <i className="bi bi-check text-primary" />
                        Monthly status reports
                      </li>
                    </ul>
                    <div className="d-grid">
                      <a className="btn btn-outline-primary" href="#!">
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer*/}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright © Your Website 2022
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                Privacy
              </a>
              <span className="text-white mx-1">·</span>
              <a className="link-light small" href="#!">
                Terms
              </a>
              <span className="text-white mx-1">·</span>
              <a className="link-light small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
    </>
  );
}
