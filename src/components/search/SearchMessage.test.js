import React from 'react';
import ReactDOM from 'react-dom';
import SearchMessage from './SearchMessage';

const compName = 'SearchMessage'

describe(`${compName} =====================`, () => {

  it(`renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchMessage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
