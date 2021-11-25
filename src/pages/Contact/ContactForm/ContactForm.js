import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LanguageIcon from '@mui/icons-material/Language';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 280,
    marginTop: 100
}));
const ContactForm = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} >
                        <Item sx={{ backgroundColor: '#6CA8F2', color: 'white' }}>
                            <HomeIcon sx={{ my: 3, fontSize: 50 }} />
                            <Typography sx={{ m: 2, fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                                ADDRESS
                            </Typography>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    House: 36 (F2), Road: 19, Nikunja 2, Dhaka 1229
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ backgroundColor: '#6CA8F2', color: 'white' }}>
                            <PermPhoneMsgIcon sx={{ my: 3, fontSize: 50 }} />
                            <Typography sx={{ m: 2, fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                                CONTACT NUMBER
                            </Typography>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    0175555555
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ backgroundColor: '#6CA8F2', color: 'white' }}>
                            <MarkEmailUnreadIcon sx={{ my: 3, fontSize: 50 }} />
                            <Typography sx={{ m: 2, fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                                EMAIL ADDRESS
                            </Typography>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    bappydas.bd51@gmail.com
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ backgroundColor: '#6CA8F2', color: 'white' }}>
                            <LanguageIcon sx={{ my: 3, fontSize: 50 }} />
                            <Typography sx={{ m: 2, fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                                WEBSITE
                            </Typography>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    airhaven.com
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ContactForm;