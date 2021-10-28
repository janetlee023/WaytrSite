import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import RSVP from "./component/pages/RSVP/RSVP.js";
import Registry from "./component/pages/Registry/Registry";
import Prices from "./component/pages/Prices/Prices.js";
import Team from "./component/pages/Team/Team.js";
import Wrapper from "./component/Wrapper/Wrapper";

function App() {
  return (
    <Router>
    <div>
      <Wrapper>
        <Switch>
          <Route exact path={["/", "/Home"]} component={Registry} />
          <Route exact path={["/Registry"]} component={Registry} />
          <Route exact path={["/Prices"]} component={Prices} />
          <Route exact path={["/Team"]} component={Team} />
        </Switch>
      </Wrapper>
    </div>
   </Router>
  
  );
}

export default App;