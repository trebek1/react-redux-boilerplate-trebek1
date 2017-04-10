import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  	render() {
    return (	
        <div>
      		Something Goes here<br/>
      		<Link to="/login">Login</Link> <br/>
      		<Link to="/signup">SignUp</Link> 
      	 </div>
    );
  }
}
