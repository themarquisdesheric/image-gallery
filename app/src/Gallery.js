import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.handleLeftButton = this.handleLeftButton.bind(this);
    this.handleRightButton = this.handleRightButton.bind(this);
  }
  
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  
  handleLeftButton() {
    let decrementIndex = this.state.index;
    decrementIndex--;
    const index = decrementIndex === -1 ? this.props.data.length - 1 : decrementIndex;
    this.setState({ index });
  }

  handleRightButton() {
    let incrementIndex = this.state.index;
    incrementIndex++;
    const index = incrementIndex === this.props.data.length ? 0 : incrementIndex;
    this.setState({ index });
  }

  render() {
    let currentImage = this.props.data[this.state.index];

    let { title, description, url } = currentImage || 
    // how can I stop this from breaking upon removing the || ?
    { title: 'Black & Tan',
      description: 'Seriously heart-melting black and tan bunny... OMG <3',
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
    };

    console.log(this.props.data);

    return (

      <div className="Gallery">
        <div className="button-container">
          <button onClick={this.handleLeftButton}>&larr;</button>
          <button onClick={this.handleRightButton}>&rarr;</button>
        </div>
        <div className="Gallery-view">
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={url} alt={title}/>
        </div>
      </div>
    );
  }
}

export default Gallery;