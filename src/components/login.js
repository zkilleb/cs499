import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import { Navbar, Jumbotron, Button, Label, Grid, Row, Nav, NavItem, Col, Image } from 'react-bootstrap';
import './App.css';
import Main from './main'
import { Link } from 'react-router-link'
import firebase, { auth, provider } from './firebase.js';

const firebaseAuthKey = "firebaseAuthInProgress";


class login extends Component {

  constructor() {
    super();

	this.login = this.login.bind(this); 
	
	this.state = {
		user: null
	}
  }

login() {
  auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
	localStorage.setItem(firebaseAuthKey, "1");
}
  
  
  componentDidMount() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    } 
  });
  }


  render() {
	  
	  	 if (localStorage.getItem(firebaseAuthKey) === "1"){
	 window.location = 'main';
	 localStorage.removeItem(firebaseAuthKey);
  }
	  
    return (
	


      <div className="background">

	 <Navbar.Header className="navbar">
	  <Navbar.Brand className="navbar">
	  <a> <Image width={60} height={60} src="https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png" responsive /></a>
	  </Navbar.Brand>
     </Navbar.Header>
	 <Nav>
	 <NavItem disabled><h3 className="nav">Twitter Cleanup</h3></NavItem>
	 </Nav>


	  <Jumbotron>

	  <Grid>

	  <Row>
	  <Col xs={6} md={3}>
	  <Image src="https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png" responsive />
	  </Col>
	  <Col xs={8}>
	  <h2 className="navItem">Welcome to Twitter Cleanup!</h2>
	  <h3>The purpose of this application is to suggest users for you to follow and unfollow from Twitter.</h3>
	  <h3>Some stuff here</h3>
	  <h3>Probably some more here too.</h3>
	  <h3 className>Click below to sign-in and get started.</h3>
	  </Col>
	  </Row>


	  </Grid>

	  <Grid>

	  <Row className="show-grid">
      <Col xs={10} md={5}></Col>

      <Col xs={6} md={4}>
	  
	  <div className="wrapper">
 
    <button onClick={this.login}>Log In</button>     
  
</div>
	  </Col>
    </Row>
	  </Grid>


		</Jumbotron>
		
		<div className="footer">
		 <Grid>

	  <Row>
	  <Col xs={6} md={3}>
	  <div className="bold">Copyright Information</div>
	  <div>Stuff</div>
	  <div>Stuff</div>
	  Stuff
	  </Col>
	  <Col xs={8}>
	  <div className="bold">Contact Info</div>
	  <div>Stuff</div>
	  <div>Stuff</div>
	  Stuff
	  </Col>
	  <Col>
	  <Image height={100}/>
	  </Col>
	  </Row>
	  </Grid>
		</div>
     </div>

    );
  }
}

 

export default login;