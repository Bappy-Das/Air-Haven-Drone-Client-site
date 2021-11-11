import { Container } from '@mui/material';
import React from 'react';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';

import Navber from '../Shared/Navber/Navber';

const About = () => {
    return (
        <div>
            <Navber></Navber>
            <ComponentBanner
                title={'About Us'}
                shortInfo={""}
            ></ComponentBanner>
            <ComponentBanner
                title={'About Us'}
                shortInfo={""}
            ></ComponentBanner>
            <ComponentBanner
                title={'About Us'}
                shortInfo={""}
            ></ComponentBanner>
            <ComponentBanner
                title={'About Us'}
                shortInfo={""}
            ></ComponentBanner>
            <Container>
                <h1>This is about us</h1>
            </Container>

        </div>
    );
};

export default About;