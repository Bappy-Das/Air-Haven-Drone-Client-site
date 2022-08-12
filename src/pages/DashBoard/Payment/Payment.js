import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payment = () => {
    return (
        <div>
            <h1>This is pay Section</h1>
            <h3>Payment Sectoin conning</h3>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="div" gutterBottom>
                    This is Contact Us
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    Email: bappydas.bd51@gmail.com
                </Typography>
            </Box>

        </div>
    );
};

export default Payment;