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
import { NavLink } from 'react-router-dom'
import useProducts from '../../hooks/useProducts';
import Navber from '../Shared/Navber/Navber';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';



const ExploreProduct = () => {
    const { product } = useProducts()


    return (
        <>
            <Navber></Navber>
            <ComponentBanner
                title={'Mavic Series'}
                shortInfo={"Powerful and Foldable for Aerial Adventure"}
            ></ComponentBanner>
            <Container>

                <Box sx={{ flexGrow: 1, mt: 5 }}>

                    <Grid container spacing={2}>
                        {
                            product.map(drone => <Grid item xs={12} md={4}>
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
                                            <Typography variant="body2" color="text.secondary">
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
                </Box>
            </Container>
        </>
    );
};

export default ExploreProduct;