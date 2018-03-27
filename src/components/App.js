import React, { Component } from 'react';



import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header'
import Home from './home/home'

// import TodoForm from './containers/todo-form';
// import TodoList from './containers/todo-list';

class App extends Component {  

  render() {
    
    return (

      
      <div>
        <Header />
      </div>
       

    );
  }
}

export default App;