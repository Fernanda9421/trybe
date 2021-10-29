import React, { Component } from "react";
import Ticket from '../imgs/ticket.png';
import Vip from '../imgs/vip-card.png';
import Cinema from '../imgs/cinema.png'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='title'>
          <h1>Trybe TvShow</h1>
          <img className='ticket' src={Cinema} alt="Pipoca" />
        </div>
        <div className='images'>
          <img className='ticket' src={Ticket} alt="Ticket de cinema" />
          <img className='ticket' src={Vip} alt="Ticket de cinema" />
        </div>
      </div>
    );
  }
}

export default Header;
