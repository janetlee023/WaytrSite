import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import RSVP from "./component/pages/RSVP/RSVP.js";
import Registry from "./component/pages/Registry/Registry";
import Details from "./component/pages/Details/Details.js";
import Schedule from "./component/pages/Schedule/Schedule.js";
import Wrapper from "./component/Wrapper/Wrapper";

function App() {
  return (
    <Router>
    <div>
      <Wrapper>
        <Switch>
          <Route exact path={["/", "/Home"]} component={Registry} />
          <Route exact path={["/Registry"]} component={Registry} />
          <Route exact path={["/Details"]} component={Details} />
          <Route exact path={["/Schedule"]} component={Schedule} />
        </Switch>
      </Wrapper>
    </div>
   </Router>
  
  );
}

export default App;