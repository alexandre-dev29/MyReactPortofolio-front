import React, {Component} from 'react';


const Experience = (props) => {
    return (
        <blockquote className="blockquote mb-4 col-lg-5 col-md-6 col-sm-10">
            <div className="row">
                <i className="fa fa-briefcase  mb-1 mr-3 ml-3 text-warning" aria-hidden="true"></i>
                <h4 className="font-weight-bold mb-3 text-success">{props.title}</h4>
            </div>
            <p className="font-weight-bold ml-1 dark-grey-text mb-2 text-gray-dark">{props.periode}</p>
            <p className="mb-0 ml-1 text-white">{props.description}</p>
        </blockquote>
    );
};

export default Experience;