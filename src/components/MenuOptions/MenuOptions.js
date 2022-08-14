import React from "react";
import { Button, Typography, Row, Col } from "antd";

const menu = ["physical", "inorganic", "organic", "biochem", "chemistry"];

const MenuOptions = () => {
  return (
    <Row className="category">
      <Col className="btn-container">
        {menu.map((item) => {
          return (
            <Button className="chemcategory-btn" type="primary" shape="round">
              <Typography>{item}</Typography>
            </Button>
          );
        })}
      </Col>
    </Row>
  );
};

export default MenuOptions;
