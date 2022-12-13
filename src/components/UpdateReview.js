import React from 'react';
import useTitle from '../hooks/useTitle';

const UpdateReview = () => {
    useTitle("UpdateReview")
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <form className="mb-md-2 mt-md-2 ">

                                        <h2 className="fw-bold mb-2 text-uppercase">Update Review</h2>
                                        <p className="text-white-50 mb-5">Update your Review</p>

                                        <div className="form-outline form-white mb-4">
                                            <textarea placeholder='Your Review' className='w-100'></textarea>
                                        </div>
                                        <button className="btn btn-outline-warning mb-4 px-4" type="submit">Update</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateReview;