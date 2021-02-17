import React from 'react';
import '../index.css';


import {Form, Container, Row, Col, Image, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            username: null,
            password: null
        }
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        /*
         * On submit, state data is stored in a constant which can't be changed so that
         * the data which is submitted is exactly the same as it was on submission.
         */
        const loginDetails = {
            username: this.state.username,
            password: this.state.password
        }
        // The API call to the springboot backend which posts login form details to login api endpoint
        axios.post('http://localhost:8080/api/auth/login', {
            username: loginDetails.username,
            password: loginDetails.password
        })
        .then((response) => {

            // If login proceeds successfully with the return of login data then assign it to cookies
            Cookies.set('authenticationToken', response.data.authenticationToken);
            Cookies.set('refreshToken', response.data.refreshToken);
            Cookies.set('expiresAt', response.data.expiresAt);
            Cookies.set('username', response.data.username);
            
        }, (error) => {
            // As of now this is mostly for dev reasons, if a login is unsuccessful we will let the use know via UI
            console.log(error);
        })
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="login-form">
                <Container>
                    <Row className="no-gutters">
                        <Col lg="5">
                            <Image src="https://cdn.discordapp.com/attachments/803287555645767693/811073102451834904/photo-1510133744874-096621a0e01e.png" fluid
                            className="login-image"/>
                        </Col>
                        <Col lg="7" className="px-5 py-5">
                            <h1 className="font-weight-bold py-3">Login</h1>
                            <h4>Sign in and start rating!</h4>
                            <form onSubmit={this.handleSubmit}>
                                <Form.Row className="justify-content-center">
                                    <Col lg="7">
                                        <Form.Control type="username" placeholder="Username" className="my-3 p-4" name="username"
                                            onChange={this.handleInputChange} />
                                    </Col> 
                                </Form.Row>
                                <Form.Row className="justify-content-center">
                                    <Col lg="7">
                                        <Form.Control type="password" placeholder="Password" className="my-3 p-4" name="password"
                                            onChange={this.handleInputChange} />
                                    </Col> 
                                </Form.Row>
                                <Form.Row className="justify-content-center">
                                    <Col lg="7">
                                        <Button type="submit" className="btn1 mt-3 mb-5">Login</Button>
                                    </Col> 
                                </Form.Row>
                                <Link className="login-links" to="/">Forgot Pasword</Link><br/>
                                <p className="login-links">Don't have an account? <Link to="/">Register here</Link></p>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Login;