import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from '@mui/material';
function Copyright() {
    return (
        <Typography variant="body2" color="#B2BABB" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                AirHaven
            </Link>{' '}
            {new Date().getFullYear()}
            {' & '}
            Developed By{' '}
            <Link color="inherit" href="https://mui.com/">
                Bappy Das
            </Link>
        </Typography>
    );
}
const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'text.primary', color: '#B2BABB', mt: 5, pt: 5 }}>
            <Container>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom>
                                AirHaven
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }} variant="body1" gutterBottom>
                                Using aerial platforms for Non-Destructive Inspection (NDI) of large and complex structures is a growing field of interest in various industries.
                            </Typography>

                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" gutterBottom>
                                Home
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Portfolio
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Services
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Contact
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" gutterBottom>
                                Clients
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Team
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Career
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Testimonials
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Journal
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" gutterBottom>
                                Privacy Policy
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Terms & Conditions
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Partners
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FacebookIcon sx={{ mr: 1 }} />
                            <TwitterIcon sx={{ mr: 1 }} />
                            <InstagramIcon sx={{ mr: 1 }} />
                            <YouTubeIcon />

                            <Box>
                                <Button sx={{ mt: 3 }} variant="contained" color="success">
                                    Contact Us
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box component="footer" sx={{ py: 6 }}>
                    <Container maxWidth="lg">
                        <Typography variant="h6" align="center" gutterBottom>
                            AirHaven
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Footer;