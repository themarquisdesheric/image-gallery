import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ViewSelector from '../components/ViewSelector';
import images from './_data';

describe('View Selector', () => {
  it('renders the default list view, along with buttons to change views', () => {
    const wrapper = shallow(
      <ViewSelector data={images} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the thumbnail view', () => {
    const wrapper = shallow(
      <ViewSelector data={images} />
    );

    wrapper.find('button').at(1).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  
  it('renders the gallery view', () => {
    const wrapper = shallow(
      <ViewSelector data={images} />
    );

    wrapper.find('button').at(2).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});