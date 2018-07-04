import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import { Form, FormControl,FormGroup,  Row, Col, Alert } from "react-bootstrap";
import { FormInputs } from "./components/FormInputs/FormInputs.jsx";
import Button from "./components/CustomButton/CustomButton.jsx";
import { Card } from "./components/Card/Card";

const marginTop = {marginTop:"5%"};

class SignIn extends Component {
  constructor(props, context) {
      super(props, context);  
      this.handleChange = this.handleChange.bind(this);  
    
      this.state = {
        value: 'signin'
      };
  }
  
  componentDidMount() {
     
  }

  handleChange(e) {
      
      this.setState({ value: 'app' });
      ReactDOM.render(
        <HashRouter1/>,
        document.getElementById("root")
      );
  }
  updatevalue(e) {
      console.log("update value");
      console.log(e.value);
  }
  render() {
      return (
          <div className="content col-md-offset-3 col-md-6" style={marginTop}>
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
                                  defaultValue: "React"
                                  },
                                  {
                                  label: "Last name",
                                  type: "text",
                                  bsClass: "form-control",
                                  placeholder: "Last name",
                                  defaultValue: "Warriors"
                                  }
                              ]}
                           />
                          <FormInputs
                                  ncols={["col-md-5"]}
                                  inputref = {node => this.inputNode = node}
                                  proprieties={[

                                      {
                                      label: "Email address",
                                      type: "email",
                                      bsClass: "form-control",
                                      defaultValue: "reactwarriors@verizon.com",
                                      
                                      }
                                  ]}
                                  />
                          <FormInputs
                                  ncols={["col-md-5"]}
                                  onChange={this.updatevalue}
                                  proprieties={[
                                      {
                                      label: "Password",
                                      type: "email",
                                      bsClass: "form-control",
                                      defaultValue: "*********",
                                     
                                      }
                                  ]}
                          />

                          <FormGroup>
                              <Col smOffset={2} sm={10}>
                               <Button bsStyle="info" simple fill onClick={this.handleChange}>
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

class HashRouter1 extends Component{
    constructor(props, context) {
        super(props, context);  
        //this.handleChange = this.handleChange.bind(this);  
        this.state = {
          value: 'app'
        };
    }
    render(){
        return(
            <HashRouter>
                <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route to={prop.path} component={prop.component} key={key} />;
                })}
                </Switch>
            </HashRouter>
        )
    }
} 

/*ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);*/

ReactDOM.render(
  <SignIn/>,
  document.getElementById("root")
);
