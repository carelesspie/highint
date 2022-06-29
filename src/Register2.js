import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Register2() {
  return (
    <>
      <h4 className="text-center mt-3 text-register">
        Complete This Form And Sign-Up
      </h4>
      <div class="progress mt-4" style={{ height: "10px" }}>
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "50%" }}
        ></div>
      </div>
      <h4 className="fw-bold mt-5 fs-3">What Is Your Experience Level?</h4>
      <div className="d-flex flex-column mt-5">
        <div className="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fs-5" for="flexRadioDefault1">
            Beginner - I Have Never Trained
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fs-5" for="flexRadioDefault1">
            Novice - I Have Some Experience
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fs-5" for="flexRadioDefault1">
            Intermediate - Trained For A Year
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fs-5" for="flexRadioDefault1">
            Advanced - Trained For Over A Year
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label fs-5" for="flexRadioDefault1">
            Elite - I Perform At The Highest Levels
          </label>
        </div>
      </div>
      <Link to="/register3">
        {" "}
        <Button className="button-reg-1 mt-5">Next</Button>{" "}
      </Link>
    </>
  );
}

export default Register2;
