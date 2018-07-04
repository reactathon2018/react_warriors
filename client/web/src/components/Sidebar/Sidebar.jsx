import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks.jsx";

import logo from "../../assets/img/reactlogo.png";
import vzlogo from "../../assets/img/vzw.png";

import dashboardRoutes from "../../routes/dashboard.jsx";
import candidateDashBoardRoutes from "../../routes/candidatedashboard.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  renderSidebar = () => {
    var isCandidate = 0;//props.user.type;
    var routes = isCandidate == false ? dashboardRoutes : candidateDashBoardRoutes;
    return (
      routes.map((prop, key) => {
        if (!prop.redirect)
          return (
            <li
              className={
                prop.upgrade
                  ? "active active-pro"
                  : this.activeRoute(prop.path)
              }
              key={key}
            >
              <NavLink
                to={prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </NavLink>
            </li>
          );
        return null;
      })
    );
  }
  
  render() {
   
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"        
      >
        <div className="sidebar-background" />
        <div className="logo">
          
            <div className="logo-img">
              <img src={vzlogo} align="middle" alt="logo_image" />
            </div>
            <div style={{textAlign:"center",fontWeight:"bold",marginTop:10}}>
             Careers
            </div>  
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {this.renderSidebar()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
