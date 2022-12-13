import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle("Services")

    useEffect(() => {
        fetch('https://photography-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center'>Services</h2>
            <div className='col-12 col-sm-8 col-md-9 col-lg-9 mx-auto mb-5'>
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-4 container m-auto'>
                    {services.map(service => <Service key={service._id} service={service}></Service>)}
                </div>
            </div>
        </div>
    );
};

export default Services;