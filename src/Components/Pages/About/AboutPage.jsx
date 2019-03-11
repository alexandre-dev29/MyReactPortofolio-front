import React, { Component } from 'react'

import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
{
  src: require("../../../assets/img/denys.jpg"),
  altText: "Slide 1",
  caption: "Big City Life, United States"
},
{
  src: require("../../../assets/img/fabien-bazanegue.jpg"),
  altText: "Slide 2",
  caption: "Somewhere Beyond, United States"
},
{
  src: require("../../../assets/img/mark-finn.jpg"),
  altText: "Slide 3",
  caption: "Stocks, United States"
}
];

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="section section-lg">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">About Me</h1>
                  <p className="profile-description text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit in minus, atque dolores temporibus aut, 
                    fugiat omnis assumenda rerum dolore odio nam labore 
                    voluptatum sunt tempora corrupti, tenetur iste soluta?
                  </p>
                  
                </Col>
              </Row>
            </Container>
          </div>
      </div>
    )
  }
}
