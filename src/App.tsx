import React from "react";
import GlobalStyle from "./helpers/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import RouteConfig from "./routesConfig/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <RouteConfig />
        <ToastContainer style={{ height: "52px" }} />
      </ThemeProvider>
    </>
  );
};

export default App;
