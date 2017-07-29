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
      <div>
        <Sparklines height={120} width={180} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>
          {this.average(this.props.data)}
          ({this.props.units})
        </div>
      </div>
    );
  }
}

export default Chart;
