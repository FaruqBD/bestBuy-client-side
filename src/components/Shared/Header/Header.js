import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const userImg = user?.reloadUserInfo?.photoUrl;
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand><Link to="/">Best Buy</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Explore</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        {user?.email ?
                            <Button onClick={logOut}>Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                           {user?.email && <div className="user-image"><img src={userImg} alt="" /></div>}
                        <Navbar.Text className="text-white ms-2">
                            {user?.displayName}
                        </Navbar.Text>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;