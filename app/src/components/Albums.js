import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import Album from './Album';
import AlbumDetail from './AlbumDetail';
import AddAlbum from './AddAlbum';

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: null };

    this.handleAddAlbum = this.handleAddAlbum.bind(this);
    this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);
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
      if(!ok) throw new Error(json);

      this.getAlbums();
    });
      
  }

  handleDeleteAlbum(id) {
    // dataApi.deleteAlbum(id)
    //   .then(() => {
    //     const copiedAlbums = this.state.albums.slice();
    //     const index = copiedAlbums.findIndex(album => album._id === id);
        
    //     copiedAlbums.splice(index, 1);
    //     this.setState({ albums: copiedAlbums });

    //     if (this.props.location.pathname.endsWith(id)) this.props.history.push('/albums');
    //   });
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
        <Switch>
          <Route path={`${match.url}/:albumId`} component={AlbumDetail}/>
          <Route render={() => <AddAlbum onAdd={this.handleAddAlbum} /> }/> 
        </Switch>
      </div>
    );
  }
}