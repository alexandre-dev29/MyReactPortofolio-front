import React, {Component} from "react";
import {Button, Modal} from "reactstrap";


import '../../../assets/css/mycss.css';

export default class work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoModal: false,
            modal_selected: {}
        }
    }

    toggleModal = (modalState, props) => {
        this.setState({
            modal_selected: {
                title: props.title,
                description: props.description,
                image:props.image
            }
        });
        this.setState({
            [modalState]: !this.state[modalState]
        });

    };

  render() {
      const {modal_selected} = this.state;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 work-animate">
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

              <a className="btn btn-primary text-white"
                 onClick={() => this.toggleModal("demoModal",this.props)}>Read More</a>
          </div>
        </div>

          {/* Sart Demo Modal */}
          <Modal
              isOpen={this.state.demoModal}
              toggle={() => this.toggleModal("demoModal", this.props)}
              size="lg"
          >
              <div className="modal-header justify-content-center">
                  <button
                      className="close"
                      onClick={() => this.toggleModal("demoModal",this.props)}
                  >
                      <i className="tim-icons icon-simple-remove" />
                  </button>
                  <h4 className="title title-up">{modal_selected.title}</h4>
              </div>
              <div className="modal-body">
                  <div className="row row-grid justify-content-lg-between">
                    <div className="col-lg-6">
                        <img
                            src={require("../../../assets/img/project.jpg")}
                            className="img-fluid"
                            alt="..."
                        />
                    </div>
                    <div className="col-lg-6">
                        <p>
                            {modal_selected.description}
                        </p>
                    </div>
                  </div>

              </div>
              <div className="modal-footer">
                  <Button color="default" type="button">
                      Nice Button
                  </Button>
                  <Button
                      color="danger"
                      type="button"
                      onClick={() => this.toggleModal("demoModal", {})}
                  >
                      Close
                  </Button>
              </div>
          </Modal>
          {/* End Demo Modal */}
      </div>
    );
  }
}
