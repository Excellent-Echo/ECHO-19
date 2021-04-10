import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search"
import Setting from "./components/Setting";

function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/search">Search</Link>
              </div>
              <div>
                <Link to="/setting">Setting</Link>
              </div>
          </nav>
          <div>
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/setting">
                <Setting />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </header>
      </Router>
    </>
  );
}

export default App;
