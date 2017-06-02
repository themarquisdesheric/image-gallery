import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Gallery from '../components/Gallery';
import images from './_data';

function onDelete() {}

describe('Gallery', () => {
  it('renders a Gallery view for Black & Tan', () => {
    const wrapper = shallow(
      <Gallery data={images} onDelete={onDelete}/>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a Gallery view for Falling Bunny', () => {
    const wrapper = shallow(
      <Gallery data={images} onDelete={onDelete}/>
    );

    wrapper.find('button').at(1).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a Gallery view for Marshmellow Puff', () => {
    const wrapper = shallow(
      <Gallery data={images} onDelete={onDelete}/>
    );

    wrapper.find('button').at(1).simulate('click');  
    wrapper.find('button').at(1).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a Gallery view for Floppy Ears', () => {
    const wrapper = shallow(
      <Gallery data={images} onDelete={onDelete}/>
    );

    wrapper.find('button').at(1).simulate('click');  
    wrapper.find('button').at(1).simulate('click');  
    wrapper.find('button').at(1).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});