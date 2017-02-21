import React, { Component, PropTypes } from 'react';
import { headerNavClick } from '../actions/headerNav';
import { connect } from 'react-redux';
import styles from '../styles/header-nav.scss';

class HeaderNav extends Component {
  
  render() {
    
    const items = this.props.data.items.map((item, index) => {
      
      let subitems, submenu;
      let classes = this.props.data.selected === index ? 'item active' : 'item';

      if (item.items) {
        subitems = item.items.map((subitem, index1) => {
          return (<div className="subitem" key={'' + index + index1} >{subitem.title.toUpperCase()}</div>)
        });
      }

      submenu = subitems ? (<div className="submenu"> {subitems}</div>) : '';

      return (
        <div key={index} className={classes} onClick={() => (this.props.data.selected !== index) && this.props.dispatch(headerNavClick(index))}>
          {item.title.toUpperCase()}{submenu}
        </div>
      );
     
    });

    return <ul className="header-nav">{ items }</ul>;
  }
}

HeaderNav.propTypes = {
  data: PropTypes.shape({
    selected: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

export default connect(state => ({data: state.headerNav}))(HeaderNav);
