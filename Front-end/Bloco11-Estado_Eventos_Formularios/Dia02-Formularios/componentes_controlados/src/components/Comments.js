import React, { Component } from "react";

class Comments extends Component {
  render() {
    const { comments, handleChange } = this.props;
    return (
      <label htmlFor='comments'>
        Deixe seu comentário:
        <textarea
          value={comments}
          name='comments'
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Comments;
