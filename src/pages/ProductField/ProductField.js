import { Container, Typography } from '@mui/material';
import React from 'react';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';

import Navber from '../Shared/Navber/Navber';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const ProductField = () => {
    return (
        <>
            <Container sx={{ my: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Item sx={{
                                backgroundImage: 'url(https://www1.djicdn.com/cms/uploads/1d8a7fa646e04a1fe8f363b28916e8e3@1x.webp)',
                                backgroundSize: 'cover',
                                height: '100%',
                                width: '100%',
                                overflow: 'hidden',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sx={{
                                        m: 5,
                                        height: 400,

                                    }}>

                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white' }} variant="h4" gutterBottom component="div"> Video Production</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1" gutterBottom component="div"> Professional Aerial and Ground Filmmaking Tools</Typography>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item sx={{
                                backgroundImage: 'url(https://www1.djicdn.com/cms/uploads/bccdb5d218eb2c32dccb5c88babc7679@1x.webp)',
                                backgroundSize: 'cover',
                                height: '100%',
                                width: '100%',
                                overflow: 'hidden',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sx={{
                                        m: 5,
                                        height: 400,

                                    }}>

                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white' }} variant="h4" gutterBottom component="div"> Enterprise</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1" gutterBottom component="div"> Drone Solutios for a New Generation of Work</Typography>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item sx={{
                                backgroundImage: 'url(https://www1.djicdn.com/cms/uploads/6014fa854ddc342d18b1f95831e12a2e@1x.webp)',
                                backgroundSize: 'cover',
                                height: '100%',
                                width: '100%',
                                overflow: 'hidden',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sx={{
                                        m: 5,
                                        height: 400,

                                    }}>

                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold', color: 'white' }} variant="h4" gutterBottom component="div"> Agriculture</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1" gutterBottom component="div"> Efficient and Intelligent Agricultural Solution</Typography>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>


                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default ProductField;