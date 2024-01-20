/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Header from "src/components/Navbar";
import AppDetails from "src/utils/appDetails/index";
import {
  StylesAppsClaimedWrapper,
  StylesHeader
} from "src/utils/appsClaimed/styles";
import { StylesAvailableApps } from "src/utils/appsAvailable/styles";

const AppsAvailable = ({ handelPopUp, setAppData }) => {
  const [searchParam, setSearchParam] = useState("")
  const appStatus = "unclaimed";

  const availableApps = [
    {
      logo: '/dapps/axie.png',
      name: "Axie infinity",
      claimed: false,
      rate: 0.01,
      claimedAmount: 0,
      tokenName: 'SLP',
      url: "https://axieinfinity.com"
    },
    {
      logo: '/dapps/gas-hero.png',
      name: "Gas Hero",
      claimed: false,
      rate: 0.7,
      claimedAmount: 10,
      tokenName: 'Matic',
      url: "https://gashero.com"
    },
    {
      logo: '/dapps/lens.png',
      name: "Lens",
      claimed: false,
      rate: 0.7,
      claimedAmount: 0,
      tokenName: 'Matic',
      url: "https://www.lens.xyz"
    },
    {
      logo: '/dapps/sunflower-land.png',
      name: "Sunflower land",
      claimed: false,
      rate: 0.41,
      claimedAmount: 0,
      tokenName: 'SFL',
      url: "https://sunflower-land.com/play/"
    },
    {
      logo: '/dapps/fantv.png',
      name: "Fan TV",
      claimed: false,
      rate: 0.7,
      claimedAmount: 0,
      tokenName: 'Matic',
      url: "https://fantv.world"
    },
    {
      logo: '/dapps/ws.png',
      name: "Websport Betting",
      claimed: false,
      rate: 3.18,
      claimedAmount: 0,
      tokenName: 'OP',
      url: "https://app.websport.io/"
    },

  ]
  return (
    <StylesAppsClaimedWrapper height="600px">
      <StylesHeader>
        <Header
          setSearchParam={setSearchParam}
          appStatus={appStatus} />
      </StylesHeader>

      <StylesAvailableApps>
        {availableApps.filter(app => app.name.toLocaleLowerCase().includes(searchParam)).map((app, uniqueItem) => {
          return (
            <div key={uniqueItem}>
              <AppDetails
                appData={app}
                handelPopUp={() => {
                  setAppData(app)
                  handelPopUp()
                }}
              />
            </div>
          );
        })}
      </StylesAvailableApps>
    </StylesAppsClaimedWrapper>
  );
};

export default AppsAvailable;
