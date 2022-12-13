import React from "react";
import "./Testimonial.css"
import fast from "./pic/fast.png"
import target from "./pic/target.png"
import rocket from "./pic/rocket.png"

const Testimonial = () => {
  return (
    <div
      class="container mx-3 mx-md-auto mt-5 mb-5 col-12"
      style={{textAlign: "center"}}
    >
      <div class="hd">Why People Believe in Us</div>
      <p>
        <small class="text-muted">
          Always render more and better service than <br />
          is expected of you, no matter what your ask may be.
        </small>
      </p>
      <div class="row " style={{justifyContent: "center"}}>
        <div class="card col-md-3 col-12 me-3">
          <div class="card-content">
            <div class="card-body">
              {" "}
              <img style={{height:"90px"}} alt="" class="img" src={fast} />
              <div class="shadow"></div>
              <div class="card-title"> We're Free </div>
              <div class="card-subtitle">
                <p>
                  {" "}
                  <small class="text-muted">
                    We spent thousands of hours creating on algorithm that does
                    this for you in seconds. We collect a small fee from the
                    professional after they meet your
                  </small>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 col-12 ml-2 me-3">
          <div class="card-content">
            <div class="card-body">
              {" "}
              <img style={{height:"90px"}} alt="" class="img" src={target} />
              <div class="card-title"> We're Unbiased </div>
              <div class="card-subtitle">
                <p>
                  {" "}
                  <small class="text-muted">
                    {" "}
                    We don't accept ads from anyone. We use actual data to match
                    you who the best person for each job{" "}
                  </small>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
          <div class="card-content">
            <div class="card-body">
              {" "}
              <img style={{height:"90px"}} alt="" class="img rck" src={rocket} />
              <div class="card-title"> We Guide you </div>
              <div class="card-subtitle">
                <p>
                  {" "}
                  <small class="text-muted">
                    Buying or selling a home is often the largest transaction
                    anyone does in their life. we guide you through the process
                    so that you can be confident in reaching your dream outcome.
                  </small>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ft">
        <p class="chk">
          <small class="text-muted">Still not sure?</small>
        </p>
        <div class="btn btn-primary">Read All Testimonials</div>
      </div>
    </div>
  );
};

export default Testimonial;
