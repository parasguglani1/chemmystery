import { useState } from "react";
import { Button, Typography, Card } from "antd";

const OrderNowCard = ({ image, chemtitle }) => {
  return (
    <Card
      className="chem"
      cover={<img className="chem-image" src={image} alt="ram" />}
      bodyStyle={{ padding: 0 }}
      // chemtitle={chemtitle}
    >
      <div className="overlay"></div>
      <div className="image-text">
        {/* <Typography className="chem-title">{chemtitle}</Typography> */}
        <Typography className="chem-subtitle">
          {chemtitle} <br />
        </Typography>
      </div>
      <Button className="chem-img-btn" type="primary" shape="round">
        Enter
      </Button>
    </Card>
  );
};

export default OrderNowCard;
