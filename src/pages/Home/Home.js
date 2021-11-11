
import React from 'react';
import Navber from '../Shared/Navber/Navber';

import Banner from './Banner/Banner';
import Products from './Products/Products';
// import Ban2 from './Banner/Ban2';

const Home = () => {
    return (
        <>
            <Navber></Navber>
            {/* <Ban2></Ban2> */}
            <Banner></Banner>
            <Products></Products>

        </>
    );
};

export default Home;