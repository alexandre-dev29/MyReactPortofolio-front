import React, { Component } from "react";

import Skill from "./Skill";

export default class headerSkill extends Component {
  render() {
    return (
      <div>
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
                <h1 className="text-center text-info mt-lg">Skills</h1>
                <div className="row row-grid justify-content-center">
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
