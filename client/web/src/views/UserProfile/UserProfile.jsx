import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import avatar from "../../assets/img/faces/face-0.jpg";
import { serverUrl } from "../../variables/Variables.jsx";

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile : {},
      education : {},
      work: {}
    }
  }

  componentWillMount() {

  }

  updateProfile() {
    console.log("update profile");
    var headers =  {
      'Content-Type': 'application/json'
    };

    let data = JSON.stringify({
      "hello":"world"
    });

    axios.post("http://www.mocky.io/v2/5b3b885b3300006500599d14", data, headers)
      .then((response) => {
        this.setState(response);
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3", "col-md-4"]}
                      proprieties={[                        
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "Chaitanya"
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Chaitanya"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "B"
                        }
                      ]}
                    />    
                     <FormInputs
                      ncols={["col-md-3", "col-md-4"]}
                      proprieties={[                        
                        {
                          label: "Year's of Experience",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Experience",
                          defaultValue: "0"
                        },
                        {
                          label: "When can u join?",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "days"
                        }
                      ]}
                    />              
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="About you"
                            defaultValue="Please give a description about yourself"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit"
                      onPress>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ss7.vzw.com/is/image/VerizonWireless/landing-page-for-deals-hero-m-06142018-1?h=300&w=400"
                avatar={avatar}
                name="Chaitanya B"               
                description={
                  <Button style={{marginTop:10}} bsStyle="info" fill type="submit"
                      onPress>
                      Upload Resume
                    </Button>
                }                
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
            <Card
                title="Education details"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3","col-md-4"]}
                      proprieties={[                        
                        {
                          label: "Degree",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Degree",
                          defaultValue: "Bachlor of Engineering"
                        },
                        {
                          label: "School",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "School"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Field of study",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Computer science"
                        },
                        {
                          label: "Pass out",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "Year",
                          defaultValue: "2016"
                        }
                      ]}
                    /> 
                              
                    <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="About you"
                            defaultValue="Please give a description about yourself"
                          />
                        </FormGroup>    
                   
                    <Button bsStyle="info" pullRight fill onClick={this.updateProfile.bind(this)}>
                      Save Education
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />   
            </Col>
            </Row>
          <Row>
            <Col md={8}>
            <Card
                title="Work Experience"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3"]}
                      proprieties={[                        
                        {
                          label: "Job Title",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "title",
                          defaultValue: "Principal apps"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      proprieties={[
                        {
                          label: "Company",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Oracle"
                        }
                      ]}
                    />     
                     <FormInputs
                      ncols={["col-md-6"]}
                      proprieties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Hyderabad"
                        }
                      ]}
                    />    
                     <FormInputs
                      ncols={["col-md-3","col-md-4"]}
                      proprieties={[
                        {
                          label: "From",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "date",
                          defaultValue: ""
                        },
                        {
                          label: "To",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "date",
                          defaultValue: ""
                        }
                      ]}
                    />    
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Description"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Save
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />   
            </Col>
            </Row>  
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
