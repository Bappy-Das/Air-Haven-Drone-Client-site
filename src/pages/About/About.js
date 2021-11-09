import { Container } from '@mui/material';
import React from 'react';
import Navber from '../Shared/Navber/Navber';

const About = () => {
    return (
        <div>
            <Navber></Navber>
            <Container>
                <h1>This is about us</h1>
            </Container>
        </div>
    );
};

export default About;