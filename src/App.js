import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import MapContainer from './MapContainer';
import Community from './Community';
import Menu from './Menu';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Community />
        </Route>
        <Route path="/map">
          <MapContainer />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </div>
    </Router>
  );
}

export default App;
