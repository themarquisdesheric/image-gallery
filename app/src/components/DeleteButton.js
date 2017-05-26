import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="delete-button"
              onClick={this.props.onClick}>
        Delete 🗑
      </button>
    );
  }
}

export default DeleteButton;