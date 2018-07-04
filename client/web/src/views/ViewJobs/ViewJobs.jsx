import React, { Component } from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Button from "../../components/CustomButton/CustomButton.jsx";
import { Form,FormControl,FormGroup,Row,Col,Alert,Modal } from "react-bootstrap";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
const borderBtm = {borderBottom:'1px solid #ddd'};
const paddingTop = {padding:'10px 0px'};
const whiteSpace = {whiteSpace:'normal'};
const jobDescription ="";

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      key: 1     
    };
   // SessionHelper("Hello");
  }
  
  handleSelect(key) {   
    this.setState({ key });
  }
  
  render() {
    return (
        <div className="col-md-12">
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example">
        <Tab eventKey={1} title="View Jobs">
        <p></p>
        <form><FormInputs
            ncols={["col-md-5"]}
            proprieties={[
                {
                label: "Search Jobs",
                type: "text",
                bsClass: "form-control",
                placeholder: "Search Jobs"
                }
            ]}
           /></form>       
          {content}
        </Tab>
        <Tab eventKey={2} title="Applied Jobs">      
          {appliedContent}
        </Tab>
        <Tab eventKey={3} title="Shortlisted" disabled>
          Tab 3 content
        </Tab>        
      </Tabs>       
    </div>
    );
  }
};

class JobDesc extends Component {
    constructor(props, context) {
        super(props, context);   
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
          show: false     
        };
      }
      
     handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
          <div>
               <span className="strong btn-link" onClick={this.handleShow}>Details</span>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Front End / UI Developer - Lead</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="col-md-12" style={paddingTop}>     
                <Button className="col-md-4" bsStyle="info" fill  type="submit">
                    Apply for job
                </Button>
            </div>
            <h4>Must have experience with Angular, React, Node JS.</h4>
            <p>
            Must be highly-skilled in the technologies listed below and possess excellent communication skills. The ideal candidate will be a full stack developer (JavaScript/Ajax/Java/MySQL) who thrives in a fast-paced startup environment where each team-member is vital to the overall success of the product.
            </p>
            <p>Learn, understand and use custom Java framework used for back-end; contribute to development of custom framework as needed </p>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
    }
  }

//view list of jobs
const posts = [
  {jobId: 1, jobTitle: 'Front End / UI Developer - Lead',jobCompany:'Verizon', jobDesc: 'Must have experience with Angular, React, Node JS.'},
  {jobId: 2, jobTitle: 'Embedded Developer',jobCompany:'Verizon', jobDesc: 'Front-end development skills with React JS, Angular.'},
  {jobId: 3, jobTitle: 'Senior Java Developer',jobCompany:'Verizon', jobDesc: 'Java, javascript, and React are high on our list. (Other notables: Python,Ruby, Scala, .NET, Clojure.)'},
  {jobId: 4, jobTitle: 'Database Developer – Senior Consultant',jobCompany:'Verizon', jobDesc: 'Core responsibilities include disaster recovery, performance analysis and tuning and database maintenance.'},
];

const appliedPosts = [
  {jobId: 1, jobTitle: 'Front End / UI Developer',jobCompany:'Verizon', jobDesc: 'Must have experience with Angular, React, Node JS. Albin Engineering Services'}  
];

//View Jobs
const content = posts.map((post) =>
    <div key={post.jobId} className="col-md-12" style={borderBtm}>
    <div className="col-md-8">
      <h4 className="strong" onClick={this.handleShow}>{post.jobTitle}<JobDesc/></h4>
      
      <div>{post.jobCompany}</div>
      <p>{post.jobDesc}</p></div>
      <div className="col-md-4" style={paddingTop}>     
        <Button bsStyle="info" fill  type="submit">
            Apply for job
        </Button>
      </div>
    </div>
  );

  //Applied Jobs
  const appliedContent = appliedPosts.map((post) =>
    <div key={post.jobId} className="col-md-12" style={borderBtm}>
    <div className="col-md-8">
      <h4 className="strong btn-link">{post.jobTitle}</h4>
      <div>{post.jobCompany}</div>
      <p>{post.jobDesc}</p></div>
    </div>
  );
class ViewJobs extends Component {
  render() {
    return (
      <div className="App">        
        <div className="col-md-12">
          <p className="App-intro col-md-12"></p>                  
          <div><ControlledTabs/></div>
        </div>          
      </div>
    );
  }
}

export default ViewJobs;
