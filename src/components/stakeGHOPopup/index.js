import React, { useEffect, useState } from "react";
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

// import { GRADIENT_TEXT_COLOR_GREEN } from "src/assets/variables/variables";

// import warningIcon from "src/assets/images/warning.svg";

const StakeGHOPopup = ({ popRef, setStakeGHOPopup }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    // read user's GHO balance
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setWarning(false);
  };
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
              style={{ marginTop: "10px", marginBottom: "10px" }}
              type="number"
            />
            <p>
              You curently own <span>10 GHO</span>
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

        <Button>Stake GHO</Button>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default StakeGHOPopup;
