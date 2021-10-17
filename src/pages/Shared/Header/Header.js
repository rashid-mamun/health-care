
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <>

            <Navbar >
                <Container>
                    <Navbar.Brand href="#home">Mamun </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="">

                            <Nav.Link href="#login">
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                            </Nav.Link>
                            <Nav.Link href="#login">LogIn</Nav.Link>
                            <Nav.Link href="#signup">Sign Up</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;