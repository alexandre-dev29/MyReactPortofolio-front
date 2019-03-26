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
                  <h3 className="profile-description text-left align-content-center">
                      I am a Full stack software Engineer and Web developer. <br/>
                    Passionate about Software, Mobile and Web development(Frontend and Backend), Game developments, Open source Ecosystems, Artificial Intelligent technologies and also passionate about sharing what i know.
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>
      </div>
    )
  }
}
