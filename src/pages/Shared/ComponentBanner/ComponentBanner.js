import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ComponentBanner = (props) => {

    return (
        <>
            <Box>
                <Grid>
                    <Box
                        item
                        xs={false}
                        sm={false}
                        md={12}
                        sx={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1552918513-adc07c782852?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)',
                            backgroundColor: "",
                            backgroundSize: 'cover',
                            height: '50%',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                        }}
                    >
                        {/* <Grid container spacing={2}> */}

                        <Grid sx={{
                            m: 5,
                            height: 150,
                            textAlign: "center"
                        }}>

                            <Typography sx={{ fontWeight: '500' }} variant="h2" gutterBottom component="div">{props.title}</Typography>
                            <Divider light />
                            <Typography variant="h6" gutterBottom component="div">{props.shortInfo}</Typography>

                        </Grid>
                        {/* </Grid> */}
                    </Box>
                </Grid>
            </Box>

        </>
    );
};

export default ComponentBanner;