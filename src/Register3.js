import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Register3() {
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
          style={{ width: "75%" }}
        ></div>
      </div>
      <h4 className="fw-bold mt-5 fs-3 mb-5">
        What Is Your Training Focus? (Specify Range)
      </h4>
      <div className="d-flex ">
        <h5>Only Burn Fat</h5>
        <input
          type="range"
          class="form-range mx-5"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        ></input>
        <h5>Build Muscle</h5>
      </div>
      <Link to="/finalsubmission">
        {" "}
        <Button className="button-reg-1 mt-5">Next</Button>{" "}
      </Link>
    </>
  );
}

export default Register3;
