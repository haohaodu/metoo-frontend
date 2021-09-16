/** @format */

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import StickyHeader from "components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPage from "screens/LandingPage";
import ProductPage from "screens/ProductPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#666666",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router basename="/">
        <StickyHeader />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/products" exact component={ProductPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
