import React, { PropTypes } from 'react';
import { headerNavClick } from '../actions/headerNav';
import { connect } from 'react-redux';

const HeaderNav = (
  ({ dispatch, data }) => (
    <ul className="header-nav">
      {data.items.map((item, index) => {
        if (data.selected === index) {
          return (<li key={index} className="active">{item}</li>);
        } else {
          return (<li key={index} onClick={() => dispatch(headerNavClick(index))}>{item}</li>);
        }
      })}
    </ul>
  )
);

HeaderNav.propTypes = {
  data: PropTypes.shape({
   selected: PropTypes.number.isRequired,
   items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired
};

const mapStateToProps = state => ({
  data: state.headerNav
});

export default connect(mapStateToProps)(HeaderNav);
