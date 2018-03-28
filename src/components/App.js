import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header'
import Home from './home/home'


class App extends Component {  

  render() {
    
    return (
      
      <div className="bg-light">
        <Header />
      </div>
       
    );
  }
}

export default App;