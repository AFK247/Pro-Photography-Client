import React from 'react';
import main from "./pic/main.jpg"

const Section = () => {
    return (
        <div className="text-center card text-white col-12 border-0 mt-0">
            <img src={main} className="card-img img-fluid" alt="..."></img>
            <div className="d-flex flex-column justify-content-center card-img-overlay ">
                <h1 style={{ fontSize: "3vw", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
                    className="card-title text-white mt-4">Are You Ready?</h1>
                <p style={{ fontSize: "2vw" }} className="card-text">What are you waiting for?</p>
                <div className="d-flex justify-content-center">
                    <h4 style={{ fontSize: "2vw", color: 'yellow' }}>Check Out Our Services</h4>
                </div>
            </div>
        </div>
    );
};

export default Section;