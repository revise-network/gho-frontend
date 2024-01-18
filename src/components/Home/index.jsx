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
  const [walletConnected, setWalletConnected] = useState(false)
  const parentRef = useRef();

  useEffect(() => {
    const walletAddress = window.localStorage.getItem("address");
    if (! walletAddress) setWalletConnected(false)
    else setWalletConnected(true)
  }, [])

  const handlePopUp = () => {
    setPopUp(!popUp);
  };
  const handleStakeGHOPopup = () => {
    setStakeGHOPopup(!stakeGHOPopup);
  };
  // const onBlur = () => {
  //   if (popUp) {
  //     setPopUp(!popUp);
  //   }
  // };

  return (
    <>
      <HomeWrapper>
        <StylesSectionWrapper>
          <Navbar />
        </StylesSectionWrapper>
        {!walletConnected ? (<h1 style={{textAlign: 'center'}}>Connect wallet to continue..</h1>) : (
          <>
            <StylesSectionWrapper>
              <HomeStats handlePopUp={handleStakeGHOPopup} />
            </StylesSectionWrapper>
            <StylesSectionWrapper>
              <AppsClaimed />
            </StylesSectionWrapper>
            <StylesSectionWrapper>
              <AppsAvailable handelPopUp={handlePopUp} />
            </StylesSectionWrapper>
          </>
        )}
      </HomeWrapper>
      {popUp && <PopUp popRef={parentRef} popUp={popUp} setPopUp={setPopUp} />}
      {stakeGHOPopup && <StakeGHOPopup popRef={parentRef} />}
    </>
  );
};

export default Home;
