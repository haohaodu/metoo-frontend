/** @format */

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import StickyHeader from "components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPage from "screens/LandingPage";
import ProductPage from "screens/ProductPage";
import ProductDetail from "screens/ProductDetail";
import AdminPage from "screens/AdminPage";

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
          <Route path="/product" exact component={ProductPage} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="/admin" exact component={AdminPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
