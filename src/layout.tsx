import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export function Layout() {
    return (
        <div className='App'>
            <Navbar bg="light">
                <Container>
                    <Nav>
                        <Navbar.Brand as={Link} to='/'>
                            <img
                                alt="logo"
                                src='https://react.semantic-ui.com/logo.png'
                                width="30"
                                height="30"
                            />
                        </Navbar.Brand>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/users'>Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}
