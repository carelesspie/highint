import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import main from "./components/main.jpg";

function Home() {
  return (
    <>
      <div class="space-lg"></div>
      <div className="d-flex">
        <div className="container mx-0 p-0">
          <h3 className="text-uppercase fw-bold fs-4 mx-0">Look Your Best</h3>
          <h1 className="fw-bold mt-4 p-0 mx-0">
            {" "}
            The Journey To <br /> A Healthier <br /> You Begins <br /> Now
          </h1>
          <Link to="/register">
            {" "}
            <Button variant="danger" className="button-main">
              Start Now
            </Button>{" "}
          </Link>
        </div>
        <img className="img-main" src={main} alt="" />
      </div>
    </>
  );
}

export default Home;
