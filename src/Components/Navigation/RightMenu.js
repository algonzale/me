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
            <a href="https://algonzale.github.io/projects/" target="#">
              Projects
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default RightMenu;
