import React, { Component } from 'react';
import {test, signup, getSession} from '../utils/routes.jsx'; 
import {Link} from 'react-router';

export default class SignUp extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
      this.state = {message: null}
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      var confirm = document.getElementsByName('confirm')[0];
      var signUpHere = signup.bind(this);

  		signUpHere(username.value,password.value,confirm.value);
  		
      username.value = ""; 
  		password.value = ""; 
      confirm.value = "";
      
  	}

  	render() {

    return (	
        <div className="form-container-signup">
        <div className="form-title"> Sign Up Here! </div>
        	<form onSubmit={this.handleSubmit}>
	        	<input className="input" type="text" placeholder="username" name="username" />
	        	<input className="input" type="password" placeholder="password" name="password" />
            <input className="input" type="password" placeholder="confirm password" name="confirm" />
	        	<input className="submit" type="submit" placeholder="submit"/>
        	</form>
            <div className="flag">{this.state.message}</div>
      	 </div>
    );
  }

  componentDidUpdate(){
    if(this.state.message){
      document.getElementsByClassName('flag')[0].style.display =  "block";
      if(this.state.message !== "Username created successfully!"){
        document.getElementsByClassName('flag')[0].style.color = 'red';
      }else{
        document.getElementsByClassName('flag')[0].style.color = 'green';
      }
    }
  }
  componentWillUnmount(){
    this.setState({
      message: null
    });
  }
}
