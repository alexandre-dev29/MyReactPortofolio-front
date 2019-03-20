import React, { Component } from 'react'

import { Container, Row, Col} from "reactstrap";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="section section-lg">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <img src={require("../../../assets/img/carousel/fifth.jpg")} alt="..."  className="img-fluid"/>
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">About Me</h1>
                  <p className="profile-description text-left">
                    I am a passionate software Engineer and fullstack web developer
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
      </div>
    )
  }
}
