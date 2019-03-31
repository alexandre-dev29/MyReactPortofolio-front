import React, {Component} from 'react';

class Article extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card">

                    <div className="view overlay">
                        <img className="card-img-top"
                             src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                             alt="Card image cap"/>
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>


                    <div className="card-body">


                        <h4 className="card-title text-center text-success h3">Card title</h4>
                        <hr/>

                        <p className="card-text">Some quick example text to build on the card title
                            and make up the bulk of the card's content.</p>

                        <a href="#!" target="_blank" className="black-text d-flex justify-content-end"><h5>Read
                            more <i className="fas fa-angle-double-right"></i></h5></a>

                    </div>

                </div>

            </div>
        );
    }
}

export default Article;