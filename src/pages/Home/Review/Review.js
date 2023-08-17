import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Container, Typography, Rating, Divider } from '@mui/material'

import Box from '@mui/material/Box';
import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://air-haven-drone-server-update.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <Container xs={12} md={12} sx={{
            textAlign: 'center',
            my: 5
        }}>

            <Typography sx={{
                fontWeight: 'bold',
                my: 5,
                color: '#6CA8F2'
            }} gutterBottom variant="h3" component="div">
                Happy Clients
                <Divider xs={12} md={12} variant="middle"
                    sx={{
                        m: 5,
                        color: '#6CA8F2',
                        border: 1,
                        mx: "auto",
                        // width: 800

                    }} />
            </Typography>
            {/* 
            <FloatingLettersTextBuilder
                floatingSpeed={500}
                lettersAppearanceDelay={400}
                animationMaxMargin={"200px"}
                animationMinMargin={"0px"}
                style={{ fontSize: "50px" }}

            >

                Happy Clients
            </FloatingLettersTextBuilder>
 */}




            <Carousel>
                {
                    reviews?.map((item, i) => <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 3,
                                width: 500,
                                maxWidth: 600,
                                height: 'auto',
                            },
                        }}
                    >

                        <Paper elevation={3} >
                            <Box sx={{ height: 'auto' }} >
                                <Box sx={{ mt: 2, mb: 3 }}>
                                    <Typography variant="body1" gutterBottom>
                                        &#10075;  {item?.reviewText}&#10076;
                                    </Typography>
                                    <Rating name="read-only" value={item?.rate} readOnly />
                                </Box>

                                <Typography variant="h6" gutterBottom>
                                    {item?.userName}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {item?.email}
                                </Typography>
                            </Box>
                        </Paper>
                    </Box >)
                }
            </Carousel >
        </Container >
    );
};

export default Review;