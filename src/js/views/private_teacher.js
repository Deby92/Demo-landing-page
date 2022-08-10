import React from "react";
import { Link } from "react-router-dom";
import "../../styles/private_teacher.css";

export default function private_teacher() {
  return (
    <>
      <div className="container padding-bottom-3x mb-2">
        <div className="row">
          <div className="col-lg-4">
            <aside className="user-info-wrapper">
              <div
                className="user-cover"
                style={{
                  backgroundImage:
                    "url(https://bootdey.com/img/Content/bg1.jpg)",
                }}
              >
                <div
                  className="info-label"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="You currently have 290 Reward Points to spend"
                >
                  <i className="icon-medal" />
                  290 points
                </div>
              </div>
              <div className="user-info">
                <div className="user-avatar">
                  <a className="edit-avatar" href="#" />
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="User"
                  />
                </div>
                <div className="user-data">
                  <h4>Daniel Adams</h4>
                  <span>Joined February 06, 2017</span>
                </div>
              </div>
            </aside>
            <nav className="list-group">
              <a className="list-group-item with-badge" href="#">
                <i className="fa fa-th" />
                Orders<span className="badge badge-primary badge-pill">6</span>
              </a>
              <a className="list-group-item" href="#">
                <i className="fa fa-user" />
                Profile
              </a>
              <a className="list-group-item" href="#">
                <i className="fa fa-map" />
                Addresses
              </a>
              <a className="list-group-item with-badge" href="#">
                <i className="fa fa-heart" />
                Wishlist
                <span className="badge badge-primary badge-pill">3</span>
              </a>
              <a className="list-group-item with-badge active" href="#">
                <i className="fa fa-tag" />
                My Tickets
                <span className="badge badge-primary badge-pill">4</span>
              </a>
            </nav>
          </div>
          <div className="col-lg-8">
            <div className="padding-top-2x mt-2 hidden-lg-up" />
            {/* Messages*/}
            <div className="comment">
              <div className="comment-body">
                <p className="comment-text">
                  Descripcion At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi.
                </p>
                <div className="comment-footer">
                  <span className="comment-meta">Daniel Adams</span>
                </div>
              </div>
            </div>
            <div className="comment">
              <div className="comment-author-ava">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt="Avatar"
                />
              </div>
              <div className="comment-body">
                <p className="comment-text">Video colocar video descritivo</p>
                <div className="comment-footer">
                  <span className="comment-meta">Jacob Hammond, Staff</span>
                </div>
              </div>
            </div>
            <div className="comment">
              <div className="comment-author-ava">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt="Avatar"
                />
              </div>
              <div className="comment-body">
                <p className="comment-text">
                  Clases Asignadas Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
            {/* Reply Form*/}
            <form>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
              </div>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                {/* Text input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example3">
                    Company name
                  </label>
                </div>
                {/* Text input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example4">
                    Address
                  </label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form6Example5"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example5">
                    Email
                  </label>
                </div>
                {/* Number input */}
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form6Example6"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example6">
                    Phone
                  </label>
                </div>
                {/* Message input */}
                <div className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    id="form6Example7"
                    rows={4}
                    defaultValue={""}
                  />
                  <label className="form-label" htmlFor="form6Example7">
                    Additional information
                  </label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form6Example8"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form6Example8">
                    {" "}
                    Create an account?{" "}
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Place order
                </button>
              </form>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <h5 className="mb-30 padding-top-1x">Leave Message</h5>
            <form method="post">
              <div className="form-group">
                <textarea
                  className="form-control form-control-rounded"
                  id="review_text"
                  rows={8}
                  placeholder="Write your message here..."
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="text-right">
                <button className="btn btn-outline-primary" type="submit">
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
