import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Connection from "./Connection";
import ConnectionXArm from "./XArmConnection";
import XArmPickUp from "./XArmPickUp";
import XArmCamera from "./XArmCamera";

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">XArm Control Page</h1>
                    <Row className="mb-3">
                        <Col>
                            <Connection></Connection>
                        </Col>
                        <Col>
                            <ConnectionXArm></ConnectionXArm>
                        </Col>  
                    </Row>
                    <Row>
                        <Col>
                            <XArmPickUp />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <XArmCamera />
                        </Col>
                    </Row>

                </Container>
             
            </div>
        );
    }
  
}

export default About;
