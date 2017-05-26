import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Gallery from '../Gallery';
import images from './_data';

describe('Gallery', () => {
  it('renders a Gallery view for Black & Tan', () => {
    const wrapper = shallow(
      <Gallery data={images} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});