import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const InputBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ActionText = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSizes.smallText};
  margin-top: 10px;

  .link {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;