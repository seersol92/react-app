import React, { Component } from 'react';
import ButtonAppBar from './components/navBar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Home />
      </div>
    );
  }
}

export default App;
