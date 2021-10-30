import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-earth-92815.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container py-5'>
            <div className='container about-part'>
                <h2 className='fw-bold text-success text-center my-5'>We Offered You Some Of Our Services
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)

                    }


                </div>
            </div>
        </div>
    );
};

export default Services;