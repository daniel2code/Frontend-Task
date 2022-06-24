import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .heading {
    font-size: 18px;
  }

  .link {
    width: 200px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    margin-top: 15px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;
