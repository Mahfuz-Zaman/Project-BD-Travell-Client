import React from 'react';
import { Link } from 'react-router-dom';
const Service = (props) => {
    const { title, price, image, desc, _id } = props.service;
    const url = `/servicedetails/${_id}`
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">$ {price}</p>
                    </div>
                    <div className="text-center">
                        <Link to={url}><div className="btn btn-success fw-bold">BOOK NOW</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;