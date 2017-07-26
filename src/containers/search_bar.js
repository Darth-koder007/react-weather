import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {term: ''};
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    // TODO: API fetch weather data
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five day forecast for your cities"
          value={this.state.term}
          onInput={this.onInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchBar;
