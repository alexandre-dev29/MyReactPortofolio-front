import React, {Component} from 'react';


const Experience = (props) => {
    return (
        <blockquote className="blockquote white mb-4 col-lg-5 col-md-6 col-sm-10">
            <div className="row">
                <i className="fas fa-briefcase fa-x mb-1 mr-3 ml-3 dark-grey-text" aria-hidden="true"></i>
                <h5 className="font-weight-bold mb-3">{props.title}</h5>
            </div>
            <p className="font-weight-bold ml-1 dark-grey-text mb-2">{props.periode}</p>
            <p className="mb-0 ml-1 light-grey-text">{props.description}</p>
        </blockquote>
    );
};

export default Experience;