import React from "react";
import { HomeWrapper, StylesSectionWrapper } from "src/components/Home/styles";
import AppsClaimed from "src/utils/appsClaimed";
import { Navbar } from "src/components/Navbar/index";
import HomeStats from "src/utils/HomeStats/index";
import AppsAvailable from "src/utils/appsAvailable";
const Home = () => {
  return (
    <HomeWrapper>
      <StylesSectionWrapper>
        <Navbar />
      </StylesSectionWrapper>
      <StylesSectionWrapper>
        <HomeStats />
      </StylesSectionWrapper>
      <StylesSectionWrapper>
        <AppsClaimed />
      </StylesSectionWrapper>
      <StylesSectionWrapper>
        <AppsAvailable />
      </StylesSectionWrapper>
    </HomeWrapper>
  );
};

export default Home;
