import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './layout/Header';
import Dashboard from './card/Dashboard';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
