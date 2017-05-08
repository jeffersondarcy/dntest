import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header';
import Content from './components/Content/Content'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
          <Header/>
          <Content/>
      </div>
    );
  }
}

export default App;
