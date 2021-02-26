import React from 'react';
import '../index.css';
import {Container, Row, Col, Image} from "react-bootstrap";
import photo from './photo.jpg';
import { ReactComponent as Logo } from "../assets/Symphonyze_logo3.svg";

const Home = () => (
    <Container className="no-padding" fluid>
        <Image src={photo} className="w-100 h-50"/>
        <div className="top-left">
            <div className="background-black">
            <Logo width="650" />
            </div>
            Rate Albums. <br/> Any Time. <br/> Any Where.     
        </div>
    </Container>

)
export default Home;