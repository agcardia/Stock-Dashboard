import './App.css';
import React ,{useEffect, useState} from 'react';
import Submit from './components/Submit/Submit';
import Linechart from './components/Graph/Line';
import Barchart from './components/Graph/Bar';

function App() {

  const [response,setResponse] = useState([]);
  const [response2,setResponse2] = useState([]);
  const [endpoint,setEndpoint] = useState('/price/MSFT');
  const [ticker,setTicker] = useState('MSFT')
  const [finance,setFinance] = useState('/financials/MSFT')


  useEffect ( () => {
    fetch(endpoint).then(response => 
      response.json().then(data => {
        setResponse(data.Data);
      }))
  },[endpoint]);

  useEffect ( () => {
    fetch(finance).then(response => 
      response.json().then(data => {
        setResponse2(data.Data);
      }))
  },[finance]);


  const click = (e) => {
    e.preventDefault();
    setTicker(e.target[0].value);
    setEndpoint('/price/'+ticker);
    setFinance('/financials/'+ticker);

  };

  return (
    <div className="App">
      <Submit onSubmit={click}/>
      <div className='graphs'>
      <Linechart data={response} x_key="Date" y_key='Close ($)'/>
      <Barchart data={response} x_key='Date' y_key ='Volume (billion $)'/>
      <Linechart data={response2} x_key='Period' y_key='Earnings ($)'/>
      <Barchart data={response2} x_key='Period' y_key='Revenue (billion $)'/>
      </div>
    </div>
  );
}

export default App;
