import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

//Review Details
const MyReviewDetails = ({ detail, handleDelete }) => {
    useTitle("MyReviewDetails");
    const { _id, review, serviceName } = detail;
    console.log(detail);

    return (
        <div className='container'>
            <div className="row mt-4">
                <div className="col-sm-4 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{serviceName}</h5>
                            <p className="card-text">{review}</p>
                           
                            <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                            <Link to="/updateReview" className='btn btn-primary ms-4'>Edit</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyReviewDetails;