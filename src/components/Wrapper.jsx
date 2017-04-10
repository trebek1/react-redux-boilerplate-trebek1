import React, { Component } from 'react';
import Header from "./Header"; 
import Footer from "./Footer";

export default class Wrapper extends Component {
  render() {
    return (
        <div className="app-wrapper">
	      	<Header/>
	      		<div className="content">
	      			{this.props.children}
	      		</div>
	      	<Footer/>
      	</div>
    );
  }
}
