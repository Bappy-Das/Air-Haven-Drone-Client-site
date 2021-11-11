import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
// import logo from '../../../images/Dronetastic-lo.png'

// For Dark Theme
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: {
//             main: '#1976d2',
//         },
//     },
// });
const Navber = () => {
    const { user, logOut } = useFirebase();
    const theme = useTheme();
    const isMatches = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {/* <ThemeProvider theme={darkTheme}> */}
                <AppBar position="static">
                    <Container>
                        <Toolbar>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                <NavLink to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}
                                >
                                    AirHaven
                                </NavLink>
                            </Typography>



                            {isMatches ? <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick} />
                            </IconButton>
                                :
                                <div >
                                    <NavLink to="/"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                    >
                                        <Button sx={{ m: 2 }} color="inherit">Home</Button>
                                    </NavLink>
                                    <NavLink to="/allproducts"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                    >
                                        <Button sx={{ m: 2 }} color="inherit">Products</Button>
                                    </NavLink>
                                    <NavLink to="/about"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                    >
                                        <Button sx={{ m: 2 }} color="inherit">About Us</Button>
                                    </NavLink>
                                    <NavLink to="/contact"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                    >
                                        <Button sx={{ m: 2 }} color="inherit">Contact Us</Button>
                                    </NavLink>
                                    {
                                        user?.email ? <>
                                            <NavLink to="/dashboard"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'white'
                                                }}
                                            >
                                                <Button sx={{ m: 2 }} color="inherit">DashBoard</Button>
                                            </NavLink>
                                            <NavLink to="/login"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'white'
                                                }}
                                            >
                                                <Button
                                                    sx={{ m: 2 }}
                                                    color="inherit"
                                                    onClick={logOut}
                                                >Log Out</Button>
                                            </NavLink>
                                        </>
                                            :
                                            <NavLink to="/login"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'white'
                                                }}
                                            >
                                                <Button sx={{ m: 2 }} color="inherit">Log In</Button>
                                            </NavLink>
                                    }

                                </div>}


                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >

                                <NavLink to="/"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: "bold",
                                        color: '#000000'
                                    }}
                                >
                                    <MenuItem>Home</MenuItem>
                                </NavLink>
                                <NavLink to="/about"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: "bold",
                                        color: '#000000'
                                    }}
                                >
                                    <MenuItem>About Us</MenuItem>
                                </NavLink>
                                <NavLink to="/Contact"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: "bold",
                                        color: '#000000'
                                    }}
                                >
                                    <MenuItem>Contact Us</MenuItem>
                                </NavLink>
                                <NavLink to="/"
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: "bold",
                                        color: '#000000'
                                    }}
                                >
                                    <MenuItem>Log In</MenuItem>
                                </NavLink>

                            </Menu>
                        </Toolbar>
                    </Container>
                </AppBar>
                {/* </ThemeProvider> */}
            </Box>
        </>
    );
};

export default Navber;