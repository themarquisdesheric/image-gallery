import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
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
                <input name="title" value={title}
                onChange={this.handleChange} />
            </label>
            <label>
              Description:
                <input name="description" value={description}
                onChange={this.handleChange} />
            </label>
            <label>
              URL:
                <input name="url" value={url}
                onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddImage;