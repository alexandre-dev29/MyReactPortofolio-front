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
                    {this.props.all_skills.map((skill, index) => (
                        <Skill title={skill.skill_categorie} color={skill.main_color} innerskill={skill.skills} key={index}/>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
