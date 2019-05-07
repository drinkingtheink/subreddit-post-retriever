import React from 'react'
import { shallow } from 'enzyme'
import RedditLogo from './RedditLogo'

describe(`RedditLogo =====================`, () => {

  it(`renders without crashing`, () => {
    shallow(<RedditLogo />)
  });

  it('renders correctly with no props', () => {
  	const component = shallow(<RedditLogo />);
    expect(component).toMatchSnapshot();
  });

  it('displays active state if fetchingData = true', () => {
    const redditLogo = shallow(<RedditLogo fetchingData={ true } resultsDisplayed={ true } />)
    expect(redditLogo.hasClass('fetching')).toEqual(true)
  });
});