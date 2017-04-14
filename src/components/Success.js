import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Profile from './slider/profile';
import { checkPayment } from '../actions/checkout';

class Success extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(checkPayment(query.sale_id));
  }

  render() {
    const { downloadUrl } = this.props;
    return (
      <div className="success-page">
        <div className="character-slider">
          <Profile />
        </div> 
        <div>
          <a href={`${downloadUrl}`} className="button">Download character</a>
        </div>
        <div className="text">
          You can download your character here <br />or in email
        </div>
      </div>
    );
  }
}

export default connect(({ routing, checkout: { downloadUrl } }) => ({
  query: routing.locationBeforeTransitions.query,
  downloadUrl
}))(Success);
