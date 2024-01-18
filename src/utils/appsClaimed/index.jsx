import React from "react";
import {
  StylesAppsClaimedWrapper,
  StylesClaimedDetails,
  StylesHeader
} from "src/utils/appsClaimed/styles";
import AppDetails from "src/utils/appDetails";
import Header from "src/components/Navbar";
const AppsClaimed = () => {
  const appStatus = "claimed";

  // const sampleApp = {
  //   logo: null,
  //   name: "Uniswap",
  //   claimed: true,
  //   claimedAmount: 10,
  //   tokenName: 'Matic'
  // }

  const claimedApps = [];
  return (
    <StylesAppsClaimedWrapper>
      <StylesHeader>
        <Header appStatus={appStatus} />
      </StylesHeader>

      <StylesClaimedDetails>
        {claimedApps.map((app, uniqueApp) => {
          return (
            <div key={uniqueApp} style={{ marginBottom: "7px" }}>
              <AppDetails app={app} appData={app} />
            </div>
          );
        })}
        {claimedApps.length === 0 ? "No Credit taken yet..": ""}
      </StylesClaimedDetails>
    </StylesAppsClaimedWrapper>
  );
};

export default AppsClaimed;
