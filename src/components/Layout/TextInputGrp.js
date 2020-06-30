import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextInputGrp extends Component {
  render() {
    const { onChange, lable, name, type, value, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={lable}>{lable}</label>
        <input
          type={type}
          name={name}
          className={classnames('form-control', {
            'is-invalid': error,
          })}
          value={value}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

TextInputGrp.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  lable: PropTypes.string.isRequired,
  error: PropTypes.string,
};

TextInputGrp.defaultProps = {
  type: 'text',
};

export default TextInputGrp;
