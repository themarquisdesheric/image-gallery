import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((img, i) => (
          <ul key={i}>
            <li>
              {img.title}
            </li>
            <li>
              <a href=''>
                {img.url}
              </a>
            </li>
            <li>
              {img.description}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default List;