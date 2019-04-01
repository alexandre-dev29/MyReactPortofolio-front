import React, { Component } from 'react'
import Article from "./Article";
import {ApiCall} from "../../../Utils/ApiConfig";

const articlepath = process.env.REACT_APP_API_URL + "/articles";

export default class Readme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_articles: [
               /* {
                    title: "Remote Jobs Is The Future For Developers",
                    image: "../../assets/img/project.jpg",
                    description: "Cet article vous parle des differents avantage du travail en remote pour les entreprise et les developers",
                    link: "https://medium.com"
                },
                {
                    title: "Remote Jobs Is The Future For Developers",
                    image: "../../assets/img/project.jpg",
                    description: "Cet article vous parle des differents avantage du travail en remote pour les entreprise et les developers",
                    link: "https://medium.com"
                },
                {
                    title: "Remote Jobs Is The Future For Developers",
                    image: "../../assets/img/project.jpg",
                    description: "Cet article vous parle des differents avantage du travail en remote pour les entreprise et les developers",
                    link: "https://medium.com"
                },*/
            ],
            isLoading: false
        }
    }


    componentDidMount() {
    document.body.classList.toggle("landing-page");

        ApiCall.get(articlepath+"/get_articles", {
            params : {
                "user_email": process.env.REACT_APP_EMAIL_CONFIG,
            }
        }).then(res => {
            console.log(res);
            this.setState({
                all_articles: res.data.all_data,
                isLoading: true
            })
        });
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
        const  {all_articles, isLoading} =this.state;
    return (
      <div>
        <div className="page-header">
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
                            <h1 className="text-info text-center mt-lg display-3">
                                Articles
                            </h1>
                                {!isLoading ?
                                    <div className="row justify-content-center">
                                        <img src={require("../../../assets/img/Loading/loading_infinity.svg")} alt="loading works" />
                                    </div> :
                                    <div className="row justify-content-start">
                                        {all_articles.map((article, index) => (
                                            <Article
                                                key={article._id}
                                                title={article.article_title}
                                                image={article.article_image}
                                                link={article.article_link}
                                                description={article.article_description}
                                            />
                                        ))}
                                    </div>
                                }
                        </div>
                    </div>
                </div>
            </section>
          </div>
      
      </div>
    )
  }
}
