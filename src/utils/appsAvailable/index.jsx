import React from "react";
import Header from "src/components/Navbar";
import AppDetails from "src/utils/appDetails/index";
import {
  StylesAppsClaimedWrapper,
  StylesHeader
} from "src/utils/appsClaimed/styles";
import { StylesAvailableApps } from "src/utils/appsAvailable/styles";

const AppsAvailable = () => {
  const appStatus = "unclaimed";

  const ArrayLength = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11];
  return (
    <StylesAppsClaimedWrapper height="600px">
      <StylesHeader>
        <Header appStatus={appStatus} />
      </StylesHeader>

      <StylesAvailableApps>
        {ArrayLength.map((app, uniqueItem) => {
          return (
            <div key={uniqueItem}>
              <AppDetails app={app} appStatus={appStatus} />
            </div>
          );
        })}
      </StylesAvailableApps>
    </StylesAppsClaimedWrapper>
  );
};

export default AppsAvailable;
