import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography } from '@mui/material'
import banner1 from '../../../images/bannerImg/1-1-2.jpg'
import banner2 from '../../../images/bannerImg/photo-1514598800938-f7125ea1aa1c.jpg'
import banner3 from '../../../images/bannerImg/photo-1520870121499-7dddb6ccbcde.jpg'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';


const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: banner1,
    },
    {
        label: 'Bird',
        imgPath: banner2,
    },
    {
        label: 'Bali, Indonesia',
        imgPath: banner3,
    }
];

const Ban2 = () => {
    return (
        <Carousel>
            {
                images.map((item, i) => <div>
                    <Box
                        item
                        xs={12}
                        sm={12}
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