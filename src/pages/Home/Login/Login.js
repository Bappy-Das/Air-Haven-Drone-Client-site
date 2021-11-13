import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Navber from '../../Shared/Navber/Navber';
import { useState } from "react";
import useAuth from '../../../hooks/useAuth';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            Bappy Das {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { singInUsingGoogle, emailPassLogin, saveUserGoogle, isLoading } = useAuth()
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    // console.log("Come from ", location.state?.from)

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = (event) => {
        emailPassLogin(loginData.email, loginData.password)
            .then((userCredential) => {
                history.push(redirect_uri)

            })
            .catch((error) => {

            })
        event.preventDefault();

    };
    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                saveUserGoogle(result.user.email, result.user.displayName)
                history.push(redirect_uri)
                console.log(result.user)
            })
    }


    return (
        <>
            <Navber></Navber>
            <Container sx={{ pb: 5, mb: 5 }}>
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh', p: 5 }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1620675841112-99de4241df8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}

                        >
                            {/* <Typography variant="h6" gutterBottom component="div">
                            h6. Heading
                        </Typography> */}
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Log in
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        type="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={handleOnChange}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        onChange={handleOnChange}
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Log In
                                    </Button>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <NavLink to="/register"
                                                style={{
                                                    // textDecoration: 'none',
                                                    color: '#000000',
                                                    textAlign: 'right'
                                                }}
                                            >
                                                Don't have an account? Sign Up
                                            </NavLink>
                                        </Grid>
                                    </Grid>
                                    {/* <Copyright sx={{ mt: 5 }} /> */}
                                </Box>
                                <Box>
                                    <Button
                                        onClick={handleGoogleLogin}
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Log in With Google
                                    </Button>
                                </Box>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Container>
        </>
    );
};

export default Login;