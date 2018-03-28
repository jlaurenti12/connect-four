import React, { Component } from 'react';

class Holes extends Component {

  render () {
    return (
      <div className="Hole">
        <div className={this.props.value}></div>
      </div>
    )
  }

}

export default Holes;
