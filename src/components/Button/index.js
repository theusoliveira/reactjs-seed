import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './styles';

const propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
};

const defaultProps = {
  type: 'button',
  buttonText: '',
};

function ButtonComponent(props) {
  const { type, buttonText } = props;

  return <Button type={type}>{buttonText}</Button>;
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
