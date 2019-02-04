import React, { Component } from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import HomePage from './view/homePage';
import Navigation from './sharedComponents/Nav';

class App extends Component {
  render() {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path='/' render={(props)=><HomePage {...props}/>}/>
            </Switch>
        </div>
    );
  }
}

export default App;
