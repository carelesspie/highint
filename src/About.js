import React from "react";
import arnold from "./components/arnold.jpg";
import body from "./components/body.jpg";
import power from "./components/power.jpg";
function About() {
  return (
    <>
      <h1 className="text-center mt-5">The Science Of Success</h1>
      <h3 className="fs-5 text-center text-secondary mt-3 mb-5">
        SAFE, EFFECTIVE, TRAINING THAT YIELDS UNDENIABLE RESULTS
      </h3>
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title fw-bold mb-3">Body Building</h2>
          <p className="card-text">
            Bodybuilding is the use of progressive resistance exercise to
            control and develop one's muscles by muscle hypertrophy for
            aesthetic purposes. It is distinct from similar activities such as
            powerlifting because it focuses on physical appearance instead of
            strength. An individual who engages in this activity is referred to
            as a bodybuilder. In professional bodybuilding, competitors appear
            in lineups and perform specified poses (and later individual posing
            routines) for a panel of judges who rank them based on symmetry,
            muscularity, size, conditioning, posing, and stage presentation.
          </p>
          <p className="card-text">
            <small className="text-muted">
              Image of 3 Time Mr.Olympia Classic Winner, Chris Bumstead
            </small>
          </p>
        </div>
        <img src={body} className="card-img-bottom img-fluid" alt="..." />
      </div>
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title fw-bold mb-3">Power Lifting</h2>
          <p className="card-text">
            Powerlifting is a strength sport that consists of three attempts at
            maximal weight on three lifts: squat, bench press, and deadlift. As
            in the sport of Olympic weightlifting, it involves the athlete
            attempting a maximal weight single-lift effort of a barbell loaded
            with weight plates. Powerlifting evolved from a sport known as "odd
            lifts", which followed the same three-attempt format but used a
            wider variety of events, akin to strongman competition. Eventually
            odd lifts became standardized to the current three.
          </p>
          <p className="card-text">
            <small className="text-muted">
              Image of 2017 World's Strongest Man Competition, Eddie Hall
            </small>
          </p>
        </div>
        <img src={power} className="card-img-bottom img-fluid" alt="..." />
      </div>
      <h2 className="fw-bold mt-5">Meet The Founder</h2>
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <img src={arnold} className="img-team img-fluid p-2" alt="" />
          </div>
          <div className="col-md-8">
            <h2 className="card-title text-danger fw-bold fs-2 mt-2">
              Arnold Schwarzenegger
            </h2>
            <p className="card-text text-secondary mt-4 fs-5 text-black">
              Arnold Schwarzenegger - from Ottawa served as both the Head
              Physical Therapist and Assistant Strength Coach for the New York
              Mets and is now one of the world's most trusted authorities on
              science based training and performance. The most accomplished
              musicians, actors, athletes, teams and well over 11 million
              followers rely on his hands-on experience and expertise to get
              them looking, feeling and moving like their best selves.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
