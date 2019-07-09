import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from './routes';
import { withFirebase } from './FirebaseContext';
  import firebase from 'firebase';

import Navigation from './Navigation'
import FirebaseContext from './FirebaseContext'
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import Firebase from './Firebase'
import './style.css';

interface AppProps {
  firebase: any
}
interface AppState {
  authUser: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };

  }

  private listener:any;

  componentDidMount() {
    this.listener =firebase.auth().onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />

          <hr />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </div>
      </Router>
    );
  }
}

render(<FirebaseContext.Provider value={new Firebase()}>
 <withFirebase><App /></withFirebase>
</FirebaseContext.Provider>, document.getElementById('root'));
