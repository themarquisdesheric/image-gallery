import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import dataApi from '../dataApi';
import LoadingSpinner from './LoadingSpinner';
import ViewSelector from './ViewSelector';
import AddImage from './AddImage';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null
    }
  }

  componentDidMount() {
    dataApi.getAlbum(this.props.match.params.albumId)
      .then(album => {
        if (album) this.setState({ album });
      });
  }

  render() {
    const { album } = this.state;
    if (!album) return <LoadingSpinner />;

    return (
      <div>
        <h2>{album.name}</h2>
        <ViewSelector data={album.images} />
      </div>
    );
  }
}