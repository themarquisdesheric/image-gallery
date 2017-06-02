import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Album ({ name, url, onDelete, _id }) {
  return <li>
          <Link to={url}>
            {name}
          </Link>
          <button 
            onClick={() => onDelete(_id)}
            className="Album-list-delete-button"
          >
            🗑
          </button>
        </li>;
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}