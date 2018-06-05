import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './common/header';
import Footer from './common/footer';

import Home from '../components/home/home';
import AboutPage from '../containers/AboutPage';
import AddTodoPage from '../containers/AddTodoPage';
import TodoListPage from '../containers/TodoListPage';
import EditTodoPage from '../containers/EditTodoPage';
import Loading from "./common/LoadingSpinner";


class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<React.Fragment>
					<React.StrictMode>
						<Header />

						<Switch>
							<Route path='(/|/home)' exact component={Home} />
							<Route path='/about' component={AboutPage} />
							<Route path='/todo' exact component={TodoListPage} />
							<Route path='/todo/add' component={AddTodoPage} />
							<Route path='/todo/:id' component={EditTodoPage} />
						</Switch>

						<Footer />

						{this.props.loading && <Loading />}
					</React.StrictMode>
				</React.Fragment>
			</BrowserRouter>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.ajaxStatus > 0
	}
}


export default connect(mapStateToProps)(App);