import React from 'react';
import SvgIcons from './SvgIcons';

export default (
  () => (
    <div className="footer">
      <SvgIcons />
      <ul className="links">
        <li>
          <a href="http://soryan.me" target="_blank">
            <span className="icon-label">Developed by </span>
            <span className="colored">G8.extented</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/KavoonMe" target="_blank">
            <svg className="icon twitter">
              <use xlinkHref="#twitter-icon"></use>
            </svg>
            <span className="icon-label">Twitter</span>
          </a>
        </li>
        <li>
        <a href="https://www.facebook.com/kavoonme/?fref=ts" target="_blank">
          <svg className="icon facebook">
            <use xlinkHref="#facebook-icon"></use>
          </svg>
          <span className="icon-label">Facebook</span>
        </a>
        </li>
        <li>
          <a href="https://creativemarket.com/kavoon" target="_blank">
            <svg className="icon creativemarket">
              <use xlinkHref="#creativemarket-icon"></use>
            </svg>
            <span className="icon-label">CreativeMarket</span>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/KavoonMe" target="_blank">
            <svg className="icon behance">
              <use xlinkHref="#behance-icon"></use>
            </svg>
            <span className="icon-label">Behance</span>
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/Kavoon" target="_blank">
            <svg className="icon dribbble">
              <use xlinkHref="#dribbble-icon"></use>
            </svg>
            <span className="icon-label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="http://kavoon.me" target="_blank">
            <svg className="icon mail">
              <use xlinkHref="#mail-icon"></use>
            </svg>
            <span className="icon-label">kavoon.me</span>
          </a>
        </li>
      </ul>
    </div>
  )
);
