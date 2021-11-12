import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, Typography, Rating } from '@mui/material'
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';


// const images = [
//     {
//         label: 'San Francisco – Oakland Bay Bridge, United States',
//         imgPath:
//             'https://images.unsplash.com/photo-1479152471347-3f2e62a2b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80',
//     },
//     {
//         label: 'Bird',
//         imgPath:
//             'https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
//     },
//     {
//         label: 'Bali, Indonesia',
//         imgPath:
//             'https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
//     }
// ];

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <Container>
            <h1>This is review</h1>
            <Carousel>
                {
                    reviews?.map((item, i) => <div>
                        <p>{item?.reviewText}</p>
                        <Rating name="read-only" value={item?.review} readOnly />
                        {/* <img style={{ width: '500px', height: '500px' }} src={item.imgPath} alt="" srcset="" /> */}
                    </div>)
                }
            </Carousel>
        </Container>
    );
};

export default Review;