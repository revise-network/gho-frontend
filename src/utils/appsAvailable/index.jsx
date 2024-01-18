/* eslint-disable react/prop-types */
import React from "react";
import Header from "src/components/Navbar";
import AppDetails from "src/utils/appDetails/index";
import {
  StylesAppsClaimedWrapper,
  StylesHeader
} from "src/utils/appsClaimed/styles";
import { StylesAvailableApps } from "src/utils/appsAvailable/styles";

const AppsAvailable = ({ handelPopUp }) => {
  const appStatus = "unclaimed";

  const availableApps = [
    {
      logo: null,
      name: "Uniswap",
      claimed: false,
      claimedAmount: 10,
      tokenName: 'Matic'
    },
    {
      logo: null,
      name: "DyDx",
      claimed: false,
      claimedAmount: 10,
      tokenName: 'Matic'
    },
    {
      logo: null,
      name: "Lens",
      claimed: false,
      claimedAmount: 10,
      tokenName: 'Matic'
    },
    {
      logo: null,
      name: "LensPost",
      claimed: false,
      claimedAmount: 10,
      tokenName: 'Matic'
    },
    {
      logo: null,
      name: "Aavegotchi",
      claimed: false,
      claimedAmount: 10,
      tokenName: 'Matic'
    },
    {
      logo: null,
      name: "Axie infinity",
      claimed: false,
      claimedAmount: 10,
      tokenName: 'Matic'
    },
  ]
  return (
    <StylesAppsClaimedWrapper height="600px">
      <StylesHeader>
        <Header appStatus={appStatus} />
      </StylesHeader>

      <StylesAvailableApps>
        {availableApps.map((app, uniqueItem) => {
          return (
            <div key={uniqueItem}>
              <AppDetails
                appData={app}
                handelPopUp={handelPopUp}
              />
            </div>
          );
        })}
      </StylesAvailableApps>
    </StylesAppsClaimedWrapper>
  );
};

export default AppsAvailable;
