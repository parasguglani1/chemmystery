import React from "react";
import { Button, Typography, Row, Col } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";
import Pizza from "../../assets/ram2.jpg";
import GameImage1 from "../../assets/gameimage1.jpg";
import ResourceImage2 from "../../assets/resourceimage2.jpg";
import ActivityImage3 from "../../assets/activityimage3.png";

import OrderNowCard from "../OrderNowCard";

const image = [GameImage1, ResourceImage2, ActivityImage3];

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <img className="hero-img" src={Pizza} alt="pizza" />
          <div className="hero-info">
            {/* <Typography className='title'>Free Pizza</Typography> */}
            <Typography className="subtitle">
              Play and explore hidden mystery in chemistry now
            </Typography>
            <Button
              className="ordchemtitleer-btn lg"
              type="primary"
              // icon={<ShoppingCartOutlined />}
              shape="round"
            >
              Start Game
            </Button>
          </div>
        </div>
      </div>
      <Row
        className="chemwrapper"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8}>
          <OrderNowCard image={GameImage1} chemtitle={"Game"} />
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8}>
          <OrderNowCard image={ResourceImage2} chemtitle={"Resource"} />
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8}>
          <OrderNowCard image={ActivityImage3} chemtitle={"Activity"} />
        </Col>

        {image.map((img, i) => {
          return (
            <Col className="gutter-row" xs={24} sm={24} md={8} lg={8}>
              {/* <OrderNowCard image={img} key={i} /> */}
              {/* <OrderNowCard image={img} key={i} /> */}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Hero;
