import React, { Component } from 'react'

class NewComment extends Component {

  state = {
    newComment: ''
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  }

  sendComment = () => {
    this.props.sendComment(this.state.newComment);
    this.setState({
      newComment: ''
    });
  }

  render() {
    return (
      <form className="form-group">
        <label htmlFor="newComment">Digite seu comentário</label>
        <textarea 
          id="newComment"
          className="form-control mb-1"
          value={this.state.newComment} 
          onChange={this.handleChange}></textarea>
          
          <div className="text-right">
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={this.sendComment}>
                Enviar
              </button>
          </div>
      </form>
    )
  }
}

export default NewComment;
