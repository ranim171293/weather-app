import React from 'react';
import 'react-vis/dist/style.css';
import {XYPlot,XAxis, VerticalGridLines, LineMarkSeries} from 'react-vis';
import GraphComponent from './style';

class Graph extends React.PureComponent {
  render() {
    const {hourlyData} = this.props;
    return (
      <GraphComponent>
      <XYPlot height={200} width={300}>
      <XAxis />
      <VerticalGridLines />
        <LineMarkSeries className="linemark-series-example-2"
        curve={'curveMonotoneX'}
        lineStyle={{stroke: '28b5e0'}}
        size= '4'
        strokeWidth= '2'
        fill = "white"
        // fill= '#ffffff' #4dc1e000
        markStyle={{stroke: '2ec2f0'}}
        data={hourlyData}>
        </LineMarkSeries>
        </XYPlot>
      </GraphComponent>
    )
  }
}

export default Graph;