import React from 'react'
import { shallow } from 'enzyme'
import Pagination from './Pagination'
import { examplePaginationPayload } from './test/examplePaginationPayload'

const wrapper = shallow(<Pagination groups={ examplePaginationPayload.groups } activeResultsPageIndex={ examplePaginationPayload.activeResultsPageIndex } activeResultsGroup={ examplePaginationPayload.activeResultsGroup } />)

describe(`Pagination =====================`, () => {

  it(`renders without crashing`, () => {
    shallow(<Pagination />)
  });

  it(`renders with props`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the correct active page', () => {
    expect(wrapper.find('.active-page-index').text()).toEqual((examplePaginationPayload.activeResultsPageIndex + 1).toString())
  });

  it('displays the correct total groups count', () => {
    expect(wrapper.find('.total-groups-count').text()).toEqual((examplePaginationPayload.groups.length).toString())
  });

  it('displays the navigation if there are groups of search results', () => {
    expect(wrapper.find('.clickable-nav').exists()).toEqual(true)
  });

  it('does not display the navigation if there are no groups of search results', () => {
    const customWrapper = shallow(<Pagination groups={ [] } activeResultsPageIndex={ examplePaginationPayload.activeResultsPageIndex } activeResultsGroup={ examplePaginationPayload.activeResultsGroup } />)
    expect(customWrapper.find('.clickable-nav').exists()).toEqual(false)
  });
});