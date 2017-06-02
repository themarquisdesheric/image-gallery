import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import dataApi from '../dataApi';
import LoadingSpinner from './LoadingSpinner';
import Album from './Album';
import AlbumDetail from './AlbumDetail';
import AddAlbum from './AddAlbum';

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: null }
    this.handleAddAlbum = this.handleAddAlbum.bind(this);
    this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);
  }

  componentDidMount() {
    dataApi.getAll().then(albums => this.setState({ albums }));
  }

  handleAddAlbum(album) {
    dataApi.addAlbum(album)
      .then(albums => this.setState({ albums }));
  }

  handleDeleteAlbum(id) {
    dataApi.deleteAlbum(id)
      .then(() => {
        const copiedAlbums = this.state.albums.slice();
        const index = copiedAlbums.findIndex(album => album._id === id);
        
        copiedAlbums.splice(index, 1);
        this.setState({ albums: copiedAlbums });
      });
  }

  render() {
    const { albums } = this.state;
    const { match } = this.props;

    if (!albums) return <LoadingSpinner />;

    return (
      <div>
        <h2>Albums</h2>
        <ul>
          {albums.map(album => (
            <Album 
              key={album._id}
              {...album}
              url={`${match.url}/${album._id}`}
              onDelete={this.handleDeleteAlbum}
            />
          ))}
        </ul>
        <Route path={`${match.url}/:albumId`} component={AlbumDetail}/>
        {/* how can I make it so this only renders in the albums view and if the current album is empty? */}
        {albums ? <AddAlbum onAdd={this.handleAddAlbum} /> : null}
      </div>
    );
  }
}