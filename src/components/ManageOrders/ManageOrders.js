import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch("https://murmuring-earth-92815.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [order]);


    //Delete Part

    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-earth-92815.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products]);

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
                        const remainingProducts = orders.filter(order => order._id !== id);
                        setOrders(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className='container '>
            <h1 className='text-center my-3 bg-warning'>Total Orders: {order?.length}</h1>
            <Table striped bordered hover className="text-white bg-dark">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Place Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {order?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td className="text-white">{index}</td>
                            <td className="text-white">{pd?.name}</td>
                            <td className="text-white">{pd?.email}</td>
                            <td className="text-white">{pd?.serviceId}</td>
                            <td className="text-white">{pd?.phone}</td>
                            <td className="text-white">{pd?.address}</td>
                            <td className="text-white"><Button variant="danger" onClick={() => handleDeleteUser(pd._id)} >Delete</Button>
                                <Link to={`orders/update/${pd._id}`}> <Button variant="success">update</Button></Link> </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrders;