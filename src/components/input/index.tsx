import styled from "styled-components";

import inputHelper from "./inputHelper";

export const Input = styled(inputHelper)`
  width: ${({width}) => width ? width : "100%"};
  height: ${({height}) =>height || "52px"};
  border: 1px solid #EAECED;
  background-color: white;
  border-radius: 7px;
  padding-left: 10px;
  font-size: ${({theme})=> theme.fontSizes.smallText || "14px"};
  color: ${({theme})=> theme.colors.textColor || "#000"};
  margin: ${({ margin })=> margin || "15px 0px"};
`;
