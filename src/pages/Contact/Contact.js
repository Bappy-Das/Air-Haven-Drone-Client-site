import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';

import Navber from '../Shared/Navber/Navber';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <ComponentBanner
                title={'Contact Us'}
                shortInfo={""}
            ></ComponentBanner>

            <Container>
                {/* <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h1" component="div" gutterBottom>
                        This is Contact Us
                    </Typography>
                    <Typography variant="h5" component="div" gutterBottom>
                        Email: bappydas.bd51@gmail.com
                    </Typography>
                </Box> */}
                <section className='contact-body'>
                    <div class="container">
                        <div class="row">

                            <div class="contact-info">
                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                        <i class="fas fa-home"></i>
                                    </div>

                                    <div class="contact-info-content">
                                        <h4>Address</h4>
                                        <p>17/4 kunipara,<br /> Tejgaon Industrial Area,<br /> Dhaka- 1208</p>
                                        {/* <p>4671 Sugar Camp Road,<br /> Owatonna, Minnesota, <br />55060</p> */}
                                    </div>
                                </div>

                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>

                                    <div class="contact-info-content">
                                        <h4>Phone</h4>
                                        <p>0175555555555</p>
                                    </div>
                                </div>

                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>

                                    <div class="contact-info-content">
                                        <h4>Email</h4>
                                        <p>airhaven@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-form">
                                <form action="" id="contact-form">
                                    <h2>Send Message</h2>
                                    <div class="input-box">
                                        <input type="text" required="true" name="" />
                                        <span>Full Name</span>
                                    </div>

                                    <div class="input-box">
                                        <input type="email" required="true" name="" />
                                        <span>Email</span>
                                    </div>

                                    <div class="input-box">
                                        <textarea required="true" name=""></textarea>
                                        <span>Type your Message...</span>
                                    </div>

                                    <div class="input-box">
                                        <input type="submit" value="Send" name="" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </Container>
            {/* <ContactForm></ContactForm> */}

        </div>
    );
};

export default Contact;