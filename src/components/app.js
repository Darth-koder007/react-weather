/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * Custom component import
 */
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list'

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
      <div className="app">
        <div className="app-header">
          WEATHER APP
          <span className="sub-header">...WINTER IS COMING</span>
        </div>
        <div className="component-wrapper">
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
