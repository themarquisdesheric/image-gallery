import React from 'react';
import renderer from 'react-test-renderer';
import AddImage from '../components/AddImage';

function handleAdd() {}

describe('AddImage', () => {
  it('renders a form to add images', () => {
    const tree = renderer.create(<AddImage onAdd={handleAdd} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});