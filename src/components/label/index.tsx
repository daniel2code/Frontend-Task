import styled from "styled-components";

import LabelHelper from "./labelHelper";

export const Label = styled(LabelHelper)`
  color: ${({theme})=> theme.colors.textColor} ;
  font-size: ${({ theme })=> theme.fontSizes.small} ;
`