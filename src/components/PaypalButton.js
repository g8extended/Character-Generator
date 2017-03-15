import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import scriptLoader from 'react-async-script-loader';
import { sendProfile } from '../actions/profile';
import Download from './Download';

class PayPalButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      paid: false
    };
    if (typeof window === 'undefined') return;
    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (this.state.loaded) return;

    if ( ! isScriptLoaded || this.props.isScriptLoaded) return;

    if ( ! isScriptLoadSucceed) {
      this.props.onError();
    }

    this.setState({ loaded: true });
  }

  componentDidMount() {
    if ( ! isScriptLoaded || ! isScriptLoadSucceed) return;
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    delete window.React;
    delete window.ReactDOM;
  }

  render() {
    const { dispatch } = this.props;

    const client = {
      sandbox:    'AdFXHbtY_eLcs2JdwBVyfYxXN4ZlnVwUuyCHMih6JQYCCgmhJHiwfEfLpVWqdMy7ANViK9uGQlYJUh5k',
      production: 'xxxxxx',
    };

    const payment = () => {
      return paypal.rest.payment.create('sandbox', client,
        {
          transactions: [
            { amount: { total: '1.00', currency: 'RUB' } },
          ],
        },
      );
    }

    const onAuthorize = (data, actions) => {
      return actions.payment.execute().then(paymentData => {
        const { email, first_name, last_name } = paymentData.payer.payer_info;
        this.setState({ paid: true });
        dispatch(sendProfile({
          email,
          firsrName: first_name,
          lastName: last_name
        }));
      });
    }

    const onCancel = data => {
    }

    if ( ! this.state.loaded) return <div />;

    if (this.state.paid) return <Download />;

    return (
      <paypal.Button.react
        env={'sandbox'}
        client={client}
        payment={payment}
        commit={true}
        onAuthorize={onAuthorize}
        onCancel={onCancel}
      />
    );
  }
}

const PayPalButtonRedux = connect()(PayPalButton);

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButtonRedux);
