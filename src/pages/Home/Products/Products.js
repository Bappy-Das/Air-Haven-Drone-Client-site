// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const { product } = useProducts()
    const homeProduct = product.slice(0, 6)

    return (
        <>
            <Container>
                <Typography sx={{
                    fontWeight: 'bold',
                    my: 5
                }} gutterBottom variant="h3" component="div">
                    Mavic Series
                </Typography>
                <Typography sx={{
                    fontWeight: 'bold',
                    my: 5
                }} gutterBottom variant="h5" component="div">
                    Powerful and Foldable for Aerial Adventure
                </Typography>
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>
                        {
                            homeProduct.map(drone => <Grid item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={drone.img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {drone.name}
                                            </Typography>
                                            <Typography sx={{
                                                textAlign: 'justify',
                                                textJustify: 'inter-word'
                                            }} variant="body2" color="text.secondary">
                                                {drone.describe}
                                            </Typography>
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