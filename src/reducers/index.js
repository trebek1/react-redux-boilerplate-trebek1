import { combineReducers } from 'redux';
import login from "./login";
import { routerReducer } from 'react-router-redux';	

const reducers = combineReducers({
	login,
	routing: routerReducer
});

export default reducers;
