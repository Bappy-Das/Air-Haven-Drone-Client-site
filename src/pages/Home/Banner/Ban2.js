import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography } from '@mui/material'
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import banner1 from '../../../images/bannerImg/1-1-2.jpg'
import banner2 from '../../../images/bannerImg/photo-1514598800938-f7125ea1aa1c.jpg'
import banner3 from '../../../images/bannerImg/photo-1520870121499-7dddb6ccbcde.jpg'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';


const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: banner1,
        // imgPath:
        //     'https://images.unsplash.com/photo-1479152471347-3f2e62a2b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80',
    },
    {
        label: 'Bird',
        imgPath: banner2,
        // imgPath:
        //     'https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    },
    {
        label: 'Bali, Indonesia',
        imgPath: banner3,
        // imgPath:
        //     'https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    }
];

const Ban2 = () => {
    return (
        <Carousel>
            {
                images.map((item, i) => <div>
                    {/* <img style={{ width: '100%', height: '100%' }} src={item.imgPath} alt="" srcset="" /> */}
                    <Box
                        item
                        xs={false}
                        sm={false}
                        md={12}
                        sx={{
                            backgroundImage: `url(${item.imgPath})`,
                            backgroundSize: 'cover',
                            height: '100%',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                        }}
                    >
                        <Grid container spacing={3}>

                            <Grid item xs={6} sx={{
                                m: 5,
                                height: 500,
                                display: 'flex',
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>

                                <Box sx={{}}>
                                    <Typography variant="h2" gutterBottom component="div">DJI MAVIC SERIES</Typography>
                                    <Typography variant="h6" gutterBottom component="div">DJI MAVIC SERIES</Typography>
                                    <Box>
                                        <NavLink to="allproducts"
                                            style={{ textDecoration: 'none', }}
                                        >
                                            <Button variant="contained">Explore</Button>
                                        </NavLink>
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </div>)
            }
        </Carousel>
    );
};

export default Ban2;