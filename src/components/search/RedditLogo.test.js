import React from 'react';
import ReactDOM from 'react-dom';
import RedditLogo from './RedditLogo';

const compName = 'RedditLogo'

describe(`${compName} =====================`, () => {

  it(`renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<RedditLogo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});