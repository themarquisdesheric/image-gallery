import React, { Component } from 'react';

class List extends Component {

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
              <a href="">
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