import React, { Component } from "react";
import "../../../assets/css/mycss.css"
import Works from "./work";
import {ApiCall} from "../../../Utils/ApiConfig";

const work_path = process.env.REACT_APP_API_URL + "/works";
const all_works = [
    {
        id:1,
        work_title: "My Portofolio Frontend",
        work_categorie: "Web Developpement",
        work_image:"../../assets/img/project.jpg",
        work_description: "This project of portofolio",
        work_link: "http://google.com"
    },
    {
        id:2,
        work_title: "My Portofolio backend",
        work_categorie: "Web Developpement",
        work_image:"../../assets/img/project.jpg",
        work_description: "This project of portofolio",
        work_link: "http://google.com"
    },
    {
        id:3,
        work_title: "Login System",
        work_categorie: "Web Developpement",
        work_image:"/src/assets/img/project.jpg",
        work_description: "This project of portofolio",
        work_link: "http://google.com"
    },
    {
        id:4,
        work_title: "Facial recognition",
        work_categorie: "Web Developpement",
        work_image:"../../assets/img/project.jpg",
        work_description: "This project of portofolio",
        work_link: "http://google.com"
    },
    {
        id:5,
        work_title: "Invoice managements",
        work_categorie: "Web Developpement",
        work_image:"../../assets/img/project.jpg",
        work_description: "This project of portofolio",
        work_link: "http://google.com"
    },

];

export default class AllWorks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_works: []
        }
    }


    componentDidMount() {
    document.body.classList.toggle("index-page");
    ApiCall.get(work_path+"/get_works", {
        params : {
            "user_email": process.env.REACT_APP_EMAIL_CONFIG,
        }
    }).then(res => {
        console.log(res.data.all_data);
        this.setState({
            all_works: res.data.all_data
        })
    });

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
                      {this.state.all_works.map(work => { return (
                          <Works
                              key={work._id}
                              title={work.work_title}
                              Categorie={work.work_category}
                              description={work.work_description}
                              link={work.work_link}
                              image={work.work_images}
                          />)
                      })}

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}
