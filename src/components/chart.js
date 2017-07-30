import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Chart extends Component{
  constructor(props) {
    super(props);
  }

  average(data) {
    return Math.round((data.reduce((sum, val) => sum+val, 0))/data.length);
  }

  render() {
    return (
      <div className="chart">
        <Sparklines height={200} width={250} data={this.props.data}>
          <SparklinesLine color={this.props.color} style={{ fill: this.props.color, fillOpacity: "1" }} />
          <SparklinesReferenceLine type="avg" color="white"/>
        </Sparklines>
        <div className="chart-info">{this.average(this.props.data)} ({this.props.units})</div>
      </div>
    );
  }
}

export default Chart;
