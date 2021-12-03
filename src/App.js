import React, { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TopMenuBar from "./components/TopMenuBar";
import BlogItem from "./pages/BlogItem";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <Router>
          <TopMenuBar />

          <Switch>
              <Route exact path="/">
              <Home/>
              </Route>

              <Route path="/login">
                     <Login/>
              </Route>

              <Route path="/blog">
                  <Blog/>
              </Route>

              <Route path="/blog/:blogId">
                  <BlogItem/>
              </Route>

          </Switch>
      </Router>
  );
}

export default App;
