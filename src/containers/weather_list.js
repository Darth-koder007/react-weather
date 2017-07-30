import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={name} className="weather-list-row">
        <td className="weather-list-item">
          <GoogleMap lat={lat} lon={lon} zoom={10} />
        </td>
        <td className="weather-list-item">
          <Chart color="red" data={temperatures} units="K" />
        </td>
        <td className="weather-list-item">
          <Chart color="blue" data={pressures} units="hPa" />
        </td>
        <td className="weather-list-item">
          <Chart color="green" data={humidities} units="%" />
        </td>
      </tr>
    );
  }

  render() {

    if (this.props.weather.length <= 0) {
      return(
        <div>
          Search weather!!
        </div>
      )
    }

    return (
      <div className="weather-list">
        <table className="weather-list-table">
          <thead className="weather-list-header">
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody className="weather-list-body">
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
