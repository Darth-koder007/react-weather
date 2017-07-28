import React, { Component } from 'react';
import { connect } from 'redux';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
