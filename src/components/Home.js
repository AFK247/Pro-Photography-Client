import React, { useEffect, useState } from 'react';
import Section from './Section';
import Topic from './Topic';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Testimonial from './Testimonial';


//Home Page
const Home = () => {
    useTitle("Home")
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://photography-server-side.vercel.app/services3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (

        <div>
            <Section></Section>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 p-3 container m-auto">
                {
                    services.map(service => <Topic key={service.id} service={service} />)
                }
            </div>


            <div className='d-flex justify-content-center my-5'>
                <Link to="/services" className='btn btn-info'>See All</Link>
            </div>

            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;