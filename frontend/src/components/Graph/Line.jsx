import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';


function Linechart({data, x_key,y_key}) {
    return (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 15, left: 10 }}>
    <Line type="monotone" dataKey={y_key} stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey={x_key} label={{value:{x_key}.x_key,position:"insideCenter",dy:20}} />
    <YAxis label={{value:{y_key}.y_key,position:"insideLeft", angle:-90,dx:6}}/>
    <Tooltip />
  </LineChart>
    );
}

export default Linechart;