/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import SearchIcon from "src/assets/images/search.svg";
import {
  StylesHeaderSearchWrapper,
  StylesHeaderText,
  StylesHeaderWrapper,
  StylesLogo,
  StylesNavbarWrapper,
  StylesProfileDetails
} from "src/components/Navbar/styles";
import Logo from "src/assets/images/logo.svg";
import ProfileImage from "src/assets/images/profile-image.svg";
import More from "src/assets/images/more-details.svg";
import { useSDK } from "@metamask/sdk-react";

export const Navbar = () => {
  const [account, setAccount] = useState("");
  const [logoutButton, setLogoutButton] = useState(false);
  const { sdk, connected, connecting } = useSDK();

  const connectWallet = async (event) => {
    event.preventDefault();
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
      window.localStorage.setItem("address", accounts?.[0]);
    } catch (err) {
      window.localStorage.clear();
      console.error(`failed to connect..`, err);
    }
  };
  const disconnectWallet = async (event) => {
    event.preventDefault();
    try {
      await sdk?.disconnect();
      window.localStorage.clear();
    } catch (err) {
      window.localStorage.clear();
      console.error(`failed to disconnect..`, err);
    }
  };

  useEffect(() => {
    const walletAddress = window.localStorage.getItem("address");
    setAccount(walletAddress);
  }, [account]);
  return (
    <StylesNavbarWrapper>
      <StylesLogo>
        <img src={Logo} alt="logo" />
        <span>
          GetSet <br />
          <span>GHO</span>
        </span>
      </StylesLogo>

      <StylesProfileDetails>
        <form onSubmit={connectWallet}>
          {!connected && (
            <div onClick={connectWallet}>
              {connecting ? "Loading..." : "CONNECT WALLET"}
            </div>
          )}
        </form>
        {connected && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => setLogoutButton(!logoutButton)}
            >
              <img src={ProfileImage} alt="profile-image" />
              <p>{account?.slice(0, 3) + "....." + account?.slice(-3)}</p>
              <img
                src={More}
                alt="profile-image"
                style={{ transform: logoutButton ? "rotate(180deg)" : "none" }}
              />
            </div>
            {logoutButton && (
              <div className="logout" onClick={disconnectWallet}>
                Logout
              </div>
            )}
          </div>
        )}
      </StylesProfileDetails>
    </StylesNavbarWrapper>
  );
};

const Header = ({ appStatus }) => {
  return (
    <StylesHeaderWrapper>
      <StylesHeaderText>
        {appStatus === "claimed" ? "DApps Claimed" : "DApps Available"}
      </StylesHeaderText>
      <StylesHeaderSearchWrapper>
        <img src={SearchIcon} alt="search-icon" />
        <input type="text" placeholder="Search" />
      </StylesHeaderSearchWrapper>
    </StylesHeaderWrapper>
  );
};

export default Header;
