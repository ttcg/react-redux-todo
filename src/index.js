import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './components/App';
import store from "./store/index";

import 'bootstrap/dist/css/bootstrap.min.css';

import {loadTodoItems} from './actions/'

store.dispatch(loadTodoItems());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

