import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    const { name, email, age, image } = this.props.person;
    return (
      <div>
        <p>{ name }</p>
        <p>{ email }</p>
        <p>{ age }</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

export default PersonCard;
