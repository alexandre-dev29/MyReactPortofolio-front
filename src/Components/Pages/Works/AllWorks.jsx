import React, { Component } from "react";
import "../../../assets/css/mycss.css"
import Works from "./work";

export default class AllWorks extends Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (

        <div className="header-filter">
          <div className="squares square1" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <section className="section section-lg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <h1 className="text-primary text-center mt-lg display-3">
                    Works
                  </h1>
                  <div className="row justify-content-start">
                    <Works
                      title="My Adventure"
                      Categorie="Photography"
                      description=" Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam."
                    link="https://google.com"
                    />
                    <Works
                      title="My Adventure"
                      Categorie="Photography"
                      description=" Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam."
                    link="https://google.com"
                    />
                    <Works
                      title="My Adventure"
                      Categorie="Photography"
                      description=" Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam."
                    link="https://google.com"
                    />
                    <Works
                      title="My Adventure"
                      Categorie="Photography"
                      description=" Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam."
                    link="https://google.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}
