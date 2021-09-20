import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import LoadingBar from 'react-redux-loading'
import Nav from "./Nav";

import {handleDataRetrieval} from "../actions/shared";

import Login from "./Login.js";
import Logout from "./Logout";

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleDataRetrieval())
  }

  render(){

    return (
      <div className="App container">
        <BrowserRouter>
          <Fragment>
            <Nav />
            <LoadingBar />
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
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route>
                <div>
                  <h1>Page not found 404</h1>
                </div>
              </Route>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
