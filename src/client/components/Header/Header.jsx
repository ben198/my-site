import React, { PropTypes } from 'react';

const Header = props => (
  <header className="header">
    {props.children}
  </header>
);

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Header.defaultProps = {
  children: [],
};

export default Header;
