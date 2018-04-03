import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header'

import Home from '../components/home/home';
import About from '../components/about/about';
import AddNewTodo from '../components/todo/addnewtodo';
import TodoListPage from '../containers/todoListPage';


class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<div className="bg-light">
					<Header />
					<React.Fragment>
						<Route path='(/|/home)' exact component={Home} />
						{/* <Route path='/home' component={Home} /> */}
						<Route path='/about' component={About} />
						<Route path='/todo' exact component={TodoListPage} />
						<Route path='/todo/add' component={AddNewTodo} />						
					</React.Fragment>

				</div>
			</BrowserRouter>

		);
	}
}

export default App;