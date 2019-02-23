import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Form from './Form'

import BeersContainer from './BeersContainer'
// import SimpleTable from './SimpleTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={BeersContainer} />
            <Route path="/create" component={Form} />
            <Route path="/update/:beerId" component={Form} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
