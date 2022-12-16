import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBathroom from './components/CreateBathroom';
import ShowBathrooms from './components/ShowBathrooms';
import ShowBathroomDetails from './components/ShowBathroomDetails';
import UpdateBathroomInfo from './components/UpdateBathroomInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBathrooms} />
          <Route path='/create-bathroom' component={CreateBathroom} />
          <Route path='/edit-bathroom/:id' component={UpdateBathroomInfo} />
          <Route path='/show-bathroom/:id' component={ShowBathroomDetails} />
        </div>
      </Router>
    );
  }
}

export default App;