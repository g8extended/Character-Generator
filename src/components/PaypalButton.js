import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import scriptLoader from 'react-async-script-loader'

const paymentAuthorized = payment => dispatch => {
  dispatch({
    type: 'paymentAuthorized',
    payload: payment
  });
};

const paymentCancelled = payment => dispatch => {
  dispatch({
    type: 'paymentCancelled',
    payload: payment
  });
};

class PayPalButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showButton: false
    }
    if (typeof window === 'undefined') return;
    window.React = React
    window.ReactDOM = ReactDOM
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (!this.state.show) {
      if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
        if (isScriptLoadSucceed) {
          this.setState({ showButton: true })
          console.log('alehop!!', window.paypal.Button.react)
        }
        else this.props.onError()
      }
    }
  }

  componentDidMount () {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true })
    }
  }

  componentWillUnmount() {
    delete window.React
    delete window.ReactDOM
  }

  render() {
    const client = {
      sandbox:    'AdFXHbtY_eLcs2JdwBVyfYxXN4ZlnVwUuyCHMih6JQYCCgmhJHiwfEfLpVWqdMy7ANViK9uGQlYJUh5k',
      production: 'xxxxxx',
    }

    const payment = () => {
      return paypal.rest.payment.create('sandbox', client,
        {
          transactions: [
            { amount: { total: '1.00', currency: 'RUB' } },
          ],
        },
      )
    }

    const onAuthorize = (data, actions) => {
      return actions.payment.execute().then(() => {
        console.log('The payment was completed!', this)
        this.setState({ showButton: false })
        const payment = Object.assign({}, this.props.payment)
        payment.paid = true
        payment.cancelled =  false
        payment.payerID =  data.payerID
        payment.paymentID =  data.paymentID
        payment.paymentToken =  data.paymentToken
        payment.returnUrl =  data.returnUrl
        this.props.dispatch(paymentAuthorized(payment))
      })
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data)
      this.props.dispatch(paymentCancelled())
    }

    if ( ! this.state.showButton) return <div>Loading paypal button...</div>;

    return (
        <paypal.Button.react
          env={'sandbox'}
          client={client}
          payment={payment}
          commit={true}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
        />
    )
  }
}

const PayPalButtonRedux = connect(state => ({
  payment: state.payment
}))(PayPalButton)

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButtonRedux)
