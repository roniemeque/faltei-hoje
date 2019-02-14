import React, { Component } from "react";
//import PropTypes from "prop-types";
import firebase from "firebase";

import { firebaseApp } from "../base";
import Login from "./Login";

export default class App extends Component {
  state = {
    uid: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  authHandler = async authData => {
    this.setState({
      uid: authData.user.uid
    });
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({
      uid: null
    });
  };

  render() {
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    return (
      <div>
        <button onClick={this.logout}>Log out!</button>
        oi tudo bom
      </div>
    );
  }
}
