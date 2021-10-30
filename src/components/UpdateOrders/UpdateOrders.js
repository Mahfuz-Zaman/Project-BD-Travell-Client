import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import updateImg from "./../../images/update.jpg"

const UpdateOrders = () => {
    const { productId } = useParams();
    const [isUpdate, setIsUpdated] = useState(null);
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://murmuring-earth-92815.herokuapp.com/orders/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {

        fetch(`https://murmuring-earth-92815.herokuapp.com/orders/${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                    alert("SuccessFully Updated")

                } else {
                    setIsUpdated(false);

                }
            });
    };
    return (


        <Container >
            <Row >
                <Col>
                    <div className="container text-center my-5 py-5 bg-info">
                        <h1>Updated Your Information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                type="number"
                                className="p-2 m-2"
                                placeholder='Phone'
                                defaultValue={product?.phone}
                                {...register("phone")}
                                required
                            />

                            <input
                                className="p-2 m-2"
                                type="text"
                                placeholder='Address'
                                defaultValue={product?.address}
                                {...register("address", { required: true })}
                                required
                            />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <input className="btn btn-success w-25 text center my-5 " type="submit" value="Update" />
                        </form>
                    </div>
                </Col>

                <Col>
                    <div>
                        <img className="img-fluid" src={updateImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default UpdateOrders;