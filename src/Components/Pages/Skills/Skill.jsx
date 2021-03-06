import React, { Component } from "react";
import {Progress} from "reactstrap";
import "../../../assets/css/mycss.css";


export default class Skill extends Component {
  render() {
    return (
      <div className="col-lg-4 ">
        <div className="info pt-5">
          <div className="icon icon-success ml-5">
            <i className="tim-icons icon-money-coins" />
          </div>
          <h4 className={"info-title " + this.props.color}>{this.props.title}</h4>
          <hr className="line-primary" />
            {this.props.innerskill.map((inner, index) => (
                <div className={"progress-container progress_skill progress-"+ inner.skill_color} key={index}>
                    <span className={"progress-badge text-white"}>{inner.skill_title}</span>
                    <Progress max="100" value={inner.skill_percent}>
                        <span className="progress-value">{inner.skill_percent}%</span>
                    </Progress>
                </div>
            ))}
        </div>
      </div>
    );
  }
}
