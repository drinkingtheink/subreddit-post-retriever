import React from 'react'
import { shallow } from 'enzyme'
import Pagination from './Pagination'
import { examplePaginationPayload } from './test/examplePaginationPayload'

describe(`Pagination =====================`, () => {

  it(`renders without crashing`, () => {
    shallow(<Pagination />)
  });

  it(`renders with props`, () => {
    const component = shallow(<Pagination groups={ examplePaginationPayload.groups } activeResultsPageIndex={ examplePaginationPayload.activeResultsPageIndex } activeResultsGroup={ examplePaginationPayload.activeResultsGroup } />)
    expect(component).toMatchSnapshot();
  });

});