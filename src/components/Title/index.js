import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: '',
};

function TitleComponent({ title }) {
  return <h1>{title}</h1>;
}

TitleComponent.propTypes = propTypes;
TitleComponent.defaultProps = defaultProps;
export default TitleComponent;
