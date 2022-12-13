import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { _id, name, image, details, price } = service;
    const smallDetails = details.substring(0,90)+"...";
    return (
        <div className="col">
            
            <div className="card shadow-lg">
            <PhotoProvider>
                <PhotoView src={image}>
                <img src={image} className="card-img-top img-fluid" alt="..."></img>
                </PhotoView>
            </PhotoProvider>
                <div className="card-body">
                    <h4 className="card-title mb-2">${price}</h4>
                    <h4 className="card-title mb-2">{name}</h4>
                    <p> {smallDetails} </p>
                    <Link to={`/services/${_id}`} className="btn btn-warning ">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;

