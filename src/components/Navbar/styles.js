import {
  BACKGROUND_COLOR_BLACK_1,
  BACKGROUND_COLOR_GREY,
  BORDER_COLOR_GREY,
  GRADIENT_TEXT_COLOR_GREEN,
  TEXT_COLOR_WHITE
} from "src/assets/variables/variables";
import Styled from "styled-components";

//header
export const StylesHeaderWrapper = Styled.div`
display: flex;
justify-content:space-between;
align-items:center;
`;

export const StylesHeaderText = Styled.div`
color: ${TEXT_COLOR_WHITE};
font-size: 20px;
font-weight: 600;
`;

export const StylesHeaderSearchWrapper = Styled.div`
width:350px;
border-radius: 17px;
background: ${BACKGROUND_COLOR_BLACK_1};
display: flex;
padding: 0px 10px;
align-items:center;
height:35px;
img{
    margin-right:10px;
}

input{
   outline:none;
    border:none;
    background: none;
  color:${TEXT_COLOR_WHITE}
    
}
`;

//navbar

export const StylesNavbarWrapper = Styled.div`
display: flex;
justify-content:space-between;
`;

export const StylesLogo = Styled.div`
img{
  margin-right:5px;
}
display: flex;
align-items:center;
font-size: 24.092px;
font-family: 'Monument Extended';
font-weight: 800;

span{

span{
  background: ${GRADIENT_TEXT_COLOR_GREEN};
background-clip: text;
-webkit-text-fill-color: transparent;
}
}
`;

export const StylesProfileDetails = Styled.div`
display: flex;
align-items:center;
border-radius: 23px;
border: 1px solid ${BORDER_COLOR_GREY};
background: ${BACKGROUND_COLOR_GREY};
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.30);
padding: 7px 9px 7px 9px;
height: fit-content;
p{
  margin: 0 5px 0px 5px;
}

`;
