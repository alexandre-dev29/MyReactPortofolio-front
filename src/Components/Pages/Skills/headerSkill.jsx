import React, { Component } from "react";

import Skill from "./Skill";

export default class headerSkill extends Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
    }

    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }
  render() {
    return (
      <div>
          <div className="squares square1" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />

        <section className="section section-lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h1 className="text-center text-info mt-lg">Skills</h1>
                <div className="row justify-content-start">
                  <Skill title="Web Developpement" />
                  <Skill title="Game Developpement" />
                  <Skill title="Software Developpement" />
                  <Skill title="UI/UX Developpement" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
