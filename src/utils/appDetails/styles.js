import {
  BACKGROUND_COLOR_BLACK,
  BORDER_COLOR_GREY,
  GRADIENT_TEXT_COLOR_GREEN,
  TEXT_COLOR_WHITE
} from "src/assets/variables/variables";
import Styled from "styled-components";

export const StylesAppDetailsWrapper = Styled.div`
display:flex;
flex-direction:column;
width: 145px;
height: 180px;
align-items:center;
border-radius: 15px;
border: 1px solid ${BORDER_COLOR_GREY};
background: ${BACKGROUND_COLOR_BLACK};
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.30);
padding:15px 0px;
font-size:14px;
`;

export const StylesAppImage = Styled.div`
width: 75px;
height: 75px;
`;

export const StylesAppName = Styled.div`
color: ${TEXT_COLOR_WHITE};
text-align: center;
font-weight: 600;
padding-top:10px;
padding-bottom:15px;
`;

export const StylesAppStatus = Styled.div`
color: ${TEXT_COLOR_WHITE};
text-align: center;
font-weight: 600;
`;

export const StylesGreenText = Styled.p`
background:${GRADIENT_TEXT_COLOR_GREEN};
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const StylesButton = Styled.div`
position:relative;
padding:6px 12px;
cursor:pointer;
display: flex;
align-items:center;
//gradient text
background: ${GRADIENT_TEXT_COLOR_GREEN} ;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

//gradient border
&::before{
 content: "";
  position: absolute;
  inset: 0;
  border-radius: 30px; 
  padding: 2px; 
  background:${GRADIENT_TEXT_COLOR_GREEN}; 
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude; 
}

img{
    margin-right:5px;
}
`;
