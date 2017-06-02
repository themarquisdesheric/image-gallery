import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Album ({ name, url }) {
  return <li><Link to={url}>{name}</Link></li>;
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}