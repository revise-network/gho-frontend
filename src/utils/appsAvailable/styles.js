import {
  BACKGROUND_COLOR_BLACK_2,
  BACKGROUND_COLOR_GREY_2
} from "src/assets/variables/variables";
import styled from "styled-components";

export const StylesAvailableApps = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 142px);
  gap: 15px;
  max-height: 520px;
  overflow-y: auto;
  overflow-x: hidden;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${BACKGROUND_COLOR_BLACK_2};
    border-radius: 3px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${BACKGROUND_COLOR_GREY_2};
  }
`;
