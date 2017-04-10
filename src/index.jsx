//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';


//Redux 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';	
import thunk from 'redux-thunk';


//components `
import App from 'App';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import Wrapper from './components/Wrapper';

const store = createStore(
	reducers,
	applyMiddleware(thunk)
	);

	// compose(
	// 	applyMiddleware(thunk),
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	//	);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" pageId="wrapper" component={Wrapper}>
				<IndexRoute pageId="index" component={App}/>
				<Route path="/login" pageId="Login" component={LoginContainer}/>
				<Route path="/signup" pageId="SignUp" component={SignUpContainer}/>
			</Route>
		</Router>
	</Provider>), document.getElementById('root'));
