import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section className='pokemon-infos'>
        <h1 className='name-pokemon'>{ name }</h1>
        <p>{ type }</p>
        <p>{`Average Weight: ${ averageWeight.value } ${ averageWeight.measurementUnit }`}</p>
        <img src={ image } alt={ name } />
      </section>
    )
  }
}

export default Pokemon;