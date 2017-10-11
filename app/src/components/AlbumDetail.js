import React, { Component } from 'react';
import albumsApi from '../services/albumsApi';
import LoadingSpinner from './LoadingSpinner';
import ViewSelector from './ViewSelector';
import AddImage from './AddImage';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { album: null };

    this.handleAddImage = this.handleAddImage.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
  }

  componentDidMount() {
    this.getAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.album && this.state.album._id === nextProps.match.params.albumId) return;
    this.getAlbum(nextProps.match.params.albumId);
  }

  getAlbum(id) {
    albumsApi.getAlbum(id)
      .then(album => {
        if (album) this.setState({ album });
      });
  }

  handleAddImage(image) {
    const albumId = this.props.match.params.albumId;

    albumsApi.addImage(image, albumId)
      .then(updatedImages => {
        this.setState({ 
          album: Object.assign({}, this.state.album, { images: updatedImages })
        });
      });
  }

  handleDeleteImage(imageId) {
    const albumId = this.props.match.params.albumId;

    albumsApi.removeImage(imageId, albumId)
      .then(() => {
        const { album } = this.state;
        const index = album.images.findIndex(img => img._id === imageId);
        const copiedImages = album.images.slice();

        copiedImages.splice(index, 1);
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
          onDelete={this.handleDeleteImage}
          history={this.props.history}
        />
        <AddImage onAdd={this.handleAddImage}/>
      </div>
    );
  }
}