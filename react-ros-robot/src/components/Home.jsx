import React, { Component } from "react";
import Connection from "./Connection";
import ConnectionXArm from "./ConnectionXArm";
import Teleoperation from "./Teleoperation";
import RobotState from "./RobotState";
import Map from "./Map";
import Camera from "./Camera";
import MarkerMovement from "./MarkerMovement";
import { Row, Col, Container } from "react-bootstrap";

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">Robot Control Page</h1>
                    <Row>
                            <Col>
                                <Connection></Connection>
                            </Col>
                            <Col>
                                <ConnectionXArm></ConnectionXArm>
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
                        </Col>
                        <Col>
                            <h4 className="mt-2">MAP</h4>
                            <Map></Map>
                        </Col>
                    </Row>

                    {/* <h1 className="text_center mt-3">Robot Control Page</h1>
                    <Col>
                            <Connection></Connection>
                    </Col>
                    <Col>
                        <Col>          
                            <Teleoperation></Teleoperation>
                        </Col>
                        <Row>
                            <Col>
                                <Camera />
                                <RobotState />
                            </Col>
                            <Col>          
                                <h4>MAP</h4>
                                <Map></Map>
                            </Col>
                        </Row>
                    </Col> */}

                </Container>
             
            </div>
        );
    }

}

export default Home;
