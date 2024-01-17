import React, { useState } from "react";
import {
  Button,
  PopUpContainer,
  PopUpWrapper,
  CommonWrapper,
  ProgressBarContainer,
  FirstSegment,
  SecondSegment,
  ThirdSegment,
  CheckboxLabel,
  CustomCheckbox,
  Warning,
  Wrapper
} from "./styles";

// import { GRADIENT_TEXT_COLOR_GREEN } from "src/assets/variables/variables";

import warningIcon from "src/assets/images/warning.svg";

const PopUp = ({ popRef, setPopUp }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setWarning(false);
  };
  return (
    <Wrapper
      onClick={() => {
        setPopUp(false);
      }}
    >
      <PopUpWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={popRef}
      >
        <div className="profile"></div>
        <h3>DApp Name</h3>
        <p style={{ fontWeight: "500", marginTop: "14px" }}>
          DApp name supports MATIC token
        </p>
        <PopUpContainer $warning={warning ? "#979797" : ""}>
          <div className="wrapper">
            <p>You’ll get</p>
            <h3>11.8022 MATIC</h3>
            <p>
              Worth <span>10 GHO</span>
            </p>
          </div>
          <div className="wrapper">
            <p>Your credit limit will be affected</p>
            <ProgressBarContainer>
              <FirstSegment />
              <SecondSegment />
              <ThirdSegment />
            </ProgressBarContainer>
            <CommonWrapper $justifyContent="space-between">
              <p className="creditLimit claimed">56% Claimed</p>
              <p className="creditLimit added">25% Added</p>
              <p className="creditLimit remaining">
                {warning && <img src={warningIcon} />}19% Remaining
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

        <Button>{!warning ? "CLAIM NOW" : "STAKE GHO"}</Button>
      </PopUpWrapper>
    </Wrapper>
  );
};

export default PopUp;
