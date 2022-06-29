import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Register1() {
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
          style={{ width: "25%" }}
        ></div>
      </div>
      <div class="form-group mt-5 center-block">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Age
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="form-group mt-3 ">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Weight (kg)
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput2"
        />
      </div>
      <div class="form-group mt-3 ">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Height (cm)
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput3"
        />
      </div>
      <div class="form-group mt-3 ">
        <label for="exampleFormControlInput1" className="mb-1 text-label-title">
          Estimate Body-Fat%
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput4"
        />
      </div>
      <Link to="/register2">
        {" "}
        <Button className="button-reg-1 mt-5">Next</Button>{" "}
      </Link>
    </>
  );
}

export default Register1;
