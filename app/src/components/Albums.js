import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    const { match, location, images } = this.props;

    return (
      <div>
        <h2>Albums</h2>
        <ul>
          <li><Link to={`/albums/${images.superCuteBunnies._id}`}>Super Cute Bunnies</Link></li>
        </ul>

        <Route path={`${match.url}/:albumId`} render={() => <h1>Worked</h1>}/>
      </div>
    );
  }
}