import React, { Component } from 'react';
import { Label, ReferenceArea, ReferenceLine, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import logo from './logo.svg';
import './App.css';

const data1 = [{ x: 17, y: 3}]
const data2 = [{ x: 18, y: 5}]

const El = () => (<div>A</div>);

// const YLabel = () => (<text><tspan>Estimated Return (%)</tspan></text>)
// const XLabel = () => (<div>Estimated Risk (%)</div>)

class SimpleScatterChart extends Component {
  render () {
    return (
      <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        <XAxis type="number" dataKey={'x'} name='Risk' unit='%' domain={[0, 'dataMax + 10']}>
          <Label angle={0} position="bottom">Estimated Risk (%)</Label>
        </XAxis>
        <YAxis type="number" dataKey={'y'} name='Return' unit='%'  domain={[0, 'dataMax + 10']}>
          <Label angle={-90} position="center">Estimated Return (%)</Label>
        </YAxis>
        <Scatter name='Current Holdings' data={data1} fill='#f4424b' shape="square" />
        <Scatter name='Proposed Holdings' data={data2} fill='#4147f4' shape="triangle" />
        <CartesianGrid />
        <ReferenceArea x1={12} x2={20} y1={0} y2={data2[0].y+10} stroke="red" strokeOpacity={0.3} />
        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SimpleScatterChart />
      </div>
    );
  }
}

export default App;
