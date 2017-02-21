import React, { Component } from 'react';
import CharacterSlider from './components/CharacterSlider';
import styles from './styles/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Hairstyles'
    };
  }
  render() {
    return (
      <div>
        <ul>
          {['Hairstyles', 'Eyes', 'Mouth', 'Beards', 'Clothes', 'Accessories'].map((item, index) => {
            if (this.state.active === item) {
              return (<li key={index} className="active">{item}</li>);
            } else {
              return (<li key={index} onClick={() => this.setState({ active: item })}>{item}</li>);
            }
          })}
        </ul>
        <CharacterSlider />
      </div>
    );
  }
}
