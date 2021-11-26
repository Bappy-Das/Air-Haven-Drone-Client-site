
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductField from '../ProductField/ProductField';
import Navber from '../Shared/Navber/Navber';


import Banner from './Banner/Banner';
import Ban2 from './Banner/Ban2';
import Products from './Products/Products';
import Review from './Review/Review';
import Support from './Support/Support';


const Home = () => {


    return (
        <>
            <Navber></Navber>
            <Ban2></Ban2>
            {/* <Banner></Banner> */}

            <Products></Products>

            <Box>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'center', color: '#6CA8F2' }} variant="h4" gutterBottom component="div">
                    Explore DJI Products in Different Fields
                </Typography>
            </Box>
            <ProductField></ProductField>
            <Review></Review>

            <Support></Support>


        </>
    );
};

export default Home;