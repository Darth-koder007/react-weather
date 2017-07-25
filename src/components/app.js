/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * Custom component import
 */
import SearchBar from '../containers/search_bar';

/**
 * App class
 */
class App extends Component {
  /**
   * App constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * render component
   */
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
