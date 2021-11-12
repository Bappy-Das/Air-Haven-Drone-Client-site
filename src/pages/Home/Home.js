
import React from 'react';
import Navber from '../Shared/Navber/Navber';


import Banner from './Banner/Banner';
import Products from './Products/Products';
import Review from './Review/Review';


const Home = () => {
    return (
        <>
            <Navber></Navber>
            {/* <Ban2></Ban2> */}
            <Banner></Banner>
            <Products></Products>
            <Review></Review>


        </>
    );
};

export default Home;