// import { Container } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import mavic2 from '../../../images/slide/mavic_2.jpg'
// import mavic3 from '../../../images/slide/mavic_3.jpg'
// import mavic1 from '../../../images/slide/1.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1479152471347-3f2e62a2b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1514598800938-f7125ea1aa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    }
];

const Banner = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        // <Container>
        <Box item xs={12} md={12} sx={{ flexGrow: 1 }}>
            <Grid>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >

                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    item
                                    xs={false}
                                    sm={false}
                                    md={12}
                                    sx={{
                                        backgroundImage: `url(${step.imgPath})`,
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
                                            m: 5,
                                            height: 500,
                                            // display: 'column',
                                            display: 'flex',
                                            // flexDirection: 'column',
                                            justifyContent: 'space-around',
                                            alignItems: 'center'
                                        }}>

                                            <Typography variant="h2" gutterBottom component="div"> Mavic Mini 2</Typography>
                                            <NavLink to="/"
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <Button variant="contained">Explore</Button>
                                            </NavLink>
                                        </Grid>
                                    </Grid>


                                </Box>
                            ) : null}
                        </div>
                    ))}


                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Grid>
        </Box>
        // </Container>
    );
};

export default Banner;