import React, { Component } from 'react';
import dataApi from '../dataApi';
import LoadingSpinner from './LoadingSpinner';
import ViewSelector from './ViewSelector';
import AddImage from './AddImage';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { album: null }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.album && this.state.album._id === nextProps.match.params.albumId) return;
    this.getAlbum(nextProps.match.params.albumId);
  }

  getAlbum(id) {
    dataApi.getAlbum(id)
      .then(album => {
        if (album) this.setState({ album });
      });
  }

  handleAdd(image) {
    dataApi.addImage(image)
      .then(img => {
        this.setState({
          album: {...this.state.album, images: [...this.state.album.images, img]}
        });
      });
  }

  handleDelete(id) {
    dataApi.deleteImage(id)
      .then(() => {
        const { album } = this.state;
        const index = album.images.findIndex(img => img._id === id);
        const copiedImages = album.images.slice();

        copiedImages.splice(index, 1)
        this.setState({ album: {...this.state.album, images: copiedImages} });
      });
  }

  render() {
    const { album } = this.state;

    if (!album) return <LoadingSpinner />;

    return (
      <div>
        <h2>{album.name}</h2>
        <ViewSelector 
          data={album.images} 
          onDelete={this.handleDelete}
          history={this.props.history}
        />
        <AddImage onAdd={this.handleAdd}/>
      </div>
    );
  }
}