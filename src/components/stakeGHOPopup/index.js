import React, { useEffect, useState } from "react";
import { ethers, Contract, formatUnits, parseUnits } from "ethers";
import {
  Button,
  PopUpContainer,
  PopUpWrapper,
  // CommonWrapper,
  // ProgressBarContainer,
  // FirstSegment,
  // SecondSegment,
  // ThirdSegment,
  CheckboxLabel,
  CustomCheckbox,
  Warning,
  Wrapper
} from "./styles";
import {abi} from '../../assets/abi/erc20'
import {abi as stakingAbi} from '../../assets/abi/staking'
import {STAKING_CONTRACT, GHO_CONTRACT} from '../../assets/addresses'

// import { GRADIENT_TEXT_COLOR_GREEN } from "src/assets/variables/variables";

// import warningIcon from "src/assets/images/warning.svg";

const StakeGHOPopup = ({ popRef, setStakeGHOPopup }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [warning, setWarning] = useState(false);
  const [ghoBalance, setGHOBalance] = useState(0)
  const [formatedGhoBalance, setFormatedGHOBalance] = useState(0)
  const [ghoAmount, setGhoAmount] = useState(0)
  const [btnText, setBtnText] = useState("Stake GHO")

  useEffect(() => {
    // read user's GHO balance
    readUsersData()
  }, []);

  async function readUsersData() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    console.log('signer', signer);
    console.log(abi);
    const contract = new Contract(GHO_CONTRACT, abi, provider)
    const balance = await contract.balanceOf(signer.address)
    const decimals = await contract.decimals()
    setGHOBalance(balance)
    console.log(ghoBalance);
    const formatedBalance = formatUnits(balance, decimals)
    setFormatedGHOBalance(formatedBalance)
  }
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setWarning(false);
  };
  function updateGHOAmount(e) {
    e.preventDefault()
    if (e.target.value > parseFloat(formatedGhoBalance)) {
      alert("You dont have that much GHO!")
      return
    }
    setGhoAmount(e.target.value)
  }
  async function startStakingProcess() {
    if (! isChecked) {
      alert("Please check the terms and conditions")
      return
    }
    setBtnText("Waiting for signature..")
    // take gho spend approval
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    console.log('signer', signer);
    console.log(abi);
    let contract = new Contract(GHO_CONTRACT, abi, signer)
    const amount = parseUnits(ghoAmount+".0", 18)
    try {
      const tx = await contract.approve(STAKING_CONTRACT, amount)
      setBtnText("Waiting for confirmation..")
      await tx.wait()
      alert("Approval successfull")
    } catch (error) {
      setBtnText("Stake GHO")
      alert("Tx rejected by you")
      return
    }
    // call the stake function here
    try {
      contract = new Contract(STAKING_CONTRACT, stakingAbi, signer)
      setBtnText("Waiting for signature..")
      const tx = await contract.stake(amount)
      setBtnText("Waiting for confirmation..")
      await tx.wait()
      alert("Successfully staked GHO!")
      window.location.reload()
    } catch (error) {
      console.log(error);
      setBtnText("Stake GHO")
      alert("Tx rejected by you")
      return
    }
  }
  return (
    <Wrapper
      onClick={() => {
        setStakeGHOPopup(false);
      }}
    >
      <PopUpWrapper
        ref={(popRef, setStakeGHOPopup)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="profile"></div>
        <h3>Stake GHO</h3>
        <p style={{ fontWeight: "500", marginTop: "14px" }}>
          Get credit against the staked GHO
        </p>
        <PopUpContainer $warning={warning ? "#979797" : ""}>
          <div className="wrapper">
            <p>Choose how much to Stake</p>
            <input
              onChange={updateGHOAmount}
              style={{ marginTop: "10px", marginBottom: "10px" }}
              type="number"
              value={ghoAmount}
            />
            <p>
              You curently own <span>{formatedGhoBalance} GHO</span>
            </p>
          </div>
          {/* <div className="wrapper">
          
          <CommonWrapper $justifyContent="space-between">
            <p className="creditLimit claimed">56% Claimed</p>
            <p className="creditLimit added">25% Added</p>
            <p className="creditLimit remaining">
              {warning && <img src={warningIcon} />}19% Remaining
            </p>
          </CommonWrapper>
        </div> */}
          {/* <div className="wrapper">
          <p>you have to Payback in</p>
          <h3>3 days</h3>
        </div> */}
        </PopUpContainer>

        {!warning ? (
          <CheckboxLabel>
            <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />I
            agree to the terms and conditions.
          </CheckboxLabel>
        ) : (
          <Warning>
            <p>
              You do not have enough credit limit left. Please stake more GHO to
              increase your credit limit
            </p>
          </Warning>
        )}

        <Button onClick={startStakingProcess}>{btnText}</Button>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default StakeGHOPopup;
