import React from 'react'

const Comment = ({ c }) => {
  let comment = 'vazio';
  let email = 'vazio';
  if (c) {
    if (c.comment) {
      comment = c.comment;
    }
    if (c.email) {
      email = c.email;
    }
  }
  return (
    <div className="card mt-2">
      <div className="card-body">
        {comment} <br />
        <small className="text-muted"> Enviado por: {email}</small> 
      </div>
    </div>
  );
};

export default Comment
