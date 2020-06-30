import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { brand } = props;
  return (
    <div className="text-light text-center p-3" style={{backgroundColor:'#e43f5a'}}>
      <h2>{brand}</h2>
    </div>
  );
}
Header.propTypes = {
  brand: PropTypes.string.isRequired,
};
export default Header;
