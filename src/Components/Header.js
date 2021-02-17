import React from 'react';
import '../index.css';

import {Navbar, Nav} from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/Symphonyze_logo3.svg";

import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <Navbar bg="#9F1B07" expand="lg">
            <Logo width="200" href="#" className="mx-5"></Logo>
            <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-center">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" href="#link">Link</Link>
                    <Link className="links" href="#home">Home</Link>
                    <Link className="links" href="#link">Link</Link>
                </Nav>
            </Navbar.Collapse>
            <Link to="/login">
                <button className="login-signup-btn">
                    Login
                </button>
            </Link>
            <Link to="/signup">
                <button className="login-signup-btn">
                    Signup
                </button>
            </Link>
        </Navbar>
    </header>

)
export default Header;