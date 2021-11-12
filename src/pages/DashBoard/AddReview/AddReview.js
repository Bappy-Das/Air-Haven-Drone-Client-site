import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useFirebase from '../../../hooks/useFirebase';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AddReview = () => {
    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName;
        data.email = user.email
        axios.post('http://localhost:5000/addreview', data)
            .then(res => {
                console.log(res)
                reset()
            })
        // console.log(data)
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <Typography variant="h4" gutterBottom component="div">
                                Please Add a Review
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea {...register("reviewText")} />
                                <br />
                                <select {...register("review")}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <br />
                                <input type="submit" />
                            </form>
                        </Item>
                    </Grid>


                </Grid>
            </Box>
        </>
    );
};

export default AddReview;