import { connect } from 'react-redux';
import Login from '../components/Login.jsx';
import {loginRoute,logoutRoute} from '../actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
  return {
    login: state.login,
    state
  };
}; 

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loginRoute: (username,password) => {
		 	dispatch(loginRoute(username,password));
		},
		logoutRoute: (username,password) => {
		 	dispatch(logoutRoute());
		},
		dispatch
	}
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;