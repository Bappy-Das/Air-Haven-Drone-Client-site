import { Container } from '@mui/material';
import React from 'react';
import Navber from '../Shared/Navber/Navber';

const NotFound = () => {
    return (
        <div>
            <Navber></Navber>
            <Container>
                <h1>This is not Found</h1>
            </Container>
        </div>
    );
};

export default NotFound;