import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./MyOrders.css"

import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-earth-92815.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, [user.email, events]);



    //Delete Part

    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-earth-92815.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products]);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://murmuring-earth-92815.herokuapp.com/allOrders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = orders.filter(order => order._id !== id);
                        setOrders(remainingProducts);

                    }
                })
        }

    }
    return (
        <div className='container'>
            <h1 className='text-center my-3 bg-warning'>My Orders: {events?.length}</h1>
            <Table striped bordered hover className="bg-dark text-white">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Place Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {events?.map((pd, index) => (
                    <tbody >
                        <tr >
                            <td className="text-white">{index}</td>
                            <td className="text-white">{pd?.name}</td>
                            <td className="text-white">{pd?.email}</td>
                            <td className="text-white">{pd?.serviceId}</td>
                            <td className="text-white">{pd?.phone}</td>
                            <td className="text-white">{pd?.address}</td>
                            <td> <button onClick={() => handleDeleteUser(pd._id)} className="btn btn-danger text-white">cancel</button> </td>


                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};
export default MyOrders;