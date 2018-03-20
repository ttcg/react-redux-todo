import React, { Component } from 'react';

import Header from './components/header'

import TodoForm from './containers/todo-form';
import TodoList from './containers/todo-list';

class App extends Component {  

  render() {
    
    return (

      <React.Fragment>

        <Header />

        <div style={{marginLeft: 30}}>
          <TodoForm />

          <TodoList />
        </div>

      </React.Fragment>

    );
  }
}

export default App;