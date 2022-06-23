import styled from "styled-components";

import selectHelper, { OptionHelper } from "./selectHelper";

export const Select = styled(selectHelper)`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height || "52px"};
  border: 1px solid #eaeced;
  background-color: #F9FBFC;
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fontSizes.smallText || "14px"};
  color: ${({ theme }) => theme.colors.textColor || "#000"};
  margin: ${({ margin }) => margin || "15px 0px"};
  text-indent: 10px;
  /* -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  margin-right: 2rem;
  padding-right: 15px;
 padding-right: 20px; */
`;

export const Option = styled(OptionHelper)`
  color: ${({ theme }) => theme.colors.textColor || "#000"};
  font-size: ${({ theme }) => theme.fontSizes.small || "16px"};
`;
