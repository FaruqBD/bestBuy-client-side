import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tZNMYLB/banner1.jpg"
                        alt="Banner 1"
                    />
                    <Carousel.Caption>
                        <h1 className="pb-md-5">Make Your Journey Luxary</h1>
                        <Link className="px-3" to={`/`}>
                            <button className="btn btn-warning btn-lg mb-md-5">Buy Now</button>
                        </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/1670n12/banner2.jpg"
                        alt="Banner 2"
                    />

                    <Carousel.Caption>
                        <h1 className="pb-md-5">Amazing Tour With Luxary Car</h1>
                        <Link className="px-3" to={`/`}>
                            <button className="btn btn-warning btn-lg mb-md-5">Buy Now</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/B64xD3b/banner3.jpg"
                        alt="Banner 3"
                    />

                    <Carousel.Caption>
                        <h1 className="pb-md-5">Buy Your Best Company</h1>
                        <Link className="px-3" to={`/`}>
                            <button className="btn btn-warning btn-lg mb-md-5">Buy Now</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;