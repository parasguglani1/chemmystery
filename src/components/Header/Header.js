import React, { useState } from "react";
import { Divider, Col, Row, Button } from "antd";

//IMPORTING ICONS
import Map from "../../assets/map.svg";
import Chem from "../../assets/chem.svg";
import Shopping from "../../assets/shopping.svg";
import Cart from "../../assets/cart.svg";
import CartWhite from "../../assets/cartwhite.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import Heart from "../../assets/heart.svg";
import NavMenu from "../../assets/menu.svg";
import { DownOutlined } from "@ant-design/icons";

import Drawer from "../Drawer";
import Navbar from "../Navbar";

const Header = () => {
  // set mobile screen sidebar flag
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="header-wrapper">
      <Row justify="space-between" className="header-row-top">
        <Col span={8} className="header-info-location">
          {" "}
          <img className="header-icon" src={Map} />
          <span className="header-text">Lorem, ipsum dolor Sit Amet</span>
        </Col>
        <Col span={8} className="logo-wrapper">
          {" "}
          <img className="logo-desk-img" src={Chem} />
          <span className="logo-desk-text">PIZZAPIZZA</span>
        </Col>
        <Col span={8} className="header-info-call-order">
          {" "}
          <img className="header-icon" src={Shopping} />
          <span className="header-text">
            call and order: +1 123-456-789 location <DownOutlined />
          </span>
        </Col>
      </Row>
      <Divider className="divider" />
      <Row justify="space-between">
        <Col span={12}>
          <Navbar />
        </Col>
        <Col span={12} className="header-right-menu">
          <div className="navbar-icon-wrapper">
            <img className="icon" src={Search} />
            <img className="icon" src={User} />
            <img className="icon" src={Heart} />
          </div>
          <Button
            className="cart-btn"
            type="primary"
            shape="round"
            icon={
              <img className="icon" style={{ marginRight: "8px" }} src={Cart} />
            }
          >
            0 items : $0.00{" "}
          </Button>
        </Col>
      </Row>
    </div>

    // <Drawer visible={openDrawer} onClose={() => setOpenDrawer(false)} />
  );
};

export default Header;
