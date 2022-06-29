import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Register() {
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
          style={{ width: "0%" }}
        ></div>
      </div>
      <div class="form-group mt-5  center-block">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          First Name
        </label>
        <input type="text" class="form-control" id="exampleFormControlInput1" />
      </div>
      <div class="form-group mt-3 ">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Last Name
        </label>
        <input type="text" class="form-control" id="exampleFormControlInput2" />
      </div>
      <div class="form-group mt-3 ">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Email Address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput3"
        />
      </div>
      <div class="form-group mt-3 ">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Phone Number
        </label>
        <input type="tel" class="form-control" id="exampleFormControlInput4" />
      </div>
      <Link to="/register1">
        {" "}
        <Button className="button-reg-1 mt-5">Next</Button>{" "}
      </Link>
    </>
  );
}

export default Register;
