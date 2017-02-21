import React, { Component, PropTypes } from 'react';
import { headerNavClick } from '../actions/headerNav';
import { setCurrentAsset } from '../actions/assets';
import { connect } from 'react-redux';
import styles from '../styles/header-nav.scss';
import map from 'lodash/map';

class HeaderNav extends Component {
  
  render() {
    
    const items = map(this.props.data.items, (item, index) => {
      
      let subitems, submenu;
      let classes = this.props.data.selected === item.id ? 'item active' : 'item';

      if (item.items) {
        subitems = map(item.items, (subitem, index1) => {
          return (<div className="subitem" key={subitem.id} >{subitem.title.toUpperCase()}</div>)
        });
      }

      submenu = subitems ? (<div className="submenu">{subitems}</div>) : '';

      return (
        <div key={item.id} className={classes} onClick={() => {
          if (this.props.data.selected !== index) {
            this.props.dispatch(headerNavClick(item.id));
            item.assetID && this.props.dispatch(setCurrentAsset(item.assetID));
          }
        }}> { item.title.toUpperCase()} {submenu} </div>
      );
     
    });

    return <ul className="header-nav">{ items }</ul>;
  }
}

HeaderNav.propTypes = {
  data: PropTypes.shape({
    selected: PropTypes.number.isRequired,
    items: PropTypes.object.isRequired
  }).isRequired
};

export default connect(state => ({data: state.headerNav}))(HeaderNav);
