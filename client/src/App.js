import React, { Component } from 'react';
import './App.css';
import "./include/bootstrap";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {HomeComponent} from "./Components/Users/HomeComponent"
import { ForgotPasswordComponent } from './Components/Users/ForgotPasswordComponent';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div className="App">
            <Switch>
              <Route path="/forgot" component={ForgotPasswordComponent}/>

              
              <Route component={HomeComponent}/>
            </Switch>
          </div>
        </>
      </BrowserRouter>

    );
  }
}

export default App;
