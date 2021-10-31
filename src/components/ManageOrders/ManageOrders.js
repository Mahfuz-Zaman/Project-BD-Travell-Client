import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch("https://murmuring-earth-92815.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => {
                setReload(!reload)
                setOrder(data)
            });

    }, [reload]);
    console.log(order)
    //DELETE AN Products
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://murmuring-earth-92815.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                        const remainingProducts = order.filter(order => order._id !== id);

                        setOrder(remainingProducts);
                    }
                })
        }

    }

    function handleConfirm(id) {
        const proceed = window.confirm('Are you sure, you want to Confirm?');
        if (proceed) {
            const url = `https://murmuring-earth-92815.herokuapp.com/confirm/${id}`
            fetch(url, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload);
                    }
                });
        }

    }
    return (
        <div className='container bg-dark'>
            <h1 className='text-center my-3 bg-warning'>Total Orders: {order?.length}</h1>
            <Table striped bordered hover>
                <thead className="text-white text-center">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Place Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Update</th>
                        <th>Confirm</th>
                    </tr>
                </thead>
                {order?.map((pd, index) => (

                    <tbody className="text-white text-center">
                        <tr >
                            <td className="text-white text-center">{index}</td>
                            <td className="text-white text-center">{pd?.name}</td>
                            <td className="text-white text-center">{pd?.email}</td>
                            <td className="text-white text-center">{pd?.serviceId}</td>
                            <td className="text-white text-center">{pd?.phone}</td>
                            <td className="text-white text-center">{pd?.address}</td>
                            <td className="text-white text-center">{pd?.status}</td>
                            <td className="text-white text-center"> <button onClick={() => handleDeleteUser(pd._id)} className="btn btn-danger m-2">Cancel</button></td>
                            <td> <Link to={`orders/update/${pd._id}`}> <button className='btn mt-2 btn-success text-center' variant="success">Update</button></Link></td>
                            <td> <button onClick={() => handleConfirm(pd._id)} className="btn btn-danger m-2">Confirm</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div >
    );
};

export default ManageOrders;