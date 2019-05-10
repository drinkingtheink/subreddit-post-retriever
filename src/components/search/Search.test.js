import React from 'react'
import { mount } from 'enzyme'
import Search from './Search'
import { exampleRawSearchResults } from '../browse/test/exampleRawSearchResults'
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

  it(`displays the search input`, () => {
    const component = mount(<Search />)
    expect(component.find('.subreddit-search__input').exists()).toBe(true)
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
  
  it(`composes search results into groups for pagination`, () => {
    const component = mount(<Search />)
    const instance = component.instance()
    const groupSize = 10
    instance.generateResultsGroups(exampleRawSearchResults, groupSize)
    component.update()
    console.log(`STATE UPPPED >>> ${JSON.stringify(component.state())}`)
    expect(component.state('searchResults').length).toEqual(groupSize)
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

  it(`increments active result page index with pagination action button`, () => {
    const component = mount(<Search />)
    component.setState({ activeResultsPageIndex: 1, searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    component.find('.next-results').simulate('click')
    component.update()
    expect(component.state('activeResultsPageIndex')).toBe(2)
  });

  it(`decrements active result page index with pagination action button`, () => {
    const component = mount(<Search />)
    component.setState({ activeResultsPageIndex: 2, searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    component.find('.prev-results').simulate('click')
    component.update()
    expect(component.state('activeResultsPageIndex')).toBe(1)
  });

  it(`clears search with Clear Search button`, () => {
    const component = mount(<Search />)
    component.setState({ searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    const clearSearchButton = component.find('.clear-search').simulate('click')
    component.update()
    expect(component.state('searchTerm')).toBe('')
    expect(component.state('searchFeedback')).toBe(null)
    expect(component.state('searchResults')).toEqual([])
    expect(component.state('currentSubreddit')).toBe(null)
  });
});
