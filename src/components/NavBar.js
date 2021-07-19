import React from 'react'
import { 
    Navbar,
    Container,
    Nav,
    Button
 } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div className='nav-div'>
            <Navbar bg="dark" variant="light">
                <Container>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Write a Review</Nav.Link>
                        <Nav.Link href="#features">Events</Nav.Link>
                        <Nav.Link href="#pricing">Talk</Nav.Link>
                        </Nav>
                </Container>
                <Container className='login-signup'>
                        <Nav className="d-flex">
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Button variant="outline-light">Sign up</Button>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
