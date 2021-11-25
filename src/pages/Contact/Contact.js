import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';

import Navber from '../Shared/Navber/Navber';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <ComponentBanner
                title={'Contact Us'}
                shortInfo={""}
            ></ComponentBanner>

            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h1" component="div" gutterBottom>
                        This is Contact Us
                    </Typography>
                    <Typography variant="h5" component="div" gutterBottom>
                        Email: bappydas.bd51@gmail.com
                    </Typography>
                </Box>

            </Container>
            {/* <ContactForm></ContactForm> */}

        </div>
    );
};

export default Contact;