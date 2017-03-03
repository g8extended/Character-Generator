import React, { Component, PropTypes } from 'react';
import { headerNavMouseEnter, headerNavMouseLeave } from '../actions/headerNav';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import '../styles/header-nav.scss';
import map from 'lodash/map';
import classNames from 'classnames';

class HeaderNav extends Component {
  
  render() {

    const { data, dispatch, assets } = this.props;
    const items = map(data.items, item => {

      const isActive = item.title === assets.items[assets.current.asset].menuItem;
      const isHovered = data.hovered === item.title;

      let submenu;

      if (item.items && isHovered) {
        const subitems = map(item.items, (subitem) => (
          <li key={subitem.title} className="subitem" >
            <Link to={`/assets/${subitem.path || subitem.title}`}>
              {subitem.title}
            </Link>
          </li>
        ));
        submenu = <ul className="submenu">{subitems}</ul>;
      }

      return (
        <li key={item.title} className="item"
          onMouseEnter={() => dispatch(headerNavMouseEnter(item.title))}
          onMouseLeave={() => dispatch(headerNavMouseLeave())}
        >
          <Link className={classNames({active: isActive})} to={item.items ? '' : `/assets/${item.path || item.title}`}>
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

export default connect(state => ({ assets: state.assets, data: state.headerNav }))(HeaderNav);
