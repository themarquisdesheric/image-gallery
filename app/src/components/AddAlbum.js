import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';

class AddAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = { onAdd: PropTypes.func.isRequired }

  getInitialState() {
    return { name: '' };
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
    const { name } = this.state;

    return (
      <div className="Add">
        <form 
          onSubmit={e => {
            e.preventDefault();
            this.props.onAdd(this.state);
            this.reset();
          }}
        >
          <fieldset>
            <legend>
              <h2 className="Add-header">
                <MdAddCircleOutline className="Add-icon" />
                Add an album!
              </h2>
            </legend>
            <label>
              Album Name:
                <input 
                  name="name" 
                  value={name}
                  onChange={this.handleChange}
                />
            </label>
            <button type="submit">Add</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddAlbum;