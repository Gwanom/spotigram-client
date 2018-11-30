import React, { Component } from 'react';
import store from './Redux/Store';
import { Provider } from 'react-redux';

import './App.css';
import "./include/bootstrap";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import  HomeComponent  from './Components/Users/HomeComponent';
import  ProfileComponent  from './Components/Users/ProfileComponent';
import  ThreadComponent  from './Components/Thread/ThreadComponent';


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
                <Route path="/thread" component={ThreadComponent}/>
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
