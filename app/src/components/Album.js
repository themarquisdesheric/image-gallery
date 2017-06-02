import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton'

export default function Album ({ name, url, onDelete, _id }) {
  return <li>
          <Link to={url}>
            {name}
          </Link>
          <DeleteButton onClick={() => onDelete(_id)} />
        </li>;
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}