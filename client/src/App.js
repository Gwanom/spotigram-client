import React, { Component } from 'react';
import './App.css';
import "./include/bootstrap";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import { HomeComponent } from './Components/Utilities/HomeComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div className="App">
            <Switch>
              <Route component={HomeComponent}/>
            </Switch>
          </div>
        </>
      </BrowserRouter>

    );
  }
}

export default App;
