import React, { Component } from "react";

class TvShow extends Component {
  render() {
    const { name, image, characters, genre, info } = this.props.catalog;
    return (
      <div className='infoSeries'>
        <h1>{ name }</h1>
        <img src={ image } alt={ name } />
        <p>{ `Personagens: ${characters.map((character) => character)}` }</p>
        <p>{`Gênero: ${genre}` }</p>
        <p>{ info.seasons }</p>
        <p>{ `Episódios: ${ info.episodes }` }</p>
      </div>
    )
  }
}

export default TvShow;