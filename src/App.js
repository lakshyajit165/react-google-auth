import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';
import './App.css';
const firebaseApp = firebase.initializeApp(firebaseConfig);



class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle
    } = this.props;

    return (
      <div className="App">
        <br/>
        <br/>
        <div className="card col-lg-6 mx-auto">
          <div className="card-body">
            <h2>React Authentication App</h2>
            <hr/>
          {
            user
              ? 
                <p className="lead">Hello, {user.displayName}</p>
              : <p className="lead">Please sign in.</p>
          }
          {
            user
              ? <button type="button" className="btn btn-light" onClick={signOut}>Sign out</button>
              : <div className="col-lg-12 mx-auto">
                  <button type="button" className="btn btn-danger" onClick={signInWithGoogle}>Google</button>
                  
                </div>  
          }
          </div>
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);