import React from 'react';
import { 
    Navbar,
    Container,
    Nav, 
} from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';

const LayoutApp: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to={'/'} className={'nav-link'} end>Customers</NavLink>
                            <NavLink to={'/products'} className={'nav-link'} end>Products</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className='py-4'>
                <Outlet />
            </Container>
        </React.Fragment>
    );
};

export default LayoutApp;