import React, { Component } from 'react';
import Holes from './Holes.js'

class Slats extends Component {

  render () {
    return (
      <div className="Slat" onClick={() => this.props.handleClick()}>
      {[...Array(this.props.holes.length)].map((x, j) =>
        <Holes key={j} value={this.props.holes[j]}></Holes>)}
      </div>
    )
  }
}

export default Slats;
