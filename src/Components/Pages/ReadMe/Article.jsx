import React, {Component} from 'react';

class Article extends Component {
    render() {
        const {title, link, description, image} =this.props;
        return (
            <div className="col-4">
                <div className="card">

                    <div className="view overlay">
                        <img className="card-img-top"
                             src={process.env.REACT_APP_API_URL+ "/" + image}
                             alt="Card image cap"/>
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body">
                        <h4 className="card-title text-center text-success h4">{title}</h4>
                        <hr/>
                        <p className="card-text">{description}</p>
                        <a href={link} target="_blank" className="black-text d-flex justify-content-end"><h5>Read
                            more <i className="fas fa-angle-double-right"></i></h5></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;