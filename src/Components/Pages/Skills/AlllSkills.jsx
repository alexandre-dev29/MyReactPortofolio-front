import React, { Component } from "react";

import HeaderSkill from "./headerSkill";

export default class AlllSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }

  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <div>
        <div className="header-filter">
          <HeaderSkill />
        </div>
      </div>
    );
  }
}
