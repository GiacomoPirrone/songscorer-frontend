import React from 'react';
import '../index.css';

import {Navbar, Nav} from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/Symphonyze_logo3.svg";

const Header = () => (
    <header>
        <Navbar bg="#9F1B07" expand="lg">
            <Logo width="200" href="#" className="mx-5"></Logo>
            <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-center">
                    <Nav.Link className="links" href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <button className="login-signup-btn">
                Login
            </button>
            <button className="login-signup-btn">
                Signup
            </button>
        </Navbar>
    </header>

)
export default Header;