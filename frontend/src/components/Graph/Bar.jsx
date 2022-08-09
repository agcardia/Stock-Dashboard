import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';


function Barchart({data, x_key,y_key}) {
    return (
  <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 15, left: 10 }}>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey={x_key} label={{value:{x_key}.x_key,position:"insideCenter",dy:20}}/>
    <YAxis label={{value:{y_key}.y_key,position:"insideLeft", angle:-90,dx:6,dy:30}}/>
    <Tooltip />
    <Bar dataKey={y_key} fill="#8884d8" />
  </BarChart>
    );
}

export default Barchart;