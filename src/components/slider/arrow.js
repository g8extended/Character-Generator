import React, { Component } from 'react';
import { decode } from 'he';

export default class Arrow extends Component {
  render() {
    const text = this.props.type === 'left' ? '&#x276E;' : '&#x276F;';
    
    return (
        <div className="arrow">{ decode(text) }</div>
    );
  }
}
