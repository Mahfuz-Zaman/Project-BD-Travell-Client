import React from 'react';
import './NotFound.css'
import notFound from '../../images/pageNotFound.jpg'
const NotFound = () => {
    return (
        <div>
            <img className='not-found' src={notFound} alt="" />

        </div>
    );
};

export default NotFound;