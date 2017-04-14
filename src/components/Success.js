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
        <div className="success-icon">
          <img src="/i/check.svg" alt="success icon" />
        </div>
        <h2 className="blue-header">PAYMENT COMPLETE</h2>
        <div className="text">
          You can download your character here or in email
        </div>
        <div className="character-slider">
          <Profile />
        </div> 
        <div>
          {downloadUrl && <a href={`${downloadUrl}`} className="button">Download character</a>}
          <Link to="/" className="link">GO GENERATE MORE</Link>
        </div>
      </div>
    );
  }
}

export default connect(({ routing, checkout: { downloadUrl } }) => ({
  query: routing.locationBeforeTransitions.query,
  downloadUrl
}))(Success);
