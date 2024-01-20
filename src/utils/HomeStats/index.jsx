/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import { ethers, Contract, formatUnits } from "ethers";

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
import {abi as stakingAbi} from '../../assets/abi/staking'
import {STAKING_CONTRACT} from '../../assets/addresses'

const HomeStats = ({ handlePopUp, scrollBehavior }) => {
  const cardStatus = "available";
  console.log(scrollBehavior);
  return (
    <StylesHomeStatsWrapper>
      <StylesLeftStats>
        <Stats scrollBehavior={scrollBehavior} cardStatus={cardStatus} />
      </StylesLeftStats>
      <StylesClaimedStats>
        <ClaimedDetails />
      </StylesClaimedStats>
      <StylesRightStats>
        <Stats handlePopUp={handlePopUp} cardStatus={"staked"} />
      </StylesRightStats>
    </StylesHomeStatsWrapper>
  );
};

export default HomeStats;

export const Stats = ({
  handlePopUp,
  cardStatus,
  scrollBehavior
}) => {
  const [availableCredit, setAvaiableCredit] = useState("0")
  const [totalStaked, setTotalStaked] = useState("0")

  useEffect(() => {
    readUsersData()
  }, [])

  async function readUsersData() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    const contract = new Contract(STAKING_CONTRACT, stakingAbi, provider)
    const availableCreditRaw = await contract.checkAvailableCredit(signer.address)
    const totalStakedRaw = await contract.checkStakedAmount(signer.address)
    setAvaiableCredit(formatUnits(availableCreditRaw, 18))
    setTotalStaked(formatUnits(totalStakedRaw, 18))
  }

  return (
    <StylesStatsWrapper
      border_radius={cardStatus !== "available" && "0px 23px 23px 0px"}
    >
      <p>{cardStatus === "available" ? "CREDIT AVAILABLE" : "TOTAL STAKED"}</p>
      <h1>{cardStatus === "available" ? availableCredit : totalStaked}</h1>
      {cardStatus === "available" ? <p>$</p> : <p>GHO</p>}
      <div onClick={cardStatus === "available" ? scrollBehavior : handlePopUp}>
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
  dueDate = null
}) => {
  const [availableCredit, setAvaiableCredit] = useState("0")
  const [totalStaked, setTotalStaked] = useState("0")
  const [claimedPercentage, setClaimedPercentage] = useState(0)

  useEffect(() => {
    readUsersData()
  }, [])
  useEffect(() => {
    setClaimedPercentage(
      ((parseFloat(totalStaked) - parseFloat(availableCredit)) / parseFloat(totalStaked))*100
    )
  }, [availableCredit, totalStaked])

  async function readUsersData() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    const contract = new Contract(STAKING_CONTRACT, stakingAbi, provider)
    const availableCreditRaw = await contract.checkAvailableCredit(signer.address)
    const totalStakedRaw = await contract.checkStakedAmount(signer.address)
    setAvaiableCredit(formatUnits(availableCreditRaw, 18))
    setTotalStaked(formatUnits(totalStakedRaw, 18))
  }

  return (
    <StylesClaimDetailsWrapper width={claimedPercentage + "%"}>
      <p>CLAIMED</p>
      <h1>{((parseFloat(totalStaked) - parseFloat(availableCredit))).toFixed(4)}</h1>
      <p>GHO</p>
      <span className="progress_bar" >
        <span className="claimed_section"></span>
        <span>{claimedPercentage.toFixed(4)}% Claimed </span>
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
