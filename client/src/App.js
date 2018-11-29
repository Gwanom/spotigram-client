import React, { Component } from 'react';
import store from './Redux/Store';
import { Provider } from 'react-redux';

import './App.css';
import "./include/bootstrap";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import  HomeComponent  from './Components/Users/HomeComponent';
import  ProfileComponent  from './Components/Users/ProfileComponent';
import { PersistGate } from 'redux-persist/integration/react'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <div className="App">
              <Switch>
                <Route path="/profile" component={ProfileComponent}/>
                <Route component={HomeComponent}/>
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
