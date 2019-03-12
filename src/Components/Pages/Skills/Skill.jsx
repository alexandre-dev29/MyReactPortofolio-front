import React, { Component } from "react";
import {Progress} from "reactstrap";

export default class Skill extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="info pt-5">
          <div className="icon icon-success ml-5">
            <i className="tim-icons icon-money-coins" />
          </div>
          <h4 className="info-title text-primary">{this.props.title}</h4>
          <hr className="line-primary" />
            <div className="progress-container progress-primary">
                <span className="progress-badge text-info">Javascript</span>
                <Progress max="100" value="25">
                    <span className="progress-value">25%</span>
                </Progress>
            </div>
          <div className="progress-container progress-info">
                <span className="progress-badge text-info">Javascript</span>
                <Progress max="100" value="60">
                    <span className="progress-value">60%</span>
                </Progress>
            </div>
        </div>
      </div>
    );
  }
}
