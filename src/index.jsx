//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';


//Redux 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'Reducers';
import { syncHistoryWithStore } from 'react-router-redux';	
import thunk from 'redux-thunk';


//components `
import App from 'App';
import Login from './components/Login';
import Wrapper from './components/Wrapper';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" pageId="wrapper" component={Wrapper}>
			<IndexRoute pageId="index" component={App}/>
			<Route path="/login" pageId="Login" component={Login}/>
		</Route>

	</Router>), document.getElementById('root'));
