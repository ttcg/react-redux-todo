import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Todo from './components/todo';

class App extends Component {  

  render() {
    
    return (

      <React.Fragment>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Redux Todo App</h1>
          </header>                       
        </div>

        <Todo /> 

      </React.Fragment>

    );
  }
}

export default App;