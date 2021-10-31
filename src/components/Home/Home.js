import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Services from '../Services/Services';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Customer></Customer>
        </div>
    );
};

export default Home;