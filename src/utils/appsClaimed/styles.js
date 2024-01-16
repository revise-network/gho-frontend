import {
  BACKGROUND_COLOR_GREY,
  BORDER_COLOR_GREY
} from "src/assets/variables/variables";
import Styled from "styled-components";

export const StylesAppsClaimedWrapper = Styled.div`
height: ${(props) => props.height || "270px"};
border-radius: 23px;
border: 1px solid ${BORDER_COLOR_GREY};
background: ${BACKGROUND_COLOR_GREY};
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.30);
padding:15px;
`;

export const StylesHeader = Styled.div`
margin-bottom:10px;
`;

export const StylesClaimedDetails = Styled.div`
display: flex;
max-width:100%;
overflow-x:auto;
gap: 15px;

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
  display: none;
}
`;
