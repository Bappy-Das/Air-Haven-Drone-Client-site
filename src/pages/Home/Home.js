import { Container } from '@mui/material';
import React from 'react';
import Navber from '../Shared/Navber/Navber';

const Home = () => {
    return (
        <>
            <Navber></Navber>
            <Container>
                <h1>This is Home</h1>
            </Container>

        </>
    );
};

export default Home;