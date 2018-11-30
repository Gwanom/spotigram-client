import React, { Component } from 'react';
import store from './Redux/Store';
import { Provider } from 'react-redux';

import './App.css';
import "./include/bootstrap";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import  HomeComponent  from './Components/Users/HomeComponent';
import  ProfileComponent  from './Components/Users/ProfileComponent';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            {/* <NavbarComponent/> */}
            <div className="App">
              <Switch>
                <Route path="/profile" component={ProfileComponent}/>
                <Route path="/" component={HomeComponent}/>
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
