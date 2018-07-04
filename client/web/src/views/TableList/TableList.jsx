import React, { Component } from "react";
import { Grid, Row, Col, Table,DropdownButton,MenuItem } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import { thArray, tdArray} from "../../variables/Variables.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";
import ReactDOM from "react-dom";


class TableList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tdArray : tdArray
    };
  }

  renderDropdownButton= (title,index) => {
    const jobStatus1 = ["Applied","InReview","Shortlisted","Scheduled","InVerification","Offered","Rejected"];
    return(
      <DropdownButton id={"exampleId"} title={title}>
          {Object.values(jobStatus1).map(key => <MenuItem eventKey={key} onSelect= {this.onTargetSelect} >{key}</MenuItem>)}
        </DropdownButton>
    );
  } 

  onTargetSelect = (key) => {
    console.log(key);
  }

  onNameClick = () =>{
    ReactDOM.render(
      <UserProfile/>,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Candidates applied"
                category="Candidate status can be updated here"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              console.log("Key ::"+key);
                              switch(key){
                                 case 1: return  <td onClick={this.onNameClick.bind(this)} key={key}>{prop}</td>;
                                 case 2:return <td>{this.renderDropdownButton(prop, 0)}</td>
                                 case 4:
                                 case 5:return <td><Button bsStyle="info" fill  type="submit">
                                 {prop}
                             </Button></td>;     
                             }
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>             
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  
 
}

export default TableList;
