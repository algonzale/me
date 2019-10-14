import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail",
      visible: false
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <NavLink to="/" exact>
            Alejandro Jimenez
          </NavLink>
        </div>
        <div className="menuCon">
          <div className="rightMenu">
            <RightMenu mode='horizontal'/>
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Links"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <RightMenu/>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
