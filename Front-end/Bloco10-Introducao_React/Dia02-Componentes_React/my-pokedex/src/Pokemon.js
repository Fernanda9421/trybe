import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  })
}

export default Pokemon;