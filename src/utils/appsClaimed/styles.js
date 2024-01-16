import {
  BACKGROUND_COLOR_BLACK_2,
  BACKGROUND_COLOR_GREY,
  BACKGROUND_COLOR_GREY_2,
  BORDER_COLOR_GREY
} from "src/assets/variables/variables";
import Styled from "styled-components";

export const StylesAppsClaimedWrapper = Styled.div`
height: ${(props) => props.height || "270px"};
border-radius: 23px;
border: 1px solid ${BORDER_COLOR_GREY};
background: ${BACKGROUND_COLOR_GREY};
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.30);
padding:15px 21px;
`;

export const StylesHeader = Styled.div`
margin-bottom:10px;
`;

export const StylesClaimedDetails = Styled.div`
display: flex;
max-width:100%;
overflow-x:auto;
overflow-y:hidden;
gap: 15px;

/* width */
  &::-webkit-scrollbar {
    height: 5px;
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
