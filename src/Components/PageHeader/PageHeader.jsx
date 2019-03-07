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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error maxime dicta maiores modi itaque. 
                    Eligendi, quam perspiciatis harum amet laudantium neque 
                    dignissimos repellat veniam? Dolore, 
                    inventore exercitationem? Magnam, quia laboriosam.
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../../assets/img/ryan.jpg")}
                  />
                </Col>
              </Row>
            </div>
        
        </Container>
      </div>
    )
  }
}
