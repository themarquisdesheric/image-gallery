import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    const { data, onDelete } = this.props;

    return (
      <div>
        {data.map((img) => (
          <ul key={img._id}>
            <li className="list-title">
              {img.title}
            </li>
            <li>
              <a href="">
                {img.url}
              </a>
            </li>
            <li>
              {img.description}
            </li>
            <li>
              <button onClick={() => onDelete(img._id)}
                      className="delete-button"
              >
                Delete 🗑
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default List;