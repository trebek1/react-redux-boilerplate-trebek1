import { connect } from 'react-redux';
import SignUp from '../components/SignUp.jsx';
import {loginRoute,logoutRoute} from '../actions';

const mapStateToProps = (state) => {
  return state;
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

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignupContainer;