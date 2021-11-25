import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import DashBoardHome from './DashBoardHome/DashBoardHome';
import { Button } from '@mui/material';
import ManageOder from './ManageOrder/ManageOder';
import AddDrone from './AddDrone/AddDrone';
import ManageProduct from './ManageProduct/ManageProduct';
import AddReview from './AddReview/AddReview';
import useAdmin from '../../hooks/useAdmin';
import Payment from './Payment/Payment';
import MyOrder from '../DashBoard/MyOrder/MyOrder'
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const drawerWidth = 240;

function DashBoard(props) {
    const { logOut } = useAuth();
    const { admin } = useAdmin();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Toolbar />
            <Divider />


            <Divider />
            <Box>
                {/* <h1>{user?.displayName}</h1> */}
                <li style={{ listStyle: 'none' }}>
                    <Link to='/'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button sx={{ mt: 1, ml: 3 }} color="inherit">Home</Button>
                    </Link>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <Link to={`${url}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button sx={{ mt: 1, ml: 3 }} color="inherit">Dashboard</Button>
                    </Link>
                </li>


                {/* Admin can show */}

                {admin &&
                    <>
                        <li style={{ listStyle: 'none' }}>
                            <Link to={`${url}/manageproduct`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button sx={{ mt: 1, ml: 3 }} color="inherit">Manage Product</Button>
                            </Link>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <Link to={`${url}/addproduct`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button sx={{ mt: 1, ml: 3 }} color="inherit">Add Product</Button>
                            </Link>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <Link to={`${url}/manageorder`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button sx={{ mt: 1, ml: 3 }} color="inherit">Manage Order</Button>
                            </Link>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <Link to={`${url}/makeadmin`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button sx={{ mt: 1, ml: 3 }} color="inherit">Make Admin</Button>
                            </Link>
                        </li>
                    </>
                }

                {/* Normal User can show */}

                {!admin && <>
                    <li style={{ listStyle: 'none' }}>
                        <Link to={`${url}/myorder`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button sx={{ mt: 1, ml: 3 }} color="inherit">My order</Button>
                        </Link>
                    </li>
                    <li style={{ listStyle: 'none' }}>
                        <Link to={`${url}/addreview`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button sx={{ mt: 1, ml: 3 }} color="inherit">Add Review</Button>
                        </Link>
                    </li>
                    <li style={{ listStyle: 'none' }}>
                        <Link to={`${url}/payement`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button sx={{ mt: 1, ml: 3 }} color="inherit">Payment</Button>
                        </Link>
                    </li>


                </>
                }
                <li style={{ listStyle: 'none' }}>

                    <Button onClick={logOut} sx={{ mt: 1, ml: 3 }} color="inherit">log Out</Button>
                </li>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <PrivateRoute exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddDrone></AddDrone>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorder`}>
                        <ManageOder></ManageOder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>


                    <PrivateRoute path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/payement`}>
                        <Payment></Payment>
                    </PrivateRoute>

                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
