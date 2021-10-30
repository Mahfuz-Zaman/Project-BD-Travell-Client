import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import addService from "./../../images/addService.jpg"


const AddServices = () => {
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = user.email;
        fetch("https://murmuring-earth-92815.herokuapp.com/addServices", {
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
        <div>
            <Row>
                <Col>
                    <div>

                        <h2 className='custom-h1 text-center bg-warning mb-0'>Choose To Add Your Expected Event</h2>
                        <div className='text-center bg-dark mt-0'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input required className='p-3 m-2' type='text' placeholder='Title' {...register("title")} />
                                <br />
                                <input required className='p-3 m-2' type='text' placeholder='Image-url' {...register("image")} />
                                <br />
                                <input required className='p-3 m-2' type='text' placeholder='Description' {...register("desc")} />
                                <br />
                                <input required className='p-3 m-2' type='number' placeholder='Price' {...register("price")} />
                                <br />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input className='btn btn-success ms-2 my-5' value='Include Service' type="submit" />
                            </form>
                        </div>
                    </div></Col>
                <Col className="bg-dark" >
                    <img className="mt-5" src={addService} alt="" />
                </Col>
            </Row>
        </div>

    );
};

export default AddServices;