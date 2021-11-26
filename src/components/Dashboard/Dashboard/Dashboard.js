import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Avatar } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import MyReview from '../MyReview/MyReview';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import HomeIcon from '@mui/icons-material/Home';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import AllOrder from '../AllOrder/AllOrder';
import ProductAdd from '../../ProductAdd/ProductAdd';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddReview from '../AddReview/AddReview';
import AllReview from '../AllReview/AllReview';

const drawerWidth = 250;

function Dashboard(props) {
    const { user, logOut, admin } = useAuth();
    const userImg = user?.reloadUserInfo?.photoUrl;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Avatar alt="Remy Sharp" src={userImg} />
                <Typography variant="h6" pl={1}>
                    {user.displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <Link to={`/`} style={{ "text-decoration": "none", "color": "black" }}>
                <ListItem button>
                    <ListItemIcon >
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Website" />
                </ListItem>
            </Link>
            <Link to={`${url}`} style={{ "text-decoration": "none", "color": "black" }}>
                <ListItem button>
                    <ListItemIcon >
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </Link>
            {!admin && <Box>

            <Link to={`${url}/my-orders`} style={{ "text-decoration": "none", "color": "black" }}>
                <ListItem button>
                    <ListItemIcon >
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                </ListItem>
            </Link>
            <Link to={`${url}/pay`} style={{ "text-decoration": "none", "color": "black" }}>
                <ListItem button>
                    <ListItemIcon >
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pay" />
                </ListItem>
            </Link>
            <Link to={`${url}/reviews`} style={{ "text-decoration": "none", "color": "black" }}>
                <ListItem button>
                    <ListItemIcon >
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Review" />
                </ListItem>
            </Link>
            </Box>}
            {admin && <Box>
                <Link to={`${url}/all-orders`} style={{ "text-decoration": "none", "color": "black" }}>
                    <ListItem button>
                        <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage All Orders" />
                    </ListItem>
                </Link>
                <Link to={`${url}/add-product`} style={{ "text-decoration": "none", "color": "black" }}>
                    <ListItem button>
                        <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add New Product" />
                    </ListItem>
                </Link>
                <Link to={`${url}/make-admin`} style={{ "text-decoration": "none", "color": "black" }}>
                    <ListItem button>
                        <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Make Admin" />
                    </ListItem>
                </Link>
                <Link to={`${url}/manage-products`} style={{ "text-decoration": "none", "color": "black" }}>
                    <ListItem button>
                        <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Products" />
                    </ListItem>
                </Link>
                <Link to={`${url}/manage-reviews`} style={{ "text-decoration": "none", "color": "black" }}>
                    <ListItem button>
                        <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Reviews" />
                    </ListItem>
                </Link>
            </Box>}
            <Link style={{ "text-decoration": "none", "color": "black" }}>
                <ListItem button onClick={logOut}>
                    <ListItemIcon >
                        <DisabledByDefaultIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </Link>


        </div>
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
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/all-orders`}>
                        <AllOrder></AllOrder>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <ProductAdd></ProductAdd>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <MyReview></MyReview>
                    </Route>
                    <Route path={`${path}/manage-reviews`}>
                        <AllReview></AllReview>
                    </Route>
                    <Route path={`${path}/add-review`}>
                        <AddReview></AddReview>
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>

            </Box>
        </Box>
    );
}

export default Dashboard;
