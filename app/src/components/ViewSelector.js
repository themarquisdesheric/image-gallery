import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

const views = { List, Thumbnail, Gallery };

class ViewSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { CurrentView: Gallery };

    this.handleChangeView = this.handleChangeView.bind(this);
  }

  static propTypes = { data: PropTypes.array.isRequired }

  componentDidMount() {
    const { history } = this.props;

    if (history.location.search) {
      let lastView = history.location.search.slice(6);
      const View = views[lastView];
      
      this.setState({ CurrentView: View });
    }
  }

  handleChangeView({ target }) {
    const view = target.textContent;
    const View = views[view];
    this.setState({ CurrentView: View });

    this.props.history.push({ search: `?view=${view}` });
  }

  render() {
    let { data, onDelete } = this.props;
    const { CurrentView } = this.state;

    if (!data) return <LoadingSpinner />;

    return (
      <div>
        <div className="button-container">
          {Object.keys(views).map(view => {
            return <button 
                    key={view}
                    onClick={this.handleChangeView}>
                      {view}
                    </button>;
          })}
        </div>
        <CurrentView 
          data={data}
          onDelete={onDelete}
        />
      </div>
    );
  }
}

export default ViewSelector;