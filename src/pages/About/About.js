
import { Typography } from '@mui/material';
import React from 'react';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';
import Navber from '../Shared/Navber/Navber';

import './About.css'
const About = () => {
    return (
        <div>
            <Navber></Navber>
            <ComponentBanner
                title={'About Us'}
                shortInfo={""}
            ></ComponentBanner>

            {/* <Typography sx={{ textAlign: 'center', my: 5 }} variant="h5" component="div" gutterBottom>
                About Us Added Soon
            </Typography> */}
            <section class="about-section">
                <div class="container">
                    <div class="row">
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <span class="title">About Css3transition</span>
                                    <h2>We are Creative Tech Enthusiast working since 2015</h2>
                                </div>
                                <div class="text">At Airhaven, we are passionate about technology and the incredible possibilities that drones bring to the world. Our journey began with a vision to make cutting-edge drone technology accessible to everyone, from hobbyists and photographers to professionals and enthusiasts.</div>
                                <div class="text">
                                    Our mission is simple yet powerful: to empower individuals and businesses with the freedom to explore the skies and capture the beauty of the world from above. We believe that drones are more than just flying machines; they are tools of creativity, exploration, and innovation.
                                </div>
                                <div class="btn-box">
                                    <a href="#" class="theme-btn btn-style-one">Contact Us</a>
                                </div>
                            </div>
                        </div>

                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                {/* <div class="author-desc">
                                    <h2>Rahul Kumar Yadav</h2>
                                    <span>Web Developer</span>
                                </div> */}
                                <figure class="image-1">
                                    <a href="#" class="lightbox-image" data-fancybox="images">
                                        {/* <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /> */}
                                    </a>
                                </figure>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;