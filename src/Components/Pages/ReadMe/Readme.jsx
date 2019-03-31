import React, { Component } from 'react'

import { Row, Col, Button } from "reactstrap";
import Skill from "../Skills/Skill";
import Works from "../Works/work";
import Article from "./Article";

export default class Readme extends Component {

  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <div>
        <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../../../assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../../assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../../../assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../../../assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../../../assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../../../assets/img/cercuri.png")}
            />
            <section className="section section-lg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h1 className="text-info text-center mt-lg display-3">
                                Articles
                            </h1>
                            <div className="row justify-content-start">
                               <Article/>
                               <Article/>
                               <Article/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
          </div>
      
      </div>
    )
  }
}
