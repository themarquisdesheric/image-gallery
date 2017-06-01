import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import dataApi from '../dataApi';
import LoadingSpinner from './LoadingSpinner';
import AlbumDetail from './AlbumDetail';

function Album({ name, images, url }) {
  return <li><Link to={url}>{name}</Link></li>;
}

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: null
    }

    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    dataApi.getAll().then(albums => this.setState({ albums }));
  }

  // handleAdd(image) {
  //   dataApi.addImage(image)
  //     .then(img => {
  //       this.setState({
  //         images: [...this.state.images, img]
  //       });
  //     });
  // }

  // handleDelete(id) {
  //   dataApi.deleteImage(id)
  //     .then(() => {
  //       const { images } = this.state;
  //       const index = images.findIndex(img => img._id === id);

  //       images.splice(index, 1)
  //       this.setState({ images });
  //     });
  // }

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
      </div>
    );
  }
}