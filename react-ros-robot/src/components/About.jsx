import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Connection from "./Connection";
import ConnectionXArm from "./XArmConnection";
import Teleoperation from "./Teleoperation";
import RobotState from "./RobotState";
import Map from "./Map";
import Camera from "./Camera";
import MarkerMovement from "./MarkerMovement";
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
                            {/* <MarkerMovement /> */}
                            <XArmPickUp />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <Camera /> */}
                            {/* <RobotState /> */}
                            <XArmCamera />
                        </Col>
                        {/* <Col>
                            <Map></Map>
                        </Col> */}
                    </Row>

                </Container>
             
            </div>
        );
    }
  
}

export default About;
