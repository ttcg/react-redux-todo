import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import store from "./store/index";

import AddNewTodo from './components/todo/addnewtodo';
import Home from './components/home/home';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Route component={App} />
        <Route path='/home' component={Home} />
        <Route path='/todo/addnew' component={AddNewTodo} />        
      </React.Fragment>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

