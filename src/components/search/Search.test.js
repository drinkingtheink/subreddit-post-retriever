import React from 'react'
import { mount } from 'enzyme'
import Search from './Search'

const event = {
	target: { value: 'beer' }
}

describe(`Search =====================`, () => {

  it(`renders without crashing`, () => {
    const component = mount(<Search />)
    expect(component.exists()).toBe(true)
    expect(component).toMatchSnapshot()
  });

  it(`updates state on input change`, () => {
    const component = mount(<Search />)
    const instance = component.instance()
    component.find('.subreddit-search__input').simulate('change', event)
    component.update()
    expect(component.state('searchTerm')).toBe(event.target.value)
  });

  it(`displays search results if found`, () => {
    const component = mount(<Search />)
    component.find('.subreddit-search__input').simulate('change', event)
    component.update()
    console.log(`STATE UPDATED >>> ${JSON.stringify(component.instance().state)}`)
  });
});
