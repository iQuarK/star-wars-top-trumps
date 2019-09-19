import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "../screens/Game";
import Rules from "../screens/Rules";

const App: React.FC = () => (
  <div className="App">
    <h1 className="App-header">Star Wars Top Trumps</h1>

    <Router>
      <Route path="/" exact component={Game} />
      <Route path="/rules" component={Rules} />
    </Router>
  </div>
);

export default App;
