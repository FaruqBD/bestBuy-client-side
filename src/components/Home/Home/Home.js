import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TopBrand from '../TopBrand/TopBrand'

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products limit="6"></Products>
            <Reviews></Reviews>
            <TopBrand></TopBrand>
            
        </div>
    );
};

export default Home;