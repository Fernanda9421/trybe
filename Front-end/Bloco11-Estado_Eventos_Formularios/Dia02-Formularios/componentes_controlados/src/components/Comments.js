import React, { Component } from "react";
import PropTypes from 'prop-types';

class Comments extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 250) error = 'Você atingiu o número máximo de caracteres!'

    return (
      <label htmlFor='comments'>
        Deixe seu comentário:
        <textarea
          value={value}
          name='comments'
          onChange={handleChange}
        />

        <span>{error !== undefined ? error : ''}</span>
      </label>
    );
  }
}

Comments.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Comments;
