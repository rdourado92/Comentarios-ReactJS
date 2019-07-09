import React, { Component } from 'react'

class SingUp extends Component {
  state = {
    email: '',
    passwd: ''
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  createAccount = () => {
    this.props.createAccount(this.state.email, this.state.passwd )
  }
  
  render() {
    const errorMessages = {
      'auth/email-already-in-use':'Usuário já cadastrado',
      'auth/weak-password':'Senha muito fraca',
      'auth/invalid-email':'E-mail Inválido',
    }
    return(
      <div>
        <h4>Criar Conta</h4>
        <form className="form-inline">
          <input 
            type="text" 
            className="form-control mr-2"
            name="email" 
            onChange={this.handleChange('email')} 
            value={this.state.email}/>
          <input 
            type="password" 
            className="form-control"
            name="passwd" 
            onChange={this.handleChange('passwd')} 
            value={this.state.passwd}/>
          <button 
            type="button"
            className="btn btn-primary m-1"
            onClick={this.createAccount}>
              Criar Conta
          </button>
          <button 
            type="button"
            className="btn"
            onClick={() => this.props.changeScreen('login')}>
              Já possuo uma conta. Entrar!
          </button>
        </form>
        { 
          this.props.isSignUpError && 
          <div className="alert alert-danger">
            {errorMessages[this.props.signUpError]}
          </div>
        }
      </div>
    )
  }
}

export default SingUp
