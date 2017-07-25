/**
 * React component import
 */
import React, { Component } from 'react';

/**
 * Custom component import
 */
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

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
        <BookDetail />
        <BookList />
      </div>
    );
  }
}

export default App;
