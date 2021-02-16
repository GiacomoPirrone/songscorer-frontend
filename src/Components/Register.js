import React from 'react';
import '../index.css';


import {Form, Container, Row, Col, Image, Button} from "react-bootstrap";


const Register = props => (
    <div className="login-form">
        <Container>
            <Row className="no-gutters">
                <Col lg="5">
                    <Image src="https://cdn.discordapp.com/attachments/803287555645767693/811193280879788052/pexels-photo-3693108.jpeg" fluid
                    className="login-image"/>
                </Col>
                <Col lg="7" className="px-5 py-5">
                    <h1 className="font-weight-bold py-3">Signup</h1>
                    <h4>Join billions of other music enthusiasts today!</h4>
                    <form>
                        <Form.Row className="justify-content-center">
                            <Col lg="7">
                                <Form.Control type="username" placeholder="Username" className="my-3 p-4" />
                            </Col> 
                        </Form.Row>
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
                                <Form.Control type="password" placeholder="Confirm Password" className="my-3 p-4" />
                            </Col> 
                        </Form.Row>
                        <Form.Row className="justify-content-center">
                            <Col lg="7">
                                <Button className="btn1 mt-3 mb-5">Register</Button>
                            </Col> 
                        </Form.Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
)
export default Register;