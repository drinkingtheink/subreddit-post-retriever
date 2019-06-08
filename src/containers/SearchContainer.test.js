import React from 'react'
import { mount } from 'enzyme'
import SearchContainer from './SearchContainer'
import { exampleRawSearchResults } from './test/exampleRawSearchResults'
import { exampleSearchResultsGroups } from './test/exampleSearchResultsGroups'

const noResultsFoundString = '(*&iuh98*('
const termDoesntMeetCriteria = 'bb'

const event = {
	target: { value: 'beer' }
}

const noSearchEvent = {
  target: { value: termDoesntMeetCriteria }
}

describe(`Search =====================`, () => {

  it(`renders without crashing`, () => {
    const component = mount(<SearchContainer />)
    expect(component.exists()).toBe(true)
    expect(component).toMatchSnapshot()
  });

  it(`displays the search input`, () => {
    const component = mount(<SearchContainer />)
    expect(component.find('.subreddit-search__input').exists()).toBe(true)
  });

  it(`updates state on input change`, () => {
    const component = mount(<SearchContainer />)
    component.find('.subreddit-search__input').simulate('change', event)
    component.update()
    expect(component.state('searchTerm')).toBe(event.target.value)
  });

  it(`calls the method to fetch JSON if search term meets criteria`, () => {
    const component = mount(<SearchContainer />)
    const instance = component.instance()
    const spy = jest.spyOn(instance, 'searchTheReddits')
    component.find('.subreddit-search__input').simulate('change', event)
    component.update()
    expect(instance.searchTheReddits).toHaveBeenCalled()
  });

  it(`does not call the method to fetch JSON if search term does not meet criteria`, () => {
    const component = mount(<SearchContainer />)
    const instance = component.instance()
    const spy = jest.spyOn(instance, 'searchTheReddits')
    component.find('.subreddit-search__input').simulate('change', noSearchEvent)
    component.update()
    expect(instance.searchTheReddits).not.toHaveBeenCalled()
  });

  it(`displays search results and pagination controls if search results found`, () => {
    const component = mount(<SearchContainer />)
    component.setState({ searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    component.update()
    expect(component.find('.search-results-header').exists()).toBe(true)
    expect(component.find('.search-results').exists()).toBe(true)
  });
  
  it(`composes search results into groups of # passed for pagination`, () => {
    const component = mount(<SearchContainer />)
    const instance = component.instance()
    const groupSize = 10
    instance.generateResultsGroups(exampleRawSearchResults, groupSize)
    component.update()
    const searchResults = component.state('searchResults') || []
    const exampleResultsGroup = searchResults[0].list || []
    expect(exampleResultsGroup.length).toEqual(groupSize)
  });

  it(`displays error message if no search results are found`, () => {
    const component = mount(<SearchContainer />)
    component.setState({ searchTerm: noResultsFoundString, showError: true });
    component.update()
    expect(component.find('.search-results-header').exists()).toBe(false)
    expect(component.find('.search-results').exists()).toBe(false)
    expect(component.find('.search-message').exists()).toBe(true)
    expect(component.find('.search-message h2').text()).toBe('Whoops, something went wrong with your search')
  });

  it(`displays message to user to enter a search term if none exists`, () => {
    const component = mount(<SearchContainer />)
    expect(component.find('.search-message').exists()).toBe(true)
    expect(component.find('.search-message h2').text()).toBe('You should enter a full search term')
  });

  it(`increments active result page index with pagination action button`, () => {
    const component = mount(<SearchContainer />)
    component.setState({ activeResultsPageIndex: 1, searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    component.find('.next-results').simulate('click')
    component.update()
    expect(component.state('activeResultsPageIndex')).toBe(2)
  });

  it(`decrements active result page index with pagination action button`, () => {
    const component = mount(<SearchContainer />)
    component.setState({ activeResultsPageIndex: 2, searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    component.find('.prev-results').simulate('click')
    component.update()
    expect(component.state('activeResultsPageIndex')).toBe(1)
  });

  it(`resets search with Reset Search button`, () => {
    const component = mount(<SearchContainer />)
    component.setState({ searchResults: exampleSearchResultsGroups, searchTerm: event.target.value })
    component.find('.reset-search').simulate('click')
    component.update()
    expect(component.state('searchTerm')).toBe('')
    expect(component.state('searchFeedback')).toBe(null)
    expect(component.state('searchResults')).toEqual([])
    expect(component.state('currentSubreddit')).toBe(null)
    expect(component.state('fetchingData')).toBe(false)
    expect(component.state('activeResultsPageIndex')).toEqual(0)
  });
});
