import * as React from 'react';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ComponentBanner from '../Shared/ComponentBanner/ComponentBanner';
import Navber from '../Shared/Navber/Navber';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Paper from '@mui/material/Paper';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
const ProductInfo = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [productInfo, setProductInfo] = useState({})
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://safe-meadow-80713.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProductInfo(data))
    }, [])
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (

        <div>
            <Navber></Navber>
            <ComponentBanner
                title={'Mavic Series'}
                shortInfo={""}
            ></ComponentBanner>
            <Container>
                <Box sx={{ flexGrow: 1, m: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height='auto'
                                        image={productInfo?.img}
                                        alt="green iguana"
                                    />
                                </CardActionArea>

                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <Typography sx={{ fontWeight: 'bold', textTransform: "uppercase" }} variant="h4" gutterBottom component="div">
                                    {productInfo?.name}
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 2 }} variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 2 }} variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 2 }} variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 2 }} variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 2 }} variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 1 }} variant="subtitle1" gutterBottom component="div">
                                    subtitle1. Lorem ipsum dolor sit amet
                                </Typography>
                                <Divider />
                                <Button
                                    onClick={handleOpen}
                                    variant="contained"
                                    sx={{ mt: 1, width: 200 }}
                                >
                                    Purchase Now

                                </Button>

                            </Item>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <PurchaseModal
                productInfo={productInfo}
                open={open}
                handleClose={handleClose}
            ></PurchaseModal>

        </div>
    );
};

export default ProductInfo;