import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Topic = ({ service }) => {
    const { _id,details, name, price, image } = service;
    const smallDetails = details.substring(0,90)+"...";
    return (
        <div>
            <div className="col">
                <div className="card shadow-lg">
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img style={{ backgroundColor: "rgb(220, 168, 105)" }} src={image} className="card-img-top img-fluid" alt="..."></img>
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6>Price: ${price}</h6>
                        <p>{smallDetails}</p>

                        <Link className="btn btn-warning" to={`/services/${_id}`} >View Details<i className="fa-solid fa-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Topic;