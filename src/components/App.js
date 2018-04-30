import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './common/header';
import Footer from './common/footer';

import Home from '../components/home/home';
import AboutPage from '../containers/AboutPage';
import AddTodoPage from '../containers/AddTodoPage';
import TodoListPage from '../containers/TodoListPage';
import EditTodoPage from '../containers/EditTodoPage';


class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<React.Fragment>

					<Header />

					<Switch>
						<Route path='(/|/home)' exact component={Home} />
						<Route path='/about' component={AboutPage} />
						<Route path='/todo' exact component={TodoListPage} />
						<Route path='/todo/add' component={AddTodoPage} />
						<Route path='/todo/:id' component={EditTodoPage} />						
					</Switch>

					<Footer />

				</React.Fragment>
			</BrowserRouter>

		);
	}
}

export default App;