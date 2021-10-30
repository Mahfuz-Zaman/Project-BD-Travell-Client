import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import clientOne from '../../images/clientOne.jpg'
import clientTwo from '../../images/clientTwo.jpg'
import clientThree from '../../images/clientThree.jpg'

const Customer = () => {
    return (
        <div>
            <div className='container about-part '>
                <h2 className='fw-bold text-success text-center'>Why touring
                </h2>
                <p>
                    With getting time away from work and your ‘normal’ life becoming more and more difficult, your time off is more valuable and precious than it’s ever been. Absolutely nobody has time for mediocre experiences and modern-day touring has adapted to fit these requirements. Nowadays group tours can be anything and everything: what you do, depends solely on you.

                    Looking to trek alongside local sherpas to reach Everest Base Camp? We’ve got a tour for that. Prefer to spend ten days in Basque country learning to surf and savouring the seafood? Just filter our search menu by Spain! The point is, modern-day group travel has evolved to provide you with the kind of authentic life-enriching experiences you deserve. And at TourRadar, we consider it our primary mission to connect you to these one-of-a-kind experiences. After all, there's never been a better time to #gotouring.
                </p>
                <h2 className='custom-h2 mt-5 text-center'>Our Happy Clients

                </h2>
                <div className="row my-5">
                    <div className="col-lg-4">
                        <div className='card p-3 text-center bg-dark'>

                            <div className='mt-2'>
                                <img className='details-header' src={clientTwo} alt="" />
                            </div>
                            <p className="text-white">From Koh Lipe’s exotic landscape to the soft sandy shores of Phuket, Thailand is home to some of the most beautiful beaches in the world. Enjoy island-hopping adventures or simply sip fresh coconut milk on your favorite beach. you’ll start spicing things up in the kitchen </p>
                            <div className='mt-3'>
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-secondary' icon={faStar} />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className='card p-3 text-center bg-dark'>
                            <div className='mt-2'>
                                <img className='details-header' src={clientOne} alt="" />
                            </div>
                            <p className="text-white">As one of the most popular cuisines in the world, Thai food is beloved for its strong flavors and fresh ingredients. Let your taste buds soar by learning how to make culinary masterpieces such as rich green curry, sweet pad thai, and heavenly peanut sauce. Once you begin dabbling in the art of Thai cooking</p>
                            <div className='mt-3'>
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-secondary' icon={faStar} />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className='card p-3 text-center bg-dark'>

                            <div className='mt-2'>
                                <img className='details-header' src={clientThree} alt="" />
                            </div>
                            <p className="text-white">If wellness for you means going on a hike, then Thailand is your paradise. Explore beautiful national parks, lush jungles, and mystical mountains. Although incredible hiking can be found anywhere in Thailand, northern locations like Chiang Mai and Chiang Rai are known as some of the best.</p>
                            <div className='mt-3'>
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                                <FontAwesomeIcon className='text-warning' icon={faStar} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};
export default Customer;