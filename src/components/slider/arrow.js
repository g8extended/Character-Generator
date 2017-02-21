import React, { Component } from 'react';
import { decode } from 'he';

export default class Arrow extends Component {
  render() {
    const text = this.props.type === 'left' ? '&#x276E;' : '&#x276F;';
    
    return (
        <li className="arrow">{ decode(text) }</li>
    );
  }
}
