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

  const ArrayLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0];
  return (
    <StylesAppsClaimedWrapper>
      <StylesHeader>
        <Header appStatus={appStatus} />
      </StylesHeader>

      <StylesClaimedDetails>
        {ArrayLength.map((app, uniqueApp) => {
          return (
            <div key={uniqueApp}>
              <AppDetails app={app} appStatus={appStatus} />
            </div>
          );
        })}
      </StylesClaimedDetails>
    </StylesAppsClaimedWrapper>
  );
};

export default AppsClaimed;
