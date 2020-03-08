import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Movie from "./pages/movie";
import NoMatch from "./pages/no-match";
import {Log}  from "./pages/log";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>Movie Diary</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/log" component={Log} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Movie} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
