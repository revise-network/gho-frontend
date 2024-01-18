/* eslint-disable react/prop-types */

import React from "react";
import {
  StylesClaimDetailsWrapper,
  StylesClaimedStats,
  StylesHomeStatsWrapper,
  StylesLeftStats,
  StylesRightStats,
  StylesStatsWrapper
} from "src/utils/HomeStats/styles";
import AppIcon from "src/assets/images/applications.svg";
import AddIcon from "src/assets/images/add.svg";
import TimeReminder from "src/assets/images/time-reminder.svg";
import TimeIcon from "src/assets/images/time-icon.svg";

const HomeStats = () => {
  const cardStatus = "available";
  return (
    <StylesHomeStatsWrapper>
      <StylesLeftStats>
        <Stats cardStatus={cardStatus} />
      </StylesLeftStats>
      <StylesClaimedStats>
        <ClaimedDetails />
      </StylesClaimedStats>
      <StylesRightStats>
        <Stats cardStatus={"staked"} />
      </StylesRightStats>
    </StylesHomeStatsWrapper>
  );
};

export default HomeStats;

export const Stats = ({ cardStatus, creditAvaiable = 0, totalStaked = 0 }) => {
  return (
    <StylesStatsWrapper
      border_radius={cardStatus !== "available" && "0px 23px 23px 0px"}
    >
      <p>{cardStatus === "available" ? "CREDIT AVAILABLE" : "TOTAL STAKED"}</p>
      <h1>{cardStatus === "available" ? creditAvaiable : totalStaked}</h1>
      {cardStatus === "available" ? <p>$</p> : <p>GHO</p>}
      <div>
        {" "}
        <img src={cardStatus === "available" ? AppIcon : AddIcon} alt="" />{" "}
        {cardStatus === "available" ? "Browse DApps" : "Add more GHO"}
      </div>
      <span>
        {cardStatus === "available" ? (
          <span>
            Get Tokens for DApps <br />
            you want to try
          </span>
        ) : (
          <span>
            Total GHO Tokens <br />
            deposited
          </span>
        )}
      </span>
    </StylesStatsWrapper>
  );
};

export const ClaimedDetails = ({
  totalClaimed = 0,
  totalClaimedPercentage = 0,
  dueDate = null
}) => {
  return (
    <StylesClaimDetailsWrapper width="56%">
      <p>CLAIMED</p>
      <h1>{totalClaimed}</h1>
      <p>GHO</p>
      <span className="progress_bar">
        <span className="claimed_section"></span>
        <span>{totalClaimedPercentage}% Claimed </span>
      </span>

      {!dueDate ? (
        ""
      ) : (
        <div>
          <p>
            Payback before <br />{" "}
            <span>
              <img src={TimeReminder} alt="" /> 3 Days 20 Hours
            </span>{" "}
            <br />
            To avoid penalties
          </p>
          <div>
            <img src={TimeIcon} alt="" />
            Payback Now
          </div>
        </div>
      )}
    </StylesClaimDetailsWrapper>
  );
};
