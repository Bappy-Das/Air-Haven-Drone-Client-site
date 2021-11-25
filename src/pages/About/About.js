
import { Typography } from '@mui/material';
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

            <Typography sx={{ textAlign: 'center', my: 5 }} variant="h5" component="div" gutterBottom>
                About Us Added Soon
            </Typography>

        </div>
    );
};

export default About;