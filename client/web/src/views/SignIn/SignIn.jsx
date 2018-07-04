import React, { Component } from "react";
import { Form, FormControl,FormGroup,  Row, Col, Alert } from "react-bootstrap";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import { Card } from "../../components/Card/Card";

class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    
    render() {
        return (
            <div className="content">
                <Card
                    title="Sign In"
                    content={
                        <form>
                            <FormInputs
                                ncols={["col-md-6", "col-md-6"]}
                                proprieties={[
                                    {
                                    label: "First name",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "First name",
                                    defaultValue: "Mike"
                                    },
                                    {
                                    label: "Last name",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Last name",
                                    defaultValue: "Andrew"
                                    }
                                ]}
                             />
                            <FormInputs
                                    ncols={["col-md-5"]}
                                    proprieties={[

                                        {
                                        label: "Email address",
                                        type: "email",
                                        bsClass: "form-control",
                                        placeholder: "Email"
                                        }
                                    ]}
                                    />
                            <FormInputs
                                    ncols={["col-md-5"]}
                                    proprieties={[
                                        {
                                        label: "Password",
                                        type: "email",
                                        bsClass: "form-control",
                                        placeholder: "Password"
                                        }
                                    ]}
                            />

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                 <Button bsStyle="info" simple fill type="submit">
                                    Sign In
                                  </Button>
                                </Col>
                            </FormGroup>
                        </form>
                    }
               />
            </div>
          )
        }
}

export default SignIn;
