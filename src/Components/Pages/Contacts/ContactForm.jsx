import React, {Component} from 'react';
import {
    Button, Card,
    CardBody, CardFooter,
    CardHeader,
    CardTitle,
    Form, FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import classnames from "classnames";

class ContactForm extends Component {
    state = {fullNameFocus: false
    ,emailFocus: false};
    render() {
        return (
            <div>
                <Card className="card-register">
                    <CardHeader className="text-center">
                        <CardTitle tag="h3" className="text-primary">Contact Me</CardTitle>
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

                                />
                            </InputGroup>
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
                                    placeholder="Subject"
                                    type="text"

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
                                />
                            </InputGroup>
                            <textarea rows="9" cols="30" placeholder="Message" className="form-control"/>
                        </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button className="btn-round" color="primary" size="lg">
                            <i className="tim-icons tim-icons-lg icon-send " />
                            Send
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default ContactForm;