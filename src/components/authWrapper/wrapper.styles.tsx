import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapperBox {
    width: 540px;

    .title {
      font-size: ${({ theme }) => theme.fontSizes.large};
      color: ${({ theme }) => theme.colors.secondary};

      @media screen and (max-width: 600px) {
        font-size: 35px;
      }
    }

    .content {
      margin-top: 25px;
    }

    @media screen and (max-width: 600px) {
      width: 93%;
    }
  }
`;
