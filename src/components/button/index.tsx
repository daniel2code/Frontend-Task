import styled from "styled-components";

import buttonHelper from "./buttonHelper"

export const Button = styled(buttonHelper)`
 border: ${props=> props.border ? props.border : "none"};
 width: ${props=> props.width ? props.width : "100%"};
 height: ${props=> props.height ? props.height : "55px"};
 background-color: ${props=> props.backgroundColor ? props.backgroundColor : props.theme.colors.primary};
 border-radius: ${props=> props.borderRadius ? props.borderRadius : "6px"};
 background: ${props=> props.background ? props.background : ""};
 margin: ${props=> props.margin ? props.margin : " "};
 cursor: pointer;
 color: white;
 font-size: 17px;
 font-weight: 600;
 &:hover { background: ${props=> props.hover ? props.hover : ""}};
 
 @media screen and (max-width: 600px) {
    width: ${props=> props.smwidth ? props.smwidth : "100%"};
    font-size: ${props=> props.smfontSize ? props.smfontSize : ""};
    margin: ${props=> props.smMargin ? props.smMargin : ""};
  }
`