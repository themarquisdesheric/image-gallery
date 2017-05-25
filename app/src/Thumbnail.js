import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((img, i) => (
          <li key={i} className='Thumbnail'>
            <div>
              <img src={img.url} alt={img.title} className='Thumbnail-image'/>
            </div>
            <div className='Thumbnail-title'>
              {img.title}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Thumbnail;