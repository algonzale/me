import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
const SubMenu = Menu.SubMenu;

class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode={this.props.mode}>
          <Menu.Item key="login">
            <NavLink to="/projects" exact>
              Projects
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/contact-me" exact>
              Contact me
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default RightMenu;
