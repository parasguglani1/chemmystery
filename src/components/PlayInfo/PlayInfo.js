import React from "react";
import { Col, Row, Typography } from "antd";
import quoteIcon1 from "../../assets/quoteicon1.svg";
import quoteIcon2 from "../../assets/quoteicon2.svg";
import quoteIcon3 from "../../assets/quoteicon3.svg";

const PlayInfo = () => {
  return (
    <Row
      className="quote"
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" xs={24} sm={24} md={24} lg={8}>
        <div className="shipping">
          <div className="quote-icon">
            <img src={quoteIcon1} alt="free shipping" />
          </div>
          <div className="quote-text">
            <Typography className="quote-title">Free to play</Typography>
            <Typography className="quote-subtitle">
              sing up for updates and get free Quiz
            </Typography>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={24} lg={8}>
        <div className="play">
          <div className="quote-icon">
            <img src={quoteIcon2} alt="30 min play" />
          </div>
          <div className="quote-text">
            <Typography className="quote-title">30 minutes play</Typography>
            <Typography className="quote-subtitle">
              evrything you order will be quckly delivered to your door
            </Typography>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={24} lg={8}>
        <div className="quality">
          <div className="quote-icon">
            <img src={quoteIcon3} alt="best quality" />
          </div>
          <div className="quote-text">
            <Typography className="quote-title">
              best quality gurantee
            </Typography>
            <Typography className="quote-subtitle">
              piizalian is a international chain of family resturnts
            </Typography>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PlayInfo;
