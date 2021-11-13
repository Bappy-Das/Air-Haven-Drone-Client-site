import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import support from '../../../images/Mavic_Support.png'
import { NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Support = () => {
    return (
        <Container sx={{ height: '400px', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <Box
                                item
                                xs={false}
                                sm={false}
                                md={12}
                                sx={{
                                    backgroundImage: 'url(https://stormsend1.djicdn.com/stormsend/uploads/bf21ddc0-af58-0135-c672-12528100fbe3/_2xMavic_Support.png)',
                                    backgroundColor: (t) =>
                                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                    backgroundSize: 'cover',
                                    height: '100%',
                                    width: '100%',
                                    overflow: 'hidden',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',

                                }}
                            >
                                <Grid container spacing={2}>

                                    <Grid item xs={4} sx={{
                                        m: 3,
                                        height: 200,
                                        // display: 'column',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'center'
                                    }}>

                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom component="div"> Product Support</Typography>
                                            <Typography variant="body1" gutterBottom component="div"> We Are Here For You</Typography>
                                            <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                                                <Button sx={{ my: 2 }} variant="outlined">Contuct Us</Button>
                                            </NavLink>
                                        </Box>

                                    </Grid>
                                </Grid>


                            </Box>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Support;