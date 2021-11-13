import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';

import useAuth from '../../../hooks/useAuth';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AddReview = () => {
    const { user } = useAuth();
    const [value, setValue] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.userName = user.displayName;
        data.email = user.email;
        data.rate = value;
        axios.post('https://safe-meadow-80713.herokuapp.com/addreview', data)
            .then(res => {
                console.log(res)
                reset()
            })
        // console.log(data)
    };
    return (
        <>


            <Box>
                <Container
                    sx={{
                        py: 2,
                        mx: 'auto',
                        width: 500,
                        borderRadius: 1,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h3">
                        Add A Review
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)} >
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Typography component="legend">Ratings</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                        <Grid container spacing={2} sx={{ my: 5 }}>
                            <Grid item xs={12}>
                                {/* <TextField
                                    required
                                    fullWidth
                                    multiline
                                    maxRows={4}
                                    label="Review"
                                    variant="standard"
                                    id="standard-basic"
                                    {...register("reviewText")}
                                /> */}
                                <TextField

                                    required
                                    fullWidth
                                    label="Please Giv Us A Review"
                                    multiline
                                    rows={4}
                                    {...register("reviewText")}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant='contained'

                        >Submit</Button>
                    </Box>
                </Container>
            </Box>



        </>
    );
};

export default AddReview;