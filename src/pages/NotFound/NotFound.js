import { Container } from '@mui/material';
import React from 'react';
import Navber from '../Shared/Navber/Navber';
import notFound from '../../images/notfound.gif'
import { Box } from '@mui/system';
import Footer from '../Shared/Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Navber></Navber>
            <Container>
                <Box item xs={12} md={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2
                    }}>
                    <img style={{ height: "50vh", width: "50vh" }} className="img-fluid" src={notFound} alt="" srcSet="" />


                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;