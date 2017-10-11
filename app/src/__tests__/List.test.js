import React from 'react';
import renderer from 'react-test-renderer';
import shortid from 'shortid';
import List from '../components/List';

function onDelete() {}

const images = [
  {
    title: 'Black & Tan',
    description: 'Seriously heart-melting black and tan bunny... OMG <3',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    _id: shortid.generate()
  }
]

describe('List', () => {
  it('renders a list', () => {
    const tree = renderer.create(<List data={images} onDelete={onDelete} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});