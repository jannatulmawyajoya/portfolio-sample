import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./MenuBar.css";


const Menubar = () => {
    const logo = '';
  
    return (

        <>

            <Navbar bg="white" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end mx-3">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs </Nav.Link>
                        
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <a href="https://drive.google.com/file/d/1tWobV38nlP_UCq_wrC1HoWSzDxtngMOQ/view?usp=sharing" target='_blank' download ><button className='btn btn-primary'>Download Resume</button></a>


                        {/* <Navbar.Text>
                            <a href="#login"></a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
};

export default Menubar;