import React from "react";
import { Input, Button, Divider, Typography } from "antd";

// IMPORTING SVG'S
import Facebook from "../../assets/facebookred.svg";
import Twitter from "../../assets/twitterred.svg";
import Instagram from "../../assets/instagramred.svg";
import Youtube from "../../assets/youtubered.svg";
import Chem from "../../assets/chem.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer-top">
        <Typography className="footer-title">
          Subscribe To NewsLetter
        </Typography>
        <Typography className="footer-subtitle">
          Subscribe to recive our Weekly hot promotion every monday
        </Typography>
        <div className="footer-textfield-wrapper">
          <Input className="footer-textfield" placeholder="Enter Your Name" />
          <Button className="footer-btn" type="primary">
            Submit
          </Button>
        </div>
        <Divider className="footer-divider" />
        <Divider className="footer-divider-content">
          <div className="footer-logo">
            <img className="header-main-img" src={Chem} alt="pizza" />
            <div>Lorem, ipsum dolor </div>
          </div>
        </Divider>
        <div className="footer-small-logo">
          <div className="footer-logo">
            <img className="header-main-img" src={Chem} alt="pizza" />
            <div>Lorem, ipsum dolor </div>
          </div>
        </div>
        <Divider className="footer-divider" />
        <div className="footer-bottom">
          <span className="copyright">Copyright All Right Reserved</span>
          <span className="footer-icon">Lorem Ipsum Dolor Sit Amet</span>
          <div className="footer-icon">
            <span>Follow us</span>
            <img className="footer-iconsize" src={Instagram} alt="instagram" />
            <img className="footer-iconsize" src={Twitter} alt="twitter" />
            <img className="footer-iconsize" src={Facebook} alt="facebook" />
            <img className="footer-iconsize" src={Youtube} alt="youtube" />
          </div>
        </div>
        ß
      </div>
    </div>
  );
};

export default Footer;
