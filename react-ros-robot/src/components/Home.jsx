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

class Home extends Component {
    state = {
    };

    render() {
        return (
            
            <div>
                <Container>
                    <h1 className="text-center mt-3">Turtlebot Control Page</h1>
                    <Row className="mb-3">
                            <Col>
                                <Connection></Connection>
                            </Col>
                            <Col>
                                <XArmConnection></XArmConnection>
                            </Col>  
                    </Row>
                    <Row>
                        <Col>          
                            <Teleoperation></Teleoperation>
                        </Col>
                        <Col>
                            <MarkerMovement /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Camera />
                            <RobotState />
                            {/* <XArmCamera /> */}
                        </Col>
                        <Col>
                            <h4 className="mt-2">MAP</h4>
                            <Map></Map>
                        </Col>
                    </Row>
                </Container>
             
            </div>
        );
    }

}

export default Home;
