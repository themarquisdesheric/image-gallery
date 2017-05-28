import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  getInitialState() {
    return {
      title: '',
      description: '',
      url: ''
    }
  }

  reset() {
    this.setState(this.getInitialState());
  }

  handleTitleChange({ target }) {
    this.setState({ title: target.value });
  }

  handleDescriptionChange({ target }) {
    this.setState({ description: target.value });
  }

  handleUrlChange({ target }) {
    this.setState({ url: target.value });
  }

  render() {

    const { title, description, url } = this.state;

    return (
      <div className="Add-image">
        <form onSubmit={e => {
          e.preventDefault();
          this.props.onAdd(this.state);
          this.reset();
        }}>
          <fieldset>
            <legend>
              <h2 className="Add-image-header">
                <MdAddCircleOutline className="Add-image-icon" />
                Add Image
              </h2>
            </legend>
            <label>
              Title:
                <input value={title}
                onChange={this.handleTitleChange} />
            </label>
            <label>
              Description:
                <input value={description}
                onChange={this.handleDescriptionChange} />
            </label>
            <label>
              URL:
                <input value={url}
                onChange={this.handleUrlChange} />
            </label>
            <button type="submit">Add</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddImage;