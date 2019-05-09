import React from 'react'
import { mount } from 'enzyme'
import Search from './Search'
import { exampleSearchResultsGroups } from '../browse/test/exampleSearchResultsGroups'

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
    component.find('.subreddit-search__input').simulate('change', event)
    component.update()
    expect(component.state('searchTerm')).toBe(event.target.value)
  });

  it(`displays search results and pagination controls if search results found`, () => {
    const component = mount(<Search />)
    component.setState({ searchResults: exampleSearchResultsGroups, searchTerm: event.target.value });
    component.update()
    expect(component.find('.search-results-header').exists()).toBe(true)
    expect(component.find('.search-results').exists()).toBe(true)
  });

  it(`displays error message if no search results are found`, () => {
    const component = mount(<Search />)
    component.setState({ searchTerm: '(*&iuh98*(', showError: true });
    component.update()
    expect(component.find('.search-results-header').exists()).toBe(false)
    expect(component.find('.search-results').exists()).toBe(false)
    expect(component.find('.search-message').exists()).toBe(true)
    expect(component.find('.search-message h2').text()).toBe('Whoops, something went wrong with your search')
  });

  it(`displays message to user to enter a search term if none exists`, () => {
    const component = mount(<Search />)
    expect(component.find('.search-message').exists()).toBe(true)
    expect(component.find('.search-message h2').text()).toBe('You should enter a search term')
  });
});
