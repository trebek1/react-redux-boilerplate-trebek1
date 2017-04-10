import React, { Component } from 'react';
import {logout} from '../utils/routes.jsx'; 
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Login extends Component {
  	
  	constructor(props){
  		super(props); 
  	    this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this); 
  	}

  	handleSubmit(e){
  		e.preventDefault(); 
      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      
      this.props.loginRoute(username.value,password.value)
  		username.value = ""; 
  		password.value = ""; 
  	}

    logout(){
        this.props.logoutRoute(); 
    }

  	render() {
      if(!this.props.login.login){
        return (  
        <div className="form-container-login">
        <div className="form-title">Log In</div>
          <form onSubmit={this.handleSubmit}>
            <input className="input" type="text" placeholder="username" name="username" />
            <input className="input" type="password" placeholder="password" name="password" />
            <input className="submit" type="submit" placeholder="submit"/>
          </form>
          <div className="flag">{this.props.login.message}</div>
         </div>
    );    
      }else{
        return (
          <div className="form-container-login">
            <h3> Hello {this.props.login.username}! Login Successful!</h3>
            <button onClick={this.logout}> Click Here to log out </button>
          </div>

        )
      }
  }
}

export default Login


