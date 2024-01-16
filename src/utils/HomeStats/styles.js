import {
  BACKGROUND_COLOR_BLACK,
  BACKGROUND_COLOR_BLACK_1,
  BACKGROUND_COLOR_BLACK_3,
  BACKGROUND_COLOR_GREY,
  BORDER_COLOR_GREY,
  BORDER_COLOR_GREY_2,
  GRADIENT_TEXT_COLOR_GREEN,
  GRADIENT_TEXT_COLOR_RED,
  TEXT_COLOR_BLACK,
  TEXT_COLOR_GREY,
  TEXT_COLOR_WHITE
} from "src/assets/variables/variables";
import styled from "styled-components";

export const StylesHomeStatsWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;

export const StylesLeftStats = styled.div`
  position: absolute;
  left: 0;
`;

export const StylesClaimedStats = styled.div`
  z-index: 1;
`;

export const StylesRightStats = styled.div`
  position: absolute;
  right: 0;
`;

//stats cards
export const StylesStatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 305px;
  height: 317px;
  border-radius: ${(props) => props.border_radius || "23px 0px 0px 23px"};
  border: 1px solid ${BORDER_COLOR_GREY};
  background: ${BACKGROUND_COLOR_BLACK};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);

  p {
    font-size: 20px;
    font-weight: 500;

    background: var(--Green, linear-gradient(90deg, #43ffbe 0.77%, #00ce87 99.1%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    color: ${TEXT_COLOR_WHITE};
    font-size: 64px;
    font-weight: 700;
    margin: 10px 0;
  }

  div {
    img {
      margin-right: 5px;
    }
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
    position: relative;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    //gradient text
    background: ${GRADIENT_TEXT_COLOR_GREEN};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    //gradient border
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 30px;
      padding: 2px;
      background: ${GRADIENT_TEXT_COLOR_GREEN};
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  span {
    color: ${TEXT_COLOR_GREY};
    font-size: 16px;
    font-weight: 500;
  }
`;

//claimed cards stats

export const StylesClaimDetailsWrapper = styled.div`
  padding: 10px;
  width: 400px;
  height: 388px;
  border-radius: 23px;
  border: 1px solid ${BORDER_COLOR_GREY};
  background: ${BACKGROUND_COLOR_GREY};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > p {
    font-size: 20px;
    font-weight: 500;

    background: var(--Green, linear-gradient(90deg, #43ffbe 0.77%, #00ce87 99.1%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 10px 0;
  }

  section {
    margin: 20px 0;
    text-align: center;
    progress {
      margin-bottom: 3px;
      border-radius: 13px;
      height: 17px;
      background-color: ${BACKGROUND_COLOR_BLACK_3};
      border: 2px solid ${BORDER_COLOR_GREY_2};
    }
    progress::-webkit-progress-bar {
      border-radius: 13px;
      background-color: ${BACKGROUND_COLOR_BLACK_3};
    }
    progress::-webkit-progress-value {
      background: ${GRADIENT_TEXT_COLOR_GREEN};
      border-radius: 13px;
    }
    progress::-moz-progress-bar {
      /* style rules */
      border-radius: 13px;
      background-color: ${BACKGROUND_COLOR_BLACK_3};
    }

    span {
      color: ${TEXT_COLOR_GREY};
      font-size: 16px;
      font-weight: 500;
    }
  }

  & > div {
    margin-top: 20px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 17px;
    background: ${BACKGROUND_COLOR_BLACK_1};

    img {
      margin-right: 5px;
    }
    p {
      font-size: 16px;
      font-weight: 500;

      span {
        background: ${GRADIENT_TEXT_COLOR_RED};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    div {
      color: ${TEXT_COLOR_BLACK};
      font-size: 16px;
      font-weight: 600;
      border-radius: 30px;
      background: ${GRADIENT_TEXT_COLOR_GREEN};
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;
