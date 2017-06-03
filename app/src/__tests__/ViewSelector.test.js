import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MemoryRouter } from 'react-router'
import ViewSelector from '../components/ViewSelector';
import images from './_data';

function onDelete() {}

describe('View Selector', () => {
  it('renders the default list view, along with buttons to change views', () => {
    const wrapper = shallow(
      <ViewSelector data={images} onDelete={onDelete} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the thumbnail view', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <ViewSelector data={images} onDelete={onDelete} />
      </MemoryRouter>
    );

    wrapper.find('button').at(1).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  
  it('renders the gallery view', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <ViewSelector data={images} onDelete={onDelete} />
      </MemoryRouter>
    );

    wrapper.find('button').at(2).simulate('click');  
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});