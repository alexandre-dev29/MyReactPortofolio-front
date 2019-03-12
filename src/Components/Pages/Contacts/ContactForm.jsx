import React, {Component} from 'react';
import {
    Button, Card,
    CardBody, CardFooter,
    CardHeader,
    CardImg,
    CardTitle,
    Form, FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Label
} from "reactstrap";
import classnames from "classnames";

class ContactForm extends Component {
    state = {};
    render() {
        return (
            <div>
                <Card className="card-register">
                    <CardHeader>
                        <CardImg
                            alt="..."
                            src={require("../../../assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form className="form">
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.fullNameFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Full Name"
                                    type="text"
                                    onFocus={e => this.setState({ fullNameFocus: true })}
                                    onBlur={e => this.setState({ fullNameFocus: false })}
                                />
                            </InputGroup>
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.emailFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-email-85" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Email"
                                    type="text"
                                    onFocus={e => this.setState({ emailFocus: true })}
                                    onBlur={e => this.setState({ emailFocus: false })}
                                />
                            </InputGroup>
                            <InputGroup
                                className={classnames({
                                    "input-group-focus": this.state.passwordFocus
                                })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="tim-icons icon-lock-circle" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Password"
                                    type="text"
                                    onFocus={e => this.setState({ passwordFocus: true })}
                                    onBlur={e => this.setState({ passwordFocus: false })}
                                />
                            </InputGroup>
                            <FormGroup check className="text-left">
                                <Label check>
                                    <Input type="checkbox" />
                                    <span className="form-check-sign" />I agree to the{" "}
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        terms and conditions
                                    </a>
                                    .
                                </Label>
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button className="btn-round" color="primary" size="lg">
                            Get Started
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default ContactForm;