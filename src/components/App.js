import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import LoadingBar from 'react-redux-loading'
import Nav from "./Nav";

import {handleDataRetrieval} from "../actions/shared";

import Login from "./Login.js";
import Logout from "./Logout";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Question from "./Question";
import AnswerQuestion from "./AnswerQuestion";
import Addquestion from "./Addquestion";
import ProtectedRoute from "./ProtectedRoute";

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

              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/new-questions" component={Addquestion} />
              <ProtectedRoute path="/question/:questionId" exact component={Question}/>
              <ProtectedRoute path="/question-answer/:questionId" exact component={AnswerQuestion}/>
              <ProtectedRoute exact path="/Leader-board" component ={Leaderboard}/>
             
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
              <Route to="/404">
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
