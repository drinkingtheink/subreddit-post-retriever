import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'

describe(`Search =====================`, () => {

  it(`renders without crashing`, () => {
    const component = shallow(<Search />)
    expect(component.exists()).toBe(true)
  });
});
