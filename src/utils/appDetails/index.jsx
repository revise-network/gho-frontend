/* eslint-disable react/prop-types */
import React from "react";
import {
  StylesAppDetailsWrapper,
  StylesAppImage,
  StylesAppName,
  StylesAppStatus,
  StylesButton,
  StylesGreenText
} from "src/utils/appDetails/styles";
import AppImage from "src/assets/images/app-image.svg";
import AddIcon from "src/assets/images/add.svg";

const AppDetails = ({ appStatus, handelPopUp }) => {
  return (
    <StylesAppDetailsWrapper>
      <StylesAppImage>
        <img src={AppImage} alt="app-image" />
      </StylesAppImage>
      <StylesAppName>DApp Name</StylesAppName>
      <StylesAppStatus>
        <div>
          {appStatus === "claimed" ? (
            <div>
              <StylesGreenText>10 Matic</StylesGreenText>
              Claimed
            </div>
          ) : (
            <StylesButton
              onClick={() => {
                handelPopUp(true);
              }}
            >
              <img src={AddIcon} alt="app-image" />
              Get Tokens
            </StylesButton>
          )}
        </div>
      </StylesAppStatus>
    </StylesAppDetailsWrapper>
  );
};

export default AppDetails;
