import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <div className="info">
          <div className="icon icon-success ml-5">
            <i className="tim-icons icon-money-coins" />
          </div>
          <h4 className="info-title text-primary">{this.props.title}</h4>
          <hr className="line-primary" />
          <p>
            Divide details about your work into parts. Write a few lines about
            each one. A paragraph describing a feature will.
          </p>
        </div>
      </div>
    );
  }
}
