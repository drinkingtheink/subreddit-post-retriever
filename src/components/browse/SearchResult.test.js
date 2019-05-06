import React from 'react'
import ReactDOM from 'react-dom'
import SearchResult from './SearchResult'
import TestRenderer from 'react-test-renderer'
import { exampleSearchResult } from './test/exampleSearchResult.js'

const compName = 'SearchResult'
const testRenderer = TestRenderer.create(<SearchResult result={ exampleSearchResult } />);
const testInstance = testRenderer.root;

describe(`${compName} =====================`, () => {

  it(`renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResult result={ exampleSearchResult } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});