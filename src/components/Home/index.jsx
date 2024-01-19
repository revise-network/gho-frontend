import React, { useEffect, useRef, useState } from "react";
import { HomeWrapper, StylesSectionWrapper } from "src/components/Home/styles";
import AppsClaimed from "src/utils/appsClaimed";
import { Navbar } from "src/components/Navbar/index";
import HomeStats from "src/utils/HomeStats/index";
import AppsAvailable from "src/utils/appsAvailable";
import PopUp from "../popUp";
import StakeGHOPopup from "../stakeGHOPopup";
const Home = () => {
  const [popUp, setPopUp] = useState(false);
  const [stakeGHOPopup, setStakeGHOPopup] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [appData, setAppData] = useState({});
  const parentRef = useRef();

  useEffect(() => {
    const walletAddress = window.localStorage.getItem("address");
    if (!walletAddress) setWalletConnected(false);
    else setWalletConnected(true);
  }, []);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const handleStakeGHOPopup = () => {
    setStakeGHOPopup(!stakeGHOPopup);
  };

  const dAppsAvailableSection = useRef(null);

  const scrollToDAppsAvailableSection = () => {
    dAppsAvailableSection.current.scrollIntoView();
  };
  return (
    <>
      <HomeWrapper>
        <StylesSectionWrapper>
          <Navbar />
        </StylesSectionWrapper>
        {!walletConnected ? (
          <h1 style={{ textAlign: "center" }}>Connect wallet to continue..</h1>
        ) : (
          <>
            <StylesSectionWrapper>
              <HomeStats
                handlePopUp={handleStakeGHOPopup}
                scrollBehavior={scrollToDAppsAvailableSection}
              />
            </StylesSectionWrapper>
            <StylesSectionWrapper>
              <AppsClaimed />
            </StylesSectionWrapper>
            <StylesSectionWrapper ref={dAppsAvailableSection}>
              <AppsAvailable setAppData={setAppData} handelPopUp={handlePopUp} />
            </StylesSectionWrapper>
          </>
        )}
      </HomeWrapper>
      {popUp && <PopUp popRef={parentRef} appData={appData} popUp={popUp} setPopUp={setPopUp} />}
      {stakeGHOPopup && (
        <StakeGHOPopup popRef={parentRef} setStakeGHOPopup={setStakeGHOPopup} />
      )}
    </>
  );
};

export default Home;
