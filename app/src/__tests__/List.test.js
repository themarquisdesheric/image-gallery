import React from 'react';
import renderer from 'react-test-renderer';
import List from '../components/List';
import images from './_data';

describe('List', () => {
  it('renders a list', () => {
    const tree = renderer.create(<List data={images}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});