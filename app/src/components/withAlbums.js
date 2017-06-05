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
      return albumsApi.removeAlbum(id)
        .then(() => {
          const copiedAlbums = this.state.albums.slice();
          const index = copiedAlbums.findIndex(album => album._id === id);
          
          copiedAlbums.splice(index, 1);
          this.setState({ albums: copiedAlbums });

          if (this.props.location.pathname.endsWith(id)) this.props.history.push('/albums');
        });
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