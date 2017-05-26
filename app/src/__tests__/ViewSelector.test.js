import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ViewSelector from '../ViewSelector';
import images from './_data';

describe('View Selector', () => {
  it('renders the default list view, along with buttons to change views', () => {
    const wrapper = shallow(
      <ViewSelector data={images} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});