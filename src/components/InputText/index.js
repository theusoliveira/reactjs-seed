import React from 'react';

import PropTypes from 'prop-types';

import { Container, Label, Icon, TextInput } from './styles';

const propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  icon: PropTypes.string,
  hasLabel: PropTypes.bool,
};

const defaultProps = {
  labelText: '',
  value: '',
  defaultValue: '',
  icon: '',
  hasLabel: true,
};

function TextInputComponent(props) {
  const { hasLabel, labelText, value, defaultValue, icon, ...rest } = props;

  return (
    <Container>
      {hasLabel && <Label>{labelText}</Label>}
      <Icon name={icon} size={20} />
      <TextInput value={value} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

TextInputComponent.propTypes = propTypes;
TextInputComponent.defaultProps = defaultProps;

export default TextInputComponent;
