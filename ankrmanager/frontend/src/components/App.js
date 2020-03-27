import React, { Component } from 'react';
import Header from './layout/Header';
import Dashboard from './ankr/Dashboard';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </>
    );
  }
}

export default App;
