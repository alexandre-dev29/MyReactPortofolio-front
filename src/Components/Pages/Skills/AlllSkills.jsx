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
        experience_title: "Full Stack  Web Developer at Wikisuite Groupware",
        experience_periode: "2018 - Present ",
        experience_description: "Working at Wikisuite has allowed me to gain a lot of experience in working remotely, and developing in an open source ecosystem. Collaborating with remote teams and this boosts your sense of collaboration even further."
    },
    {
        experience_title: "Game Developer At Badzone studio ",
        experience_periode: "2017 - 2018",
        experience_description: "This was probably one of the biggest and best work experiences, working in a gaming startup gives you a great sense of collaboration because you have to be in touch with graphic designers, level designers and content creators and you really need to be in good synchronization in order to evolve well. "
    },

    {
        experience_title: "Consultant at Bralima SARL ",
        experience_periode: "2016 - 2017",
        experience_description: "Bralima SARL being a brasserie, the different projects I worked on were those of tracking down the different delivery vehicles and managing customer requests. This allowed me to improve my skills in mobile development."
    },

    {
        experience_title: "Software Developer at Gecamine S.A",
        experience_periode: "2015 - 2016",
        experience_description: "I was hired by Gecamine S.A to develop several own software such as attendance system, Equipment management, etc this give me great experience in software development"
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
