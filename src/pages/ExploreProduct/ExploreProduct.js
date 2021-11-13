// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Table, TableBody, TableCell, TableRow } from '@mui/material';
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
                                            height="200"
                                            image={drone.img}
                                            alt="green iguana"
                                        />
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
                                                                Max Flight Time (no wind):
                                                            </TableCell>
                                                            <TableCell align="right">{drone?.Max_flight_time} minutes</TableCell>

                                                        </TableRow>
                                                        <TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                Max Flight Distance :
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
                </Box>
            </Container>
        </>
    );
};

export default ExploreProduct;