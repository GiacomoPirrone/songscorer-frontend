import React from 'react';
import '../index.css';

import {Navbar, Nav} from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/Symphonyze_logo3.svg";
import {Link} from 'react-router-dom';
import { ToastContainer, Zoom} from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    logout = () => {
        // Delete all associated cookies with this browser so that the user can log out
        Cookies.remove('authenticationToken');
        Cookies.remove('refreshToken');
        Cookies.remove('expiresAt');
        Cookies.remove('username');

        // Logout user so the state of the app changes
        this.props.handleLoggedInChange(false);
    }

    render() {
        return (
            <header>
                <ToastContainer  transition={Zoom}/>
                <Navbar bg="#9F1B07" expand="lg">
                <a href="/"><Logo width="200" href="#" className="mx-5"></Logo></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-center">
                            <Link className="links" to="/">Home</Link>
                            <Link className="links" to="/">New Releases</Link>
                            {
                                // Users should only be able to rate an album if they are logged in
                                this.props.loggedIn ?
                                <>
                                    <Link className="links" to="/rate">Rate an Album</Link>
                                </> :
                                <></>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    {
                        // If user is logged in, then only present the log out button for them
                        this.props.loggedIn ?
                        <Link to="/">
                            {console.log(this.state.username)}
                            <button onClick={this.logout} className="login-signup-btn">
                                Logout
                            </button>
                        </Link>
                        :
                        // If they are not logged in then present them with the option to login or register an account
                        <>
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
                        </>
                    }
                </Navbar>
            </header>
        )
    }
}


export default Header;