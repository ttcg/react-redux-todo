import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import store from "./store/index";


import Home from './components/home/home';
import About from './components/about/about';
import AddNewTodo from './components/todo/addnewtodo';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Route component={App} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />     
        <Route path='/todo/add' component={AddNewTodo} />        

      </React.Fragment>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

