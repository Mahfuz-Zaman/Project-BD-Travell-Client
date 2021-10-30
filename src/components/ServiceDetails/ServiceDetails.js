import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serv, setServ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServ(data))
    }, [])

    const findServ = serv.find(tour => tour._id == serviceId);


    /*  form Part */

    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.email = user.email;
        data.name = user.displayName;
        data.serviceId = findServ?.title;


        console.log(data);
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('added successfully');
                    reset();
                }
            });
    };


    return (
        <div className='container'>
            <div className="row container">
                <div className="col-md-6">

                    <img className='w-100 mt-5' src={findServ?.image} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 className='mt-5 fw-bold text-warning'>{findServ?.title}</h1>
                    <hr />
                    <h5 className='mt-2'>{findServ?.desc}</h5>


                </div>
            </div>



            {/* Form */}
            <div className='form-part'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required className='p-2 m-2' placeholder='address' {...register("address")} />
                    <br />


                    <input required className='p-2 m-2' placeholder='phone number' type='number' {...register("phone")} />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className='className="btn btn-warning fw-bold mt-3"' value='PLACE ORDER' type="submit" />
                </form>
            </div>



        </div>
    );
};
export default ServiceDetails;