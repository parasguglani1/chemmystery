import React from "react";
import PlayInfo from "../../components/PlayInfo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import MenuOptions from "../../components/MenuOptions";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header-hero-wrapper">
        {/* <Header /> */}
        <Hero />
      </div>
      {/* <PlayInfo /> */}
      {/* <MenuOptions /> */}
    </div>
  );
};

export default HomePage;
