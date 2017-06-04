import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import withAlbums from './withAlbums';
import Album from './Album';
import AlbumDetail from './AlbumDetail';
import AddAlbum from './AddAlbum';
  
  // handleDeleteAlbum(id) {
    // dataApi.deleteAlbum(id)
    //   .then(() => {
    //     const copiedAlbums = this.state.albums.slice();
    //     const index = copiedAlbums.findIndex(album => album._id === id);
        
    //     copiedAlbums.splice(index, 1);
    //     this.setState({ albums: copiedAlbums });

    //     if (this.props.location.pathname.endsWith(id)) this.props.history.push('/albums');
    //   });

  /*render() {
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
  }*/

function Albums({ albums, match, onAdd, onDelete }) {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <Album
            key={album._id}
            {...album}
            to={`${match.url}/${album._id}`}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <Switch>
        <Route path={`${match.url}/:albumId`} component={AlbumDetail} />
        <Route render={() => <AddAlbum onAdd={onAdd} />} />
      </Switch>
    </div>
  );
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default withAlbums(Albums);