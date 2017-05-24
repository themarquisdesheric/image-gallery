import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from '../Thumbnail';

const images = [
  {
    title: 'Black & Tan',
    description: 'Seriously heart-melting black and tan bunny... OMG <3',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  },
  {
    title: 'Falling Bunny',
    description: 'I don\'t know if this bunny fell and the picture was taken on impact, but I certainly prefer to think of it that way',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
  },
  {
    title: 'Marshmellow Puff',
    description: 'Is it a rodent or a rabbit? I had to look it up to be sure. Then again, I\'m still not sure',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
  }
];

describe('Thumbnail', () => {
  it('renders thumbnails', () => {
    const tree = renderer.create(<Thumbnail data={images} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});