import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <div className="App">
                <Navigation/>
                <Header/>
                <Content/>
            </div>
        </Provider>
    );
  }
}

export default App;
