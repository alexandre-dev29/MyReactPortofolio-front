import React, { Component } from "react";

import HeaderSkill from "./headerSkill";
import Experience from './experience'

const all_skills = [
    {
        skill_categorie: "Frontend Development",
        main_color:"text-white",
        skills: [
            {
                skill_title: "Javascript",
                skill_percent: "80",
                skill_color: "info"
            },
            {
                skill_title: "React",
                skill_percent: "75",
                skill_color: "info"
            },
            {
                skill_title: "Angular",
                skill_percent: "80",
                skill_color: "info"
            },
            {
                skill_title: "Html, Css",
                skill_percent: "90",
                skill_color: "info"
            },
        ]
    },
    {
        skill_categorie: "Backend Development",
        main_color:"text-white",
        skills: [
            {
                skill_title: "NodeJs",
                skill_percent: "75",
                skill_color: "success"
            },
            {
                skill_title: "ExpressJs",
                skill_percent: "70",
                skill_color: "success"
            },
            {
                skill_title: "PHP",
                skill_percent: "85",
                skill_color: "success"
            },
            {
                skill_title: "Laravel",
                skill_percent: "60",
                skill_color: "success"
            },
        ]
    },
    {
        skill_categorie: "Software Development",
        main_color:"text-white",
        skills: [
            {
                skill_title: "Python",
                skill_percent: "75",
                skill_color:"warning"
            },
            {
                skill_title: "Java SE & JavaFx",
                skill_percent: "85",
                skill_color:"warning"
            },
        ]
    },
    {
        skill_categorie: "Mobile Development",
        skills: [
            {
                skill_title: "React Native",
                skill_percent: "65",
                skill_color: "warning"
            },
            {
                skill_title: "Java",
                skill_percent: "70",
                skill_color: "warning"
            },

        ]
    },
    {
        skill_categorie: "Game Development",
        main_color:"text-white",
        skills: [
            {
                skill_title: "Unity",
                skill_percent: "60",
                skill_color: "info"
            },
            {
                skill_title: "Unreal Engine",
                skill_percent: "70",
                skill_color: "info"
            },
        ]
    },
    {
        skill_categorie: "UI & UX",
        skills: [
            {
                skill_title: "Photoshop",
                skill_percent: "60",
                skill_color: "warning"
            },
            {
                skill_title: "Adobe Xd",
                skill_percent: "55",
                skill_color: "warning"
            },
            {
                skill_title: "Adobe Illustrator",
                skill_percent: "50",
                skill_color: "warning"
            },

        ]
    },
];

const all_experiences= [
    {
        experience_title: "Freelance  Web Developer at Wikisuit Groupware",
        experience_periode: "July, 2013 - Present (4 years)",
        experience_description: "Lorem ipsum dolor sit amet, consectetur adipiscingb elit. "
    },
    {
        experience_title: "Consultant at Bralima SARL  ",
        experience_periode: "July, 2013 - Present (4 years)",
        experience_description: "Lorem ipsum dolor sit amet, consectetur adipiscingb elit. "
    },
    {
        experience_title: "Game Developer At Badzone studio ",
        experience_periode: "July, 2013 - Present (4 years)",
        experience_description: "Lorem ipsum dolor sit amet, consectetur adipiscingb elit. "
    },
    {
        experience_title: "Software Developer at Gecamine S.A",
        experience_periode: "July, 2013 - Present (4 years)",
        experience_description: "Lorem ipsum dolor sit amet, consectetur adipiscingb elit. "
    },

];

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
          <HeaderSkill all_skills={all_skills}/>
        </div>
        <div className="section section-lg">
          <h1 className="text-center display-3 text-primary">Experiences</h1>
          <div className="container">
              <div className="row row-grid justify-content-between">
                  {all_experiences.map((experience, index) => (
                      <Experience
                          key={index}
                          title={experience.experience_title}
                          periode={experience.experience_periode}
                          description={experience.experience_description}
                      />
                  ))}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
