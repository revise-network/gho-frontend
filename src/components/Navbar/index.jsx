/* eslint-disable react/prop-types */

import React from "react";
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

export const Navbar = () => {
  const walletAddress = "123456789987654";
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
        <img src={ProfileImage} alt="profile-image" />
        <p>{walletAddress.slice(0, 3) + "....." + walletAddress.slice(-3)}</p>
        <img src={More} alt="profile-image" />
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
