import React, { Component } from "react";

export default class work extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card card-cascade wider reverse my-4">
          <div className="view overlay hm-white-slight">
            <img
              src={require("../../../assets/img/project.jpg")}
              className="img-fluid"
              alt="..."
            />
            <a href="http://google.com">
              <div className="mask" />
            </a>
          </div>

          <div className="card-body text-center">
            <h4 className="card-title text-info">
              <strong>{this.props.title}</strong>
            </h4>
            <h5 className="text-success">
              <strong>{this.props.Categorie}</strong>
            </h5>

            <p className="card-text">
                {this.props.description}
            </p>

              <a className="btn btn-primary" href={this.props.link}>Follow</a>
          </div>
        </div>
      </div>
    );
  }
}
