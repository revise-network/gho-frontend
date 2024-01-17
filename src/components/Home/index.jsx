import React, { useRef, useState } from "react";
import { HomeWrapper, StylesSectionWrapper } from "src/components/Home/styles";
import AppsClaimed from "src/utils/appsClaimed";
import { Navbar } from "src/components/Navbar/index";
import HomeStats from "src/utils/HomeStats/index";
import AppsAvailable from "src/utils/appsAvailable";
import PopUp from "../popUp";
const Home = () => {
  const [popUp, setPopUp] = useState(false);
  const parentRef = useRef();

  const handlePopUp = () => {
    setPopUp(!popUp);
  };
  const onBlur = () => {
    if (popUp) {
      setPopUp(!popUp);
    }
  };

  return (
    <>
      <HomeWrapper
        opacity={popUp ? "0.5" : ""}
        onClick={() => {
          onBlur();
        }}
      >
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
          <AppsAvailable handelPopUp={handlePopUp} />
        </StylesSectionWrapper>
      </HomeWrapper>
      {popUp && <PopUp popRef={parentRef} />}
    </>
  );
};

export default Home;
