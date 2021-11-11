import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';


const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1479152471347-3f2e62a2b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    }
];

const Ban2 = () => {
    return (
        <Carousel>
            {
                images.map((item, i) => <div>
                    <img style={{ width: '500px', height: '500px' }} src={item.imgPath} alt="" srcset="" />
                </div>)
            }
        </Carousel>
    );
};

export default Ban2;