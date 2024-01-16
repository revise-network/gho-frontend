import styled from "styled-components";
import { GRADIENT_TEXT_COLOR_GREEN } from "src/assets/variables/variables";

export const PopUpWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 10px);

  border-radius: 23px;
  border: 1px solid #303435;
  background: #191b1d;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  max-width: 492px;
  padding: 70px 29px 24px;
  //   position: relative;
  text-align: center;

  p {
    color: #979797;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.4px;
  }

  .profile {
    position: absolute;
    z-index: 10;
    top: -7%;
    left: 50%;
    width: 108px;
    height: 108px;
    background: #131415;
    border-radius: 50%;
    transform: translate(-50%);
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
  }
`;

export const PopUpContainer = styled.div`
  margin: 35px 0px;
  max-width: 434px;
  padding: 24px 30px;
  border-radius: 17px;
  background: #141517;

  .wrapper {
    border-bottom: 1px solid #303435;
    padding: 30px 5px;

    span {
      background: ${({ $warning }) => $warning || `${GRADIENT_TEXT_COLOR_GREEN}`};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:first-child {
      padding-top: 0px;
    }
    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
    }
  }
  h3 {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 46px;
    letter-spacing: -1.2px;
    background: ${({ $warning }) => $warning || `${GRADIENT_TEXT_COLOR_GREEN}`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.4px;
  }

  .creditLimit {
    text-align: left;
    max-width: 80px;
    white-space: pre-line;
  }

  .claimed {
    background: ${GRADIENT_TEXT_COLOR_GREEN};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .added {
    background: var(--Red, linear-gradient(270deg, #ff5858 6.7%, #ff7070 97.49%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 21px;
  border-radius: 17px;
  color: var(--Black, #000);
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  background: ${GRADIENT_TEXT_COLOR_GREEN};
  cursor: pointer;
`;

export const CommonWrapper = styled.div`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  align-items: ${(props) => props.alignItem || "center"};
  flex-direction: ${(props) => props.direction || "row"};
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 19px;
  border-radius: 13px;
  border: 1px solid #1c1f20;
  background: #121415;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin: 15px auto;
`;

export const ProgressBarSegment = styled.div`
  height: 100%;
`;

export const FirstSegment = styled(ProgressBarSegment)`
  border-radius: 13px 0px 0px 13px;
  background: ${GRADIENT_TEXT_COLOR_GREEN};
  width: 56%;
`;

export const SecondSegment = styled(ProgressBarSegment)`
  background: var(--Red, linear-gradient(270deg, #ff5858 6.7%, #ff7070 97.49%));
  width: 25%;
`;

export const ThirdSegment = styled(ProgressBarSegment)`
  background-color: #121415;
  width: 19%;
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 16px;
  height: 16px;
  margin-top: 0.5%;
  border: 3px solid #979797;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;

  &:checked {
    background-color: #43ffbe;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: self-start;
  margin-bottom: 14px;
  color: #979797;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  gap: 8px;
`;

export const Warning = styled.div`
  border-radius: 17px;
  border: 1px solid #ff5858;
  padding: 16px 13px;
  margin: 16px auto;
  background: linear-gradient(
      0deg,
      rgba(25, 27, 29, 0.8) 0%,
      rgba(25, 27, 29, 0.8) 100%
    ),
    linear-gradient(270deg, #ff5858 6.7%, #ff7070 97.49%);

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;
