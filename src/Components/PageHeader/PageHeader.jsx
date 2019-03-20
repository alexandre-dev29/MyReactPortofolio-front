import React, { Component } from 'react'

import { Container, Col, Row, Button } from "reactstrap";

export default class PageHeader extends Component {

    componentDidMount(){
        document.body.classList.toggle("index-page");
    }

    componentWillUnmount(){
        document.body.classList.toggle("index-page");
    }

  render() {
    return (
        <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
        <div className="content-center my-4">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white text-center">
                    I Am Axel Mwenze<br />
                  </h1>
                  <p className="text-white mb-3">
                   I am a software engineer passionate in coding and sharing what i know.
                  </p>
                  <div className="btn-wrapper mb-3">
                    <Button className="btn btn-primary">
                        <i className="tim-icons icon-cloud-download-93" />
                     Download Resume
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <a
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://www.linkedin.com/in/axel-mwenze-63711616b/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                      <a
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://gitlab.com/alexandre2908"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-gitlab" />
                      </a>
                       <a
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://github.com/alexandre-dev29"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github" />
                      </a>
                        <a
                            className="btn-icon btn-simple btn-round btn-neutral default"
                            href="https://medium.com/@axel.mwenze"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-medium" />
                        </a>
                    </div>
                  </div>
                </Col>
                <Col lg="5" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../../assets/img/main_photo.jpg")}
                  />
                </Col>
              </Row>
            </div>
        
        </Container>
      </div>
    )
  }
}
