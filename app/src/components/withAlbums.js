import React, { Component } from 'react';
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
      fetch('/albums')
        .then(res => res.json())
        .then(albums => this.setState({ albums }));
    }

    handleAddAlbum(album) {
      return fetch('/albums', {
        method: 'POST',
        body: JSON.stringify(album),
        headers: new Headers({
          'Content-Type': 'application/json',
        })
      })
        .then(res => Promise.all([res.ok, res.json()]))
        .then(([ok, json]) => {
          if (!ok) throw new Error(json);

          this.setState({
            albums: [...this.state.albums, json]
          });
        });

    }

    handleDeleteAlbum() {

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