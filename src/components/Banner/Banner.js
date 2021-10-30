import { Carousel } from 'react-bootstrap';
import React from 'react';
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/LJyp2Yj/1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">Summer Vacation</h3>
                    <p className="text-dark fw-bold">Summer is around the corner and it's time to picture your Summer Vacation this year. What do you feel like? A fun city trip to a sunshine metropolis like Miami or Los Angeles? Or are you more into the laid back beach vacation in some luxury Caribbean location? We've got them all – check out our great deals below and choose from a variety of top hotels around the world and SAVE UP TO 35%! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ZYwCnTJ/2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-white fw-bold">DUBAI SPECIAL PACKAGES</h3>
                    <p className="text-white fw-bold">Rate is subject to the prevailing tax and service charge. An additional Tourism Dirham of AED 20 will be applied per bedroom, per night to your bill. For Apartments, the Tourism Dirham charges are: AED 10 per day for Studio</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://i.ibb.co/6wr36Hj/3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="text-white fw-bold">Adventure in Iceland</h3>
                    <p className="text-white fw-bold">Start and end in Reykjavik! With the Adventure tour Adventure in Iceland, you have a 6 days tour package taking you through Reykjavik, Iceland and 12 other destinations in Iceland. Adventure in Iceland includes accommodation in a hotel as well as an expert guide, meals, transport.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Banner;