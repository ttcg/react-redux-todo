import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Footer from './common/footer';

import Home from '../components/home/home';
import About from '../components/about/about';
import AddNewTodo from '../components/todo/addnewtodo';
import TodoListPage from '../containers/todoListPage';


class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<React.Fragment>
					
					<Header />

					<Route path='(/|/home)' exact component={Home} />					
					<Route path='/about' component={About} />
					<Route path='/todo' exact component={ListTodo} />
					<Route path='/todo/add' component={AddNewTodo} />

					<Footer />

				</React.Fragment>				
			</BrowserRouter>

		);
	}
}

export default App;