import React, { Component } from "react";

import { Row, Col } from "reactstrap";

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
        <div className="page-header">
          <HeaderSkill />
        </div>
      </div>
    );
  }
}
