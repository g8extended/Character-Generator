import React, { Component, PropTypes } from 'react';
import { headerNavMouseEnter, headerNavMouseLeave } from '../actions/headerNav';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import '../styles/header-nav.scss';
import map from 'lodash/map';

class HeaderNav extends Component {
  
  render() {

    const { data, dispatch } = this.props;
    const items = map(data.items, item => {
      
      const isHovered = data.hovered === item.title;

      let submenu;

      if (item.items && isHovered) {
        const subitems = map(item.items, (subitem) => (
          <li key={subitem.title}>
            <Link
              to={`/assets/${subitem.path || subitem.title}`}
              className="subitem" activeClassName="active"
            >
              {subitem.title}
            </Link>
          </li>
        ));
        submenu = <ul className="submenu">{subitems}</ul>;
      }

      return (
        <li key={item.title}>
          <Link
            to={item.items ? '' : `/assets/${item.path || item.title}`}
            className="item" activeClassName="active"
            onMouseEnter={() => dispatch(headerNavMouseEnter(item.title))}
            onMouseLeave={() => dispatch(headerNavMouseLeave())}
          >
            {item.title}
          </Link>
          {submenu}
        </li>
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
    items: PropTypes.object.isRequired
  }).isRequired
};

export default connect(state => ({ data: state.headerNav }))(HeaderNav);
