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

const AppDetails = ({ appData, handelPopUp }) => {
  const appStatus = appData.claimed
  function launchDapp(app) {
    window.open(app.url, '_blank').focus()
  }
  return (
    <StylesAppDetailsWrapper>
      <StylesAppImage>
        <img style={{cursor: 'pointer'}} onClick={() => launchDapp(appData)} src={appData.logo ? appData.logo : AppImage} alt="app-image" />
      </StylesAppImage>
      <StylesAppName>{appData.name}</StylesAppName>
      <StylesAppStatus>
        <div>
          {appStatus ? (
            <>
              <div>
                <StylesGreenText>{appData.claimedAmount}{appData.tokenName}</StylesGreenText>
                Claimed
              </div>
            </>
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
