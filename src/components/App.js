import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './common/header';
import Footer from './common/footer';

import Home from '../components/home/home';
import About from '../components/about/about';
import AddTodoPage from '../containers/AddTodoPage';
import TodoListPage from '../containers/TodoListPage';


class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<React.Fragment>

					<Header />

					<Switch>
						<Route path='(/|/home)' exact component={Home} />
						<Route path='/about' component={About} />
						<Route path='/todo' exact component={TodoListPage} />
						<Route path='/todo/add' component={AddTodoPage} />
					</Switch>

					<Footer />

				</React.Fragment>
			</BrowserRouter>

		);
	}
}

export default App;