import React, { Component } from "react";
import TvShow from "./TvShow";
import catalog from "../data";

class TvShowList extends Component {
  render() {
    return(
      <section className='series-list'>
        { catalog.map((serie) => (
          <TvShow key={serie.id} catalog={serie} />
        )) }
      </section>
    );
  }
}

export default TvShowList;
