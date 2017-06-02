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
  }

  componentDidMount() {
    dataApi.getAll().then(albums => this.setState({ albums }));
  }

  handleAddAlbum(album) {
    dataApi.addAlbum(album)
      .then(albums => this.setState({ albums }));
  }

  render() {
    const { albums } = this.state;
    const { match } = this.props;

    if (!albums) return <LoadingSpinner />;

    return (
      <div>
        <h2>Albums</h2>
        <ul>
          {albums.map((album) => (
            <Album 
              key={album._id}
              {...album}
              url={`${match.url}/${album._id}`}
            />
          ))}
        </ul>
        <Route path={`${match.url}/:albumId`} component={AlbumDetail}/>
        {/* how can I make it so this only renders in the albums view and if the current album is empty? */}
        {albums ? <AddAlbum onAdd={this.handleAddAlbum}/> : null}
      </div>
    );
  }
}