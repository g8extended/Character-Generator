import React, { Component, PropTypes } from 'react';
import { headerNavClick } from '../actions/headerNav';
import { connect } from 'react-redux';
import styles from '../styles/header-nav.scss';
import map from 'lodash/map';
import classNames from 'classnames';

class HeaderNav extends Component {
  
  render() {

    const { data, dispatch } = this.props;
    const items = map(data.items, (item, index) => {
      
      const isActive = data.selected === item.title;
      const classes = classNames('item', { active: isActive});

      let submenu;

      if (item.items) {
        const subitems = map(item.items, (subitem) => (
          <div className="subitem" key={subitem.title} onClick={() => dispatch(headerNavClick(subitem.title))}>
            {subitem.title}
          </div>
        ));
        submenu = <div className="submenu">{subitems}</div>;
      }

      return (
        <div key={item.title} className={classes} onClick={() => isActive || dispatch(headerNavClick(item.title))}>
          {item.title}
          {submenu}
        </div>
      );
     
    });

    return (
      <ul className="header-nav">
        {items}
      </ul>
    );
  }
}

HeaderNav.propTypes = {
  data: PropTypes.shape({
    selected: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired
  }).isRequired
};

export default connect(state => ({ data: state.headerNav }))(HeaderNav);
