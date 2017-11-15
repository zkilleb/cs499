import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import { Navbar, Jumbotron, Button, Label, Grid, Row, Nav, NavItem, Col, Image } from 'react-bootstrap';
import './App.css';
import Main from './main';
import { Link } from 'react-router-link';
import {loginWithTwitter} from './helpers/auth';
import firebase, { app, auth, provider } from './config/firebase.js';

//import * as admin from 'firebase-admin'

const firebaseAuthKey = "firebaseAuthInProgress";
let appToken;

const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
}

var database = firebase.database();
//var accessToken = 0;
//var accessTokenSecret = 1;
//var user;
//var admin = require("firebase-admin");

class loginUser extends Component {

  constructor() {
    super();

	this.state = {
		user: null,
    accessToken: '',
    accessTokenSecret: ''
	}
	
	this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
	
  }

 authWithEmailPassword(event) {
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          // create user
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          // they used facebook
          this.loginForm.reset()
        } else {
          // sign user in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user && user.email) {
          this.loginForm.reset()
          this.props.setCurrentUser(user)
          this.setState({redirect: true})
        }
      })
      .catch((error) => {
      
      })
  }




  componentDidMount() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
	  localStorage.setItem(appToken, user.uid);
	  //this.props.history.push("main")
    }
    //else{
  //    appToken = 1;
    //}
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


	 <div style={loginStyles}>
        <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
        <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
          <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
          </div>
          <label className="pt-label">
            Email
            <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref={(input) => { this.emailInput = input }} placeholder="Email"></input>
          </label>
          <label className="pt-label">
            Password
            <input style={{width: "100%"}} className="pt-input" name="password" type="password" ref={(input) => { this.passwordInput = input }} placeholder="Password"></input>
          </label>
          <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Log In"></input>
        </form>
      </div>

	  <div className="footer">
		 <Grid>

	  <Row>
	  <Col xs={6} md={3}>
	  <div className="bold"></div>
	  <div></div>
	  <div></div>
	  
	  </Col>
	  <Col xs={8}>
	  <div className="bold"></div>
	  <div></div>
	  <div></div>
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



export default loginUser;
//export {accessToken};
//export {accessTokenSecret};
//export {appToken};
//export {user};
//export function login() {}
