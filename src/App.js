import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import Login from './Login'
import User from './User'
import SingUp from './SignUp'
import 'bootstrap-css-only'

export default class App extends Component {
  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    authError: '',
    isAuthError: false,
    signUpError: '',
    isSignUpError: false,
    user: {},
    userScreen: 'login' // signup
  };

  componentDidMount() {
    const { database, auth } = this.props;
    this.setState({ isLoading: true });

    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      });
    });

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          user
        });
      } else {
        this.setState({
          isAuth: false,
          user: {}
        });
      }
    });
  }

  sendComment = comment => {
    const database = this.props.database;
    const id = database
      .ref()
      .child('comments')
      .push().key;
    const comments = {};
    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userid: this.state.user.uid
    };
    database.ref().update(comments);
  };

  login = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      authError: '',
      isAuthError: false
    });
    try {
      await auth.signInWithEmailAndPassword(email, passwd);
    } catch (err) {
      console.log(err);
      this.setState({
        authError: err.code,
        isAuthError: true
      });
    }
  };

  createAccount = async (email, passwd) => {
    const { auth } = this.props
    this.setState({
      signUpError: '',
      isSignUpError: false
    })

    try {
      await auth.createUserWithEmailAndPassword(email, passwd)
    }catch(err) {
      this.setState({
        signUpError: err.code,
        isSignUpError: true
      })
    }
  }

  logout = () => {
    const { auth } = this.props;
    auth.signOut();
  };

  changeScreen = screen => {
    this.setState({
      userScreen: screen
    })
  }

  render() {
    return (
      <div>
        {this.state.isAuth && (
          <User email={this.state.user.email} logout={this.logout} />
        )}
      <div className="container mt-3">
        {!this.state.isAuth && this.state.userScreen === 'login' && (
          <Login 
            login={this.login} 
            isAuthError={this.state.isAuthError}
            authError={this.state.authError}
            changeScreen={this.changeScreen} />
          )}
        {!this.state.isAuth && this.state.userScreen === 'signup' && (
          <SingUp
            createAccount={this.createAccount}
            isSignUpError={this.state.isSignUpError}
            signUpError={this.state.signUpError}
            changeScreen={this.changeScreen} />
        )}
        {this.state.isAuth && <NewComment sendComment={this.sendComment} />}
        <Comments comments={this.state.comments} />
        {this.state.isLoading && <p>Carregando ... </p>}
      </div>
      
      </div>
    );
  }
}
