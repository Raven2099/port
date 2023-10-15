import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  Hello There! <span className="yellow"> Welcome to  </span> my portfolio

                </h1>
                <p className="home-about-body">
                 Hey, I am <span className="yellow">Tejus Cherian  Sujith </span>
                 21BCB0008 <span className="yellow"> VIT</span>
                <br />
                <br />
                Studying Computer Science in VIT
                <br />
                <br />
                  Welcome to my
                  <b className="yellow"> portfolio </b> task for Ethnus.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Python, C, C++ </b>
                    as well as have knowledge in ML&AI domain as well as 
                  <b className="yellow"> cybersecurity.</b>
               
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            
          </Container>
        </Container>
      );
    
}

export default About