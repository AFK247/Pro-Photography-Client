import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    useTitle("AddService"); //React Helmet
    const notify = () => toast("Succesfully Added New Survice");

    function handleSubmit(event) {
        
        event.preventDefault();
        const form = event.target;

        const serviceName = form.name.value;
        const photoURL = form.photo.value;
        const details = form.details.value;
        const price = form.price.value;
        


        const newService = {
            name: serviceName,
            price: price,
            details: details,
            image: photoURL
        }
        fetch(`https://photography-server-side.vercel.app/addservice`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newService)
    })
        .then(res => res.json())
        .then(newData => {
            if(newData.acknowledged){
                console.log(newData);
                notify();
            }
            
            
        })
        .catch(er => console.error(er));
    }
   

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">

                                        <h2 className="fw-bold mb-2 text-uppercase">New Service</h2>
                                        <p className="text-white-50 mb-5">Please enter your Service Name, Photo URL, and Service Details</p>

                                        <div className="form-outline form-white mb-4">
                                            <input placeholder='Service Name' type="text" name="name" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input placeholder='Photo URL' type="text" name="photo" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input placeholder='Price' type="text" name="price" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <textarea placeholder='Details' type="text" name="details" className="form-control form-control-lg"></textarea>
                                        </div>

                                        <button  className="btn btn-outline-warning px-4" type="submit">Add Sevice</button>
                                        <ToastContainer />
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

export default AddService;