import React, { Component } from 'react'

class Album extends Component {
  render() {
    const { image, title, releaseDate, others } = this.props.album;

    return (
      <section className='section-albums'>
        <img className='img' src={ image } alt={ title } />
        <h2 className='title'>{ title }</h2>
        <p className='paragraphs'>{ releaseDate.year }</p>
        <p className='paragraphs'>
          Lançamento:
          { `${ releaseDate.day }/${ releaseDate.month }/${ releaseDate.year }` }
        </p>
        <p className='paragraphs'>Gravadora: { others.recordCompany }</p>
        <p className='paragraphs'>Formatos: { others.formats }</p>
      </section>
    );
  }
}

export default Album;
