import React, { Component } from 'react';
import Example from '../example/Example';
import AppRoute from '../router';

class App extends Component {
  render() {
    return (
      <div className="App">         
         <AppRoute />
      </div>
    );
  }
}

export default App;