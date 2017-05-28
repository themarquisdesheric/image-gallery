import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

class ViewSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrentView: List
    }

    this.handleListView = this.handleListView.bind(this);
    this.handleThumbnailView = this.handleThumbnailView.bind(this);
    this.handleGalleryView = this.handleGalleryView.bind(this);
  }

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  handleListView() {
    this.setState({ CurrentView: List });
  }
  
  handleThumbnailView() {
    this.setState({ CurrentView: Thumbnail });
  }
  
  handleGalleryView() {
    this.setState({ CurrentView: Gallery });
  }

  render() {

    let { data, onDelete } = this.props;
    const { CurrentView } = this.state;

    if (!data) return <LoadingSpinner />

    return (
      <div>
        <div className="button-container">
          <button onClick={this.handleListView}>List</button>
          <button onClick={this.handleThumbnailView}>Thumbnail</button>
          <button onClick={this.handleGalleryView}>Gallery</button>
        </div>
        <CurrentView data={data}
                     onDelete={onDelete}
        />
      </div>
    );
  }
}

export default ViewSelector;