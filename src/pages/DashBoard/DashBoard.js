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
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import DashBoardHome from './DashBoardHome/DashBoardHome';
import { Button } from '@mui/material';
import ManageOder from './ManageOrder/ManageOder';
import useFirebase from '../../hooks/useFirebase';
import AddDrone from './AddDrone/AddDrone';


const drawerWidth = 240;

function DashBoard(props) {
    const { logOut } = useFirebase();
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
                <li style={{ listStyle: 'none' }}>
                    <Link to={`${url}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button sx={{ mt: 1, ml: 3 }} color="inherit">Dashboard</Button>
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
                    <Link to={`${url}/manageproduct`}
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
                <li style={{ listStyle: 'none' }}>
                    <Link to='/'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button sx={{ mt: 1, ml: 3 }} color="inherit">Website Home</Button>
                    </Link>
                </li>
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
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddDrone></AddDrone>
                    </Route>
                    <Route path={`${path}/manageproduct`}>
                        <ManageOder></ManageOder>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
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