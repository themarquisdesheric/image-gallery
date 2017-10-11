import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import OutOfBunnies from './OutOfBunnies';

class Gallery extends Component {
  constructor(props) {
    super(props);
    
    this.state = { index: 0 };

    this.handleGoToPreviousImage = this.handleGoToPreviousImage.bind(this);
    this.handleGoToNextImage = this.handleGoToNextImage.bind(this);
  }

  static propTypes = { 
    data: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  handleGoToPreviousImage() {
    let decrementIndex = this.state.index;
    decrementIndex--;
    const index = decrementIndex === -1 ? this.props.data.length - 1 : decrementIndex;
    this.setState({ index });
  }

  handleGoToNextImage() {
    let incrementIndex = this.state.index;
    incrementIndex++;
    const index = incrementIndex === this.props.data.length ? 0 : incrementIndex;
    this.setState({ index });
  }

  render() {
    let { data, onDelete } = this.props;

    if (!data.length) return <OutOfBunnies />;

    let currentImage = data[this.state.index];

    if (!currentImage) return null;
    
    let { title, description, url, _id } = currentImage;

    return (
      <div className="Gallery">
        <div className="button-container">
          <button onClick={this.handleGoToPreviousImage}>&larr;</button>
          <button onClick={this.handleGoToNextImage}>&rarr;</button>
        </div>
        <div className="Gallery-view">
          <h2>{title}</h2>
          <p>{description}</p>
          <img 
            src={url} 
            alt={title} 
            className="Gallery-image" 
          />
          <br/>
          <DeleteButton 
            onClick={() => {
              onDelete(_id);
            
              if (this.state.index === data.length - 1) this.handleGoToPreviousImage();
            }} 
          />
        </div>
      </div>
    );
  }
}

export default Gallery;