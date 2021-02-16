import React from 'react';
import '../index.css';

import * as ReactBootStrap from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/Symphonyze_logo3.svg";

const Header = () => (
    <header>
        <ReactBootStrap.Navbar bg="#9F1B07" expand="lg">
            <Logo width="200" href="#" className="mx-5"></Logo>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto justify-content-center">
                    <ReactBootStrap.Nav.Link className="links" href="#home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            <button className="login-signup-btn">
                Login
            </button>
            <button className="login-signup-btn">
                Signup
            </button>
        </ReactBootStrap.Navbar>
    </header>

)
export default Header;