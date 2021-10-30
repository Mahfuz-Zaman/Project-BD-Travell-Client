import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const AddServices = () => {
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.email = user.email;
        console.log(data);
        fetch("http://localhost:5000/addServices", {
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

            <h2 className='custom-h1 text-center bg-warning mb-0'>Choose To Add Your Expected Event</h2>
            <div className='text-center bg-info mt-0'>
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
        </div>
    );
};

export default AddServices;