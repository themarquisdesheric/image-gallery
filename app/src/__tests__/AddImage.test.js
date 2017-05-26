import React from 'react';
import renderer from 'react-test-renderer';
import AddImage from '../AddImage';

describe('AddImage', () => {
  it('renders a form to add images', () => {
    const tree = renderer.create(<AddImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});