import React, { useState, useEffect } from "react";
import { ethers, Contract, formatUnits, parseUnits   } from "ethers";

import {
  Button,
  PopUpContainer,
  PopUpWrapper,
  CommonWrapper,
  ProgressBarContainer,
  FirstSegment,
  // SecondSegment,
  ThirdSegment,
  CheckboxLabel,
  CustomCheckbox,
  Warning,
  Wrapper
} from "./styles"
import {abi as stakingAbi} from '../../assets/abi/staking'
import {STAKING_CONTRACT} from '../../assets/addresses'

// import { GRADIENT_TEXT_COLOR_GREEN } from "src/assets/variables/variables"

import warningIcon from "src/assets/images/warning.svg"

const PopUp = ({ popRef, setPopUp, appData }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [warning, setWarning] = useState(false)
  const [borrowAmount, setBorrowAmount] = useState(0)
  const [ghoEstimate, setGhoEstimate] = useState("0.0")
  const [availableCredit, setAvaiableCredit] = useState("0")
  const [totalStaked, setTotalStaked] = useState("0")
  const [btnText, setBtnText] = useState("CLAIM NOW")

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
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setWarning(false);
  };
  function updateRequiredTokenAmount(e) {
    e.preventDefault()
    const x = (e.target.value * appData.rate)
    if (x > parseFloat(availableCredit)) {
      alert("You don't have sufficient credit limit")
      return
    }
    setGhoEstimate(x.toString())
    setBorrowAmount(e.target.value)
  }
  function calculateClaimMetadata() {
    const metadata = {}
    metadata.percentageClaimed = ((parseFloat(totalStaked) - parseFloat(availableCredit))) / parseFloat(totalStaked) * 100
    metadata.percentageStaked = 100
    metadata.percentageRemaining = metadata.percentageStaked - metadata.percentageClaimed
    metadata.percentageClaimedWithBorrow = ((borrowAmount*appData.rate) + (parseFloat(totalStaked) - parseFloat(availableCredit))) / parseFloat(totalStaked) * 100
    return metadata
  }
  async function startClaimingProcess() {
    if (! isChecked) {
      alert("Please check the terms and conditions")
      return
    }
    setBtnText("Waiting for signature..")
    // take gho spend approval
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    let contract = new Contract(STAKING_CONTRACT, stakingAbi, signer)
    console.log("amount: ", (borrowAmount*appData.rate));
    const amount = parseUnits((borrowAmount*appData.rate).toString(), 18)
    console.log("parsedamount: ", parseUnits((borrowAmount*appData.rate).toString(), 18));
    try {
      const tx = await contract.claimTokens(appData.tokenName, amount)
      setBtnText("Waiting for confirmation..")
      await tx.wait()
      alert("Credit added successfully")
      let claimedApps = localStorage.getItem("claimedApps")
      if (!claimedApps) claimedApps = []
      else claimedApps = JSON.parse(claimedApps)
      claimedApps.unshift({...appData, claimed: true, claimedAmount: borrowAmount})
      localStorage.setItem('claimedApps', JSON.stringify(claimedApps))
      window.location.reload()
    } catch (error) {
      console.log(error)
      setBtnText("CLAIM NOW")
      alert("Tx rejected by you")
      return
    }
  }
  return (
    <Wrapper
      onClick={() => {
        setPopUp(false);
      }}
    >
      <PopUpWrapper
        onClick={(e) => {
          e.stopPropagation()
        }}
        ref={popRef}
      >
        <div className="profile">
          <img style={{borderRadius: '50%'}} src={appData.logo} />
        </div>
        <h3>{appData.name}</h3>
        <p style={{ fontWeight: "500", marginTop: "14px" }}>
          {appData.name} needs {appData.tokenName} token
        </p>
        <PopUpContainer $warning={warning ? "#979797" : ""}>
          <div className="wrapper">
            <p>How much {appData.tokenName} do you want?</p>
            <input
              onChange={updateRequiredTokenAmount}
              style={{ marginTop: "10px", marginBottom: "10px" }}
              type="number"
              value={borrowAmount}
            />
            <p>
              Worth <span>{ghoEstimate} GHO</span>
            </p>
          </div>
          <div className="wrapper">
            <p>Your credit limit will be affected</p>
            <ProgressBarContainer>
              <FirstSegment width={calculateClaimMetadata().percentageClaimedWithBorrow + "%"} />
              {/* <SecondSegment /> */}
              <ThirdSegment />
            </ProgressBarContainer>
            <CommonWrapper $justifyContent="space-between">
              <p className="creditLimit claimed">{calculateClaimMetadata().percentageClaimedWithBorrow.toFixed(2)}% Claimed</p>
              {/* <p className="creditLimit added">25% Added</p> */}
              <p className="creditLimit remaining">
                {warning && <img src={warningIcon} />}{calculateClaimMetadata().percentageRemaining.toFixed(2)}% Remaining
              </p>
            </CommonWrapper>
          </div>
          <div className="wrapper">
            <p>you have to Payback in</p>
            <h3>3 days</h3>
          </div>
        </PopUpContainer>

        {!warning ? (
          <CheckboxLabel>
            <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />I
            agree to repay the specified amount before the due date to avoid
            penalties.
          </CheckboxLabel>
        ) : (
          <Warning>
            <p>
              You do not have enough credit limit left. Please stake more GHO to
              increase your credit limit
            </p>
          </Warning>
        )}

        <Button onClick={startClaimingProcess}>{btnText}</Button>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default PopUp;
