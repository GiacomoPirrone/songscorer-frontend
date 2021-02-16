import React from 'react';
import '../index.css';


import {Form, Container, Row, Col, Image, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Login = props => (
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
                    <form>
                        <Form.Row className="justify-content-center">
                            <Col lg="7">
                                <Form.Control type="email" placeholder="Email" className="my-3 p-4" />
                            </Col> 
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Col lg="7">
                                <Form.Control type="password" placeholder="Password" className="my-3 p-4" />
                            </Col> 
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Col lg="7">
                                <Button className="btn1 mt-3 mb-5">Login</Button>
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
export default Login;