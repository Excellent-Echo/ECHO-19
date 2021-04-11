import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import DetailCountry from "./components/Search/DetailCountry";
import Search from "./components/Search/Search"

//Theme dark-light
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './styles/globalStyle'
import useDarkMode from './styles/useDarkMode';
import Button from "./components/Setting/Button";

function App() {
  const [theme, buttonTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <>
    <ThemeProvider theme={themeMode}>
      <Router>
      <Button theme={theme} buttonTheme={buttonTheme} />
      <GlobalStyles/>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light">
              <div>
                <Link to="/">ECHO-19</Link>
              </div>
              <div>
                <Link to="/search">Search</Link>
              </div>
          </nav>
             
          
          <div>
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/detail/:code">
                <DetailCountry />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </header>
      </Router>
    </ThemeProvider>

    </>
  );
}

export default App;
