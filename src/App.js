/** @format */

import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "screens/LandingPage";
import StickyHeader from "components/Header";

const Root = styled.div`
  background: #121212;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Router basename="/">
      <Root>
        <StickyHeader />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Root>
    </Router>
  );
};

export default App;
