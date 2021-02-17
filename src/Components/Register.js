import React from 'react';
import '../index.css';


import {Form, Container, Row, Col, Image, Button} from "react-bootstrap";
import axios from 'axios';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            username: null,
            email: null,
            password: null
        }
    }  

    handleSubmit = (event) => {
        event.preventDefault()
        /*
         * On submit, state data is stored in a constant which can't be changed so that
         * the data which is submitted is exactly the same as it was on submission.
         */
        const registrationDetails = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        // The API call to the springboot backend which posts registration form details to signup api endpoint
        axios.post('http://localhost:8080/api/auth/signup', {
            username: registrationDetails.username,
            email: registrationDetails.email,
            password: registrationDetails.password
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
        
    }

    // When a detail in the form changes, update the corresponding state variable so that it can be used to post to api
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
                            <Image src="https://cdn.discordapp.com/attachments/803287555645767693/811193280879788052/pexels-photo-3693108.jpeg" fluid
                            className="login-image"/>
                        </Col>
                        <Col lg="7" className="px-5 py-5">
                            <h1 className="font-weight-bold py-3">Signup</h1>
                            <h4>Join billions of other music enthusiasts today!</h4>
                            <form onSubmit={this.handleSubmit}>
                                <Form.Row className="justify-content-center">
                                    <Col lg="7">
                                        <Form.Control type="username" placeholder="Username" className="my-3 p-4" name="username"
                                            onChange={this.handleInputChange} />
                                    </Col> 
                                </Form.Row>
                                <Form.Row className="justify-content-center">
                                    <Col lg="7">
                                        <Form.Control type="email" placeholder="Email" className="my-3 p-4" name="email"
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
                                        <Form.Control type="password" placeholder="Confirm Password" className="my-3 p-4" name="passwordConfirmation"/>
                                    </Col> 
                                </Form.Row>
                                <Form.Row className="justify-content-center">
                                    <Col lg="7">
                                        <Button type="submit" className="btn1 mt-3 mb-5">Register</Button>
                                    </Col> 
                                </Form.Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Register;