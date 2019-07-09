import React from 'react'

const User = props => {
  return (
    <div className="bg-info">
      <div className="container text-white d-flex justify-content-end align-items-center">

        {/* Usuário logado como:  */}
        <small>{props.email}</small>
        <button 
          type="button" 
          className="btn btn-danger btn-sm ml-3" 
          onClick={props.logout}>
            Sair
        </button>
      </div>
    </div>
  );
};

export default User
