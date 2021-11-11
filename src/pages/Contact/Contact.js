import { Container } from '@mui/material';
import React from 'react';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';

import Navber from '../Shared/Navber/Navber';

const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <ComponentBanner
                title={'Contact Us'}
                shortInfo={""}
            ></ComponentBanner>
            <ComponentBanner
                title={'Contact Us'}
                shortInfo={""}
            ></ComponentBanner>
            <ComponentBanner
                title={'Contact Us'}
                shortInfo={""}
            ></ComponentBanner>
            <ComponentBanner
                title={'Contact Us'}
                shortInfo={""}
            ></ComponentBanner>
            <Container>
                <h1>This is Contact us</h1>
            </Container>

        </div>
    );
};

export default Contact;