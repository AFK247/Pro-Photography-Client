import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Review from "./Review";
import camera from "./pic/camera.png";
import useTitle from "../hooks/useTitle";

const ServiceDetails = () => {
  useTitle("ServiceDetails");
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const { _id, name, details, image, price } = service;
  // console.log(code);
  // console.log(service);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://photography-server-side.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((er) => console.error(er));
  }, [_id]);

  function handelSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const p_review = form.review.value;

    const person = {
      service: _id,
      customer_id: user.uid,
      serviceName: name,
      customer: user.displayName,
      email: user.email,
      review: p_review,
      image: user.photoURL,
    };
    fetch(`https://photography-server-side.vercel.app/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(person),
    })
      .then((res) => res.json())
      .then((newData) => {
        if (newData.acknowledged) window.location.reload(false);
      })
      .catch((er) => console.error(er));
  }

  return (
    <div className="container p-4">
      <div className="d-flex flex-column flex-lg-row">

        <div className="w-lg-50 w-100 p-5 me-4">
          <img src={image} className="img-fluid rounded " alt="" />
        </div>

        <div className="w-lg-50 w-100">
          <h5>Thank u for choosing {name}</h5>

          <div className="d-flex">
            <div className="mt-auto">
              <ul class="list-inline small">
                <li class="list-inline-item m-0">
                  <i class="fa fa-star text-success"></i>
                </li>
                <li class="list-inline-item m-0">
                  <i class="fa fa-star text-success"></i>
                </li>
                <li class="list-inline-item m-0">
                  <i class="fa fa-star text-success"></i>
                </li>
                <li class="list-inline-item m-0">
                  <i class="fa fa-star text-success"></i>
                </li>
                <li class="list-inline-item m-0">
                  <i class="fa fa-star-o text-success"></i>
                </li>
              </ul>
              <h6>
                Price: <span className="text-warning">{price} $</span>
              </h6>
              <h6>Total Rating: 4</h6>
            </div>
            <img src={camera} alt="" />
          </div>

          <p>
            <h6 className="text-start">Details:</h6> {details}
          </p>
        </div>

      </div>

      <div>
        <h2 className="mt-5 text-center">Review Section</h2>
        <div className="row row-cols-1 row-cols-md-2 gx-5">
          {data.map((feed) => (
            <Review feed={feed}></Review>
          ))}
        </div>

        {user?.email ? (
          <form className="mt-5 text-center" onSubmit={handelSubmit}>
            <h3 className="text-primary">Write your Review</h3>
            <textarea className="col-6 border border-primary rounded-4 p-3" rows="5" placeholder="The site is very Gooooooood" name="review"></textarea>
            <br></br>
            <button className="mt-3 btn  fw-bold btn-outline-primary" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <h2 className="text-secondary mt-4">
            U need to{" "}
            <Link to="/login" className="text-danger">
              Log In
            </Link>{" "}
            to add review
          </h2>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
