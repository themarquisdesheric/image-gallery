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
      this.getAlbums();
    }

    getAlbums() {
      fetch('/albums')
        .then(res => res.json())
        .then(albums => this.setState({ albums }));
    }

    handleAddAlbum(album) {
      // dataApi.addAlbum(album)
      //   .then(albums => this.setState({ albums }));
      // fetch('/albums', { 
      //   method: 'POST', 
      //   body: JSON.stringify(album)
      // })
      // .then(res => res.json())
      //   .then(savedAlbum => {
      //     console.log('SAVED', savedAlbum);
      //     this.getAlbums();
      //   });

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

          this.getAlbums();
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