import React, { Component } from 'react'

class Album extends Component {
  render() {
    return (
      <section className='section-albums'>
        <img className='img' src={ this.props.album.image } alt={ this.props.album.title } />
        <h2 className='title'>{ this.props.album.title }</h2>
        <p className='paragraphs'>{ this.props.album.releaseDate.year }</p>
        <p className='paragraphs'>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p className='paragraphs'>Gravadora: { this.props.album.others.recordCompany }</p>
        <p className='paragraphs'>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

export default Album;
