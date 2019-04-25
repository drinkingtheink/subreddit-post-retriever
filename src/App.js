import React from 'react';
import logo from './logo.svg';
import SubredditSearch from './components/search/SubredditSearch'
import BrowseSubredditSearchResults from './components/browse/BrowseSubredditSearchResults'
import './App.scss';

function App() {
  return (
    <div className="App">
      <SubredditSearch />  
      <BrowseSubredditSearchResults />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
