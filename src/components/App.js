import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div>
              Home
            </div>
          </Route>
          <Route exact path="/new-questions">
            <div>
              New Questions
            </div>
          </Route>
          <Route exact path="/Leader-board">
            <div>
              Leader-Board
            </div>
          </Route>
          <Route exact path="/login ">
            <div>
              answers
            </div>
          </Route>
          <Route exact path="/logout">
            <div>
              logout
            </div>
          </Route>
          <Route>
            <div>
              404
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
