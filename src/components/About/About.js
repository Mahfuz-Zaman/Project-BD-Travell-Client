import React from 'react';
import './About.css'
import aboutImg from '../../images/about.jpg'

const About = () => {
    return (
        <div>
            <div className='container about-part '>
                <div className="row">

                    <div className="col-lg-6">
                        <div className=' ms-5 mt-5 '>
                            <h1 className='fw-bold text-success'>Why You Choose US</h1>
                            <h2 className='custom-h2 mt-5'>We Provide The Best Deals World Wide
                            </h2>
                            <p className='text-info fw-bold mt-4'>We’re an inquisitive team of creative problem solvers, tech wizards, and passionate travellers who work in tandem to bring life-changing touring experiences to the world. We’re proud to be leading the charge in bringing the touring industry online. If you love technology and travel, welcome home.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 container">
                        <img className="w-100" src={aboutImg} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};
export default About;