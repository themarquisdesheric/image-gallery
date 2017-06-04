import React, { Component } from 'react';
import albumsApi from '../services/albumsApi';
import LoadingSpinner from './LoadingSpinner';

export default function withAlbums(ComposedComponent) {

  return class AlbumsContainer extends Component {
    constructor(props) {
      super(props);

      this.state = { albums: null };

      this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);
      this.handleAddAlbum = this.handleAddAlbum.bind(this);
    }

    componentDidMount() {
      albumsApi.getAll()
        .then(albums => this.setState({ albums }));
    }

    handleAddAlbum(album) {
      albumsApi.addAlbum(album)
        .then(saved => {
          this.setState({
            albums: [...this.state.albums, saved]
          });
        });
    }

    handleDeleteAlbum(id) {
      albumsApi.removeAlbum(id)
        .then(res => console.log('RESULT FROM WITHALBUMS', res))
        .catch(err => console.log(err));
    }

    render() {
      const { albums } = this.state;

      if (!albums) return <LoadingSpinner />;

      return <ComposedComponent
                {...this.props}
                albums={albums}
                onAdd={this.handleAddAlbum}
                onDelete={this.handleDeleteAlbum}
             />;
    }
  };
}