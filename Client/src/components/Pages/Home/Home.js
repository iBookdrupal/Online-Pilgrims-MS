import React, { useContext } from "react";
import HomepageLayout from "./HomepageLayout.jsx";
import HomeSlide from "./HomeSlide.jsx";

const Home = () => {
  return (
    <>
      <HomeSlide />
      <div className="content">
        <HomepageLayout />
      </div>
    </>
  );
};

export default Home;
