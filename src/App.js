import React, { Component } from 'react';

import Header from './components/header'

import Todo from './components/todo';

import TodoForm from './containers/todo-form';

class App extends Component {  

  render() {
    
    return (

      <React.Fragment>

        <Header />

        <Todo /> 

        <TodoForm />

      </React.Fragment>

    );
  }
}

export default App;