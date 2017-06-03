import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from '../components/Thumbnail';
import images from './_data';

function onDelete() {}

describe('Thumbnail', () => {
  it('renders thumbnails', () => {
    const tree = renderer.create(<Thumbnail data={images} onDelete={onDelete} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});