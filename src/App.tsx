import React from "react";
import GlobalStyle from "./helpers/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import RouteConfig from "./routesConfig/routes";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <RouteConfig />
      </ThemeProvider>
    </>
  );
};

export default App;
