import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    passwd: ''
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };
  render() {
    const errorMessages = {
      'auth/invalid-email': 'Email inválido',
      'auth/wrong-password': 'Email e/ou senha inválido',
      'auth/user-not-found': 'Usuário não encontrado'
    }
    return (
      <div>
        <h4>Entre para Comentar: </h4>
        <form className="form-inline">
          <input
            type="text"
            className="form-control mr-2"
            onChange={this.handleChange("email")}
            value={this.state.email}
            name="email"
          />
          <input
            type="password"
            className="form-control"
            onChange={this.handleChange('passwd')}
            value={this.state.passwd}
            name="passwd"
          />
          <button 
            type="button"
            className="btn btn-primary m-1" 
            onClick={this.login}>
              Login
          </button>
          
          <button
            type="button"
            className="btn" 
            onClick={() => this.props.changeScreen('signup')}>
              Criar uma Conta
          </button>
        </form>        
        { 
            this.props.isAuthError && 
            <div className="alert alert-danger"> 
                {errorMessages[this.props.authError]} 
            </div>
          }
      </div>
    );
  }
}

export default Login;
