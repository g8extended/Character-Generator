import React, { PropTypes } from 'react';
import { headerNavClick } from '../actions/headerNav';
import { setCurrentAsset } from '../actions/assets';
import { connect } from 'react-redux';
import styles from '../styles/header-nav.scss';
import map from 'lodash/map';

const HeaderNav = (
  ({ dispatch, data }) => (
    <ul className="header-nav">
      {map(data.items, item => {
        if (data.selected === item.id) {
          return (<li key={item.id} className="active">{item.title}</li>);
        } else {
          return (<li key={item.id} onClick={() => {
            dispatch(headerNavClick(item.id));
            item.assetID && dispatch(setCurrentAsset(item.assetID));
          }}>{item.title}</li>);
        }
      })}
    </ul>
  )
);

HeaderNav.propTypes = {
  data: PropTypes.shape({
    selected: PropTypes.number.isRequired,
    items: PropTypes.object.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  data: state.headerNav
});

export default connect(mapStateToProps)(HeaderNav);
