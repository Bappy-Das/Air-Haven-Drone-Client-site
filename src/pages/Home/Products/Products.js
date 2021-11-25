// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

// react-animated-text-builders
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders'

// reveal fade animation
import Fade from 'react-reveal/Fade';

// Aos animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();




const Products = () => {
    const { product } = useProducts()
    const homeProduct = product.slice(0, 6)

    return (
        <>
            <Container>
                <Fade left>
                    <Typography sx={{
                        fontWeight: 'bold',
                        my: 5,
                        color: '#6CA8F2',
                        textAlign: 'center'
                    }} gutterBottom variant="h3" component="div">
                        Mavic Series

                    </Typography>
                </Fade>
                <Typography sx={{
                    fontWeight: 'bold',
                    my: 5,
                    textAlign: 'center'
                }} gutterBottom variant="h5" component="div">
                    Powerful and Foldable for Aerial Adventure
                    <Divider variant="middle"
                        sx={{
                            m: 5,
                            color: '#6CA8F2',
                            border: 1,
                            mx: "auto",


                        }} />
                </Typography>

                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>
                        {
                            homeProduct.map(drone => <Grid item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <div data-aos="zoom-in">
                                            <CardMedia

                                                component="img"
                                                height="200"
                                                image={drone.img}
                                                alt="green iguana"
                                            />
                                        </div>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 'bold', ml: 2 }} gutterBottom variant="h5" component="div">
                                                {drone.name}
                                            </Typography>

                                            <Box>

                                                <Table aria-label="simple table">
                                                    <TableBody>

                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                Takeoff Weight :
                                                            </TableCell>
                                                            <TableCell align="right">{drone?.weight} g</TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                Diagonal Length :
                                                            </TableCell>
                                                            <TableCell align="right">{drone?.length} mm</TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                Flight Time (no wind):
                                                            </TableCell>
                                                            <TableCell align="right">{drone?.Max_flight_time} minutes</TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                Flight Distance :
                                                            </TableCell>
                                                            <TableCell align="right">{drone?.distance} km</TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                Operating Temperature :
                                                            </TableCell>
                                                            <TableCell align="right">{drone?.temperature} </TableCell>

                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <NavLink to={`./productinfo/${drone._id}`}
                                            style={{ textDecoration: 'none', }}>
                                            <Button variant="contained" color="success"
                                                sx={{
                                                    bgcolor: 'text.primary',

                                                }}>
                                                BUY NOW
                                            </Button>
                                        </NavLink>
                                    </CardActions>
                                </Card>

                            </Grid>)
                        }

                    </Grid>
                    <NavLink to='/allproducts'>
                        <Typography sx={{ textAlign: 'right', p: 3 }} gutterBottom variant="body2" component="div">
                            More Products
                        </Typography>
                    </NavLink>
                </Box>

            </Container>
        </>
    );
};


export default Products;