import React from "react";
import GlobalStyle from "./helpers/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import Login from "./pages/signup";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Login />
      </ThemeProvider>
    </>
  );
};

export default App;
