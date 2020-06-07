import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Matches from './components/leadingboard/Matches';
import SingelMatch from './components/leadingboard/SingleMatch';
import Players from './components/leadingboard/Players';
import Landing from "./components/layout/Landing";
import addMatch from "./components/leadingboard/AddMatch";
import Community from "./components/layout/Community";
import AddPlayerScore from "./components/leadingboard/AddPlayerScore";
import AddPlayer from './components/leadingboard/AddPlayer'

const App = () => {
  return (
        <Router>
          <Fragment>
            <Navbar />
              <Route exact path="/" component={ Landing } />
              <Route exact path="/community" component={ Community } />
              <Switch>
                  <section className="container">
                  <Route exact path="/matches" component={ Matches } />
                  <Route exact path="/match/:id" component={(props) => (<SingelMatch  matchID={props.match.params.id} />)}/>
                  <Route exact path="/players" component={ Players } />
                  <Route exact path="/add_match" component={ addMatch } />
                  <Route exact path="/add_player" component={ AddPlayer } />
                  <Route exact path="/add_player_score" component={ AddPlayerScore } />
                  </section>
              </Switch>
          </Fragment>
        </Router>
  )};

export default App;
