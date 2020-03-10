import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Movie from "./pages/movie";
import NoMatch from "./pages/no-match";
import {Log}  from "./pages/log";
import Login  from "./pages/login";
import { AuthProvider } from ".//pages/auth";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <AuthProvider>
    <Router>
      <nav>
        <Link to="/">
          <h2>Movie Diary</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/log" component={Log} />
          <Route exact path="/login" component={Login} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Movie} />
        </Switch>
      </main>
    </Router>
    </AuthProvider>
  );
}

export default App;
